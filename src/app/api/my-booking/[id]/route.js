import { authOptions } from "@/lib/authOption";
import dbConnect, { collectionNameObj } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server"

export const GET = async (req, { params }) => {
    const p = await params;
    const bookingCollecton = dbConnect(collectionNameObj.bookingCollection);
    const query = { _id: new ObjectId(p.id) };

    const session = await getServerSession(authOptions);
    const email = await session?.user?.email;
    const singleBooking = await bookingCollecton.findOne(query);

    const isOwenerOk = email === singleBooking?.email;

    if (isOwenerOk) {
        return NextResponse.json(singleBooking)
    }
    else {
        return NextResponse.json({ message: "Forbidden Get access" }, { status: 401 })
    }



}


export const PATCH = async (req, { params }) => {
    const p = await params;
    const bookingCollecton = dbConnect(collectionNameObj.bookingCollection);
    const query = { _id: new ObjectId(p.id) };

    const session = await getServerSession(authOptions);
    const email = await session?.user?.email;
    const currentBooking = await bookingCollecton.findOne(query);

    const isOwenerOk = email === currentBooking?.email;

    if (isOwenerOk) {
        const body = await req.json()
        const filter = {
            $set: { ...body }
        };

        const option = {
            upsert: true
        }

        const result = await bookingCollecton.updateOne(query, filter, option);
        revalidatePath("/my-booking")
        return NextResponse.json(result)
    } else {
        return NextResponse.json({ message: "Forbidden update access" }, { status: 401 })
    }


}

