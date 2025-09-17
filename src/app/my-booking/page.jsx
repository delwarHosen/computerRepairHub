// "use client"
import BookingTable from '@/compnents/Table/BookingTable';
import { headers } from 'next/headers';

const fetchData = async()=>{
    const res = await fetch("https://tech-repair-hub.vercel.app/api/service",{
        headers: new Headers(await headers())
    })
    
    const d = await res.json();
    return d;
}

const MyBooking = async() => {
    const data = await fetchData()
    
    return (
        <div>
            <h2 className='text-[28px] font-semibold text-center underline'>My Booking</h2>
            <BookingTable data={data}></BookingTable>
        </div>
    );
};

export default MyBooking;