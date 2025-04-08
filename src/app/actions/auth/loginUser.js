"use server"

import dbConnect, { collectionNameObj } from "@/lib/dbConnect";
import bcrypt from "bcryptjs";


export const loginUser = async (payload) => {

    const { email, password } = payload;
    console.log(email,password);

    const userCollection = dbConnect(collectionNameObj.userCollection);
    const user = await userCollection.findOne({ email });

    if (!user) return null;

    // const isPasspordOk = compare(user.password, password);
    const isPasspordOk = bcrypt.compare(user.password, password);

    if (!isPasspordOk) return null;

    return user;
}





