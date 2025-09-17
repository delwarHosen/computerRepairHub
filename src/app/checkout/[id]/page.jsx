import CheckOut from '@/compnents/Forms/CheckOut';
import { headers } from 'next/headers';
import React from 'react';

const checkout = async ({ params }) => {
    const p = await params;
    const res = await fetch(`https://tech-repair-hub.vercel.app/api/service/${p.id}`, {
        headers: new Headers(await headers())
    })
    
    const data = await res.json()
    return (
        <div>
            <CheckOut data={data}></CheckOut>
        </div>
    );
};

export default checkout;