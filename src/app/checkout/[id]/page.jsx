import CheckOut from '@/compnents/Forms/CheckOut';
import { headers } from 'next/headers';
import React from 'react';

const checkout = async ({ params }) => {
    const p = await params;
    const res = await fetch(`http://localhost:3000/api/service/${p.id}`,{
        headers: await headers()
    })
    const data = await res.json()
    return (
        <div>
            <CheckOut data={data}></CheckOut>
        </div>
    );
};

export default checkout;