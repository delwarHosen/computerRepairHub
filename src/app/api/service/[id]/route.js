import { authOptions } from "@/lib/authOption";
import dbConnect, { collectionNameObj } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";


export const DELETE = async (req, { params }) => {
    const p = await params;
    const bookingService = dbConnect(collectionNameObj.bookingCollection);
    const query = { _id: new ObjectId(p.id) }

    const session = await getServerSession(authOptions);
    const currentBooking = await bookingService.findOne(query);
    // const currentBooking = await bookingCollection.findOne(query);
    const isOwenerOk = session?.user.email == currentBooking.email;
    if (isOwenerOk) {
        const deleteBooking = await bookingService.deleteOne(query)
        revalidatePath("/my-booking")
        return NextResponse.json(deleteBooking)
    } else {
        return NextResponse.json({ success: false, message: "Forbiden accesss" }, { status: 401 })
    }

}

export const GET = async (req, { params }) => {
    const p = await params;
    const singleServiceColl = dbConnect(collectionNameObj.servicesCollection)
    const data = await singleServiceColl.findOne({ _id: new ObjectId(p.id) })

    return NextResponse.json(data)
}