"use server"
import dbConnect, { collectionNameObj } from "@/lib/dbConnect";

export const registerUser = async (payload) => {
    const usersCollection = dbConnect(collectionNameObj.userCollection)
    // console.log(payload);
    const { email, password } = payload;

    if (!email || !password) return { success: false };

    const user = await usersCollection.findOne({ email: payload.email })
    if (!user) {
        const result = await usersCollection.insertOne(payload)
        return {
            success: true,
            acknowledged: result.acknowledged,
            insertedId: result.insertedId.toString(),
        };
    }

    return { success: false };

}