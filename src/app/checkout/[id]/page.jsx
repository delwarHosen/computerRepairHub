import React from 'react';

const checkout = async ({ params }) => {
    const p = await params;
    // const singleServiceColl = dbConnect(collectionNameObj.servicesCollection)
    // const data = await singleServiceColl.findOne({ _id: new ObjectId(p.id) })

    const res = await fetch(`http://localhost:3000/api/service/${p.id}`)
    const data = await res.json()
    return (
        <div>
            <h2>{JSON.stringify(data)}</h2>
        </div>
    );
};

export default checkout;