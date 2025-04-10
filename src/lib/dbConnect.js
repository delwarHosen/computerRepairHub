import { MongoClient, ServerApiVersion } from 'mongodb';

export const collectionNameObj={
  servicesCollection :"services",
  userCollection: "users",
  bookingCollection: "service_booking"
}

export default function dbConnect(collectionName){
    const uri = "mongodb+srv://computerHub:8YVykM65gpwNRzMy@cluster1.ot4itnh.mongodb.net/?appName=Cluster1";
    // Create a MongoClient with a MongoClientOptions object to set the Stable API version
    const client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      }
    });


    return client.db(process.env.DB_NAME).collection(collectionName)
}


