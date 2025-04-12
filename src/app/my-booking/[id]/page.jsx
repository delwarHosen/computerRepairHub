import UpdateBookingForm from '@/compnents/Forms/UpdateBookingForm';
import { headers } from 'next/headers';
import React from 'react';

const UpdateBooking = async({params}) => {
    const p = await params;
    const res = await fetch(`http://localhost:3000/api/my-booking/${p.id}`,{
        headers: await headers()
    })
    const data = await res.json()
    return (
        <div>
            <UpdateBookingForm data={data}></UpdateBookingForm>
        </div>
    );
};

export default UpdateBooking;