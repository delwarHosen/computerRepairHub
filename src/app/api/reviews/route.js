import dbConnect, { collectionNameObj } from "@/lib/dbConnect"
import { NextResponse } from "next/server";

export const GET = async (req) => {
    const reviwCillection = dbConnect(collectionNameObj.reviwCillection);
    const reviews = await reviwCillection.find().toArray();

    return NextResponse.json(reviews)
}