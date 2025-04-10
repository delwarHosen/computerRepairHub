// "use client"
import BookingTable from '@/compnents/Table/BookingTable';
import { headers } from 'next/headers';
// import React, { useEffect, useState } from 'react';

const fetchData = async()=>{
    const res = await fetch("http://localhost:3000/api/service",{
        headers: headers()
    })
    const d = await res.json();
    return d;
}

const MyBooking = async() => {
    const data = await fetchData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch("http://localhost:3000/api/service")
    //         .then(res => res.json())
    //         .then(data => setData(data))
    // }, [])
    return (
        <div>
            <h2 className='text-[28px] font-semibold text-center underline'>My Booking</h2>
            <BookingTable data={data}></BookingTable>
        </div>
    );
};

export default MyBooking;