"use client"
import { useSession } from 'next-auth/react';
import React from 'react';

const CheckOut = ({ data }) => {
    const { data: session } = useSession()

    const handleBooking = async (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const date = form.date.value;
        const phone = form.phone.value;
        const address = form.address.value;

        const bookingService = {
            // session
            customerName: name,
            email,

            // customers
            date,
            phone,
            address,

            // extra info
            service_id: data._id,
            service_name: data.title,
            service_price: data.pric,
            service_img: data.image
        }

        // const res = await fetch("https://tech-repair-hub.vercel.app/api/service", {
        //     method: "POST",
        //     body: JSON.stringify(bookingService)
        // })

        // const payloadService = await res.json()
        // console.log(payloadService);

        try {
            const res = await fetch("https://tech-repair-hub.vercel.app/api/service", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json", // important
                },
                body: JSON.stringify(bookingService),
            });

            const payloadService = await res.json();

            if (res.ok) {
                alert("✅ Booking successful!");
            } else {
                alert(`❌ Booking failed: ${payloadService.message || "Try again later"}`);
            }

            console.log(payloadService);
        } catch (error) {
            console.error(error);
            alert("⚠️ Something went wrong. Please try again.");
        }
    }

    return (
        <div className='md:p-5'>
            <h2 className='text-[24px] font-semibold text-center mb-3'>Booking Your Service: {data.title}</h2>
            <div className='flex justify-center'>
                <div className='md:w-2/3'>
                    <form onSubmit={handleBooking} className="bg-[#1a1a1a] text-white md:p-10 p-5 rounded-lg">
                        <div className='md:flex md:space-x-5 space-y-3'>
                            <div className="form-control md:w-1/2">
                                <label className="fieldset-label font-semibold">Name</label>
                                <input type="text" defaultValue={session?.user?.name} readOnly name='name' placeholder="Enter Your Name" className="input input-bordered border-gray-500 w-full bg-black/10" required />
                            </div>
                            <div className="form-control md:w-1/2">
                                <label className="fieldset-label font-semibold">Email</label>
                                <input type="email" defaultValue={session?.user?.email} readOnly name='email' placeholder="Enter Your Email" className="input input-bordered border-gray-500 w-full bg-black/10" required />
                            </div>
                        </div>
                        <div className='md:flex md:space-x-5 space-y-3'>
                            <div className="form-control md:w-1/2">
                                <label className="fieldset-label font-semibold">Amount</label>
                                <input type="number" defaultValue={data.pric} readOnly name='price' placeholder="Due Ammount" className="input input-bordered border-gray-500 w-full bg-black/10" required />
                            </div>
                            <div className="form-control md:w-1/2">
                                <label className="fieldset-label font-semibold">Date</label>
                                <input type="date" name='date' placeholder="Enter Your Password" className="input input-bordered border-gray-500 w-full bg-black/10" required />
                            </div>
                        </div>
                        <div className='md:flex md:space-x-5 space-y-3'>
                            <div className="form-control md:w-1/2">
                                <label className="fieldset-label font-semibold">Phone No</label>
                                <input type="number" name='phone' placeholder="Enter Your Phone" className="input input-bordered border-gray-500 w-full bg-black/10" required />
                            </div>
                            <div className="form-control md:w-1/2">
                                <label className="fieldset-label font-semibold">Parmanent Address</label>
                                <input type="text" name='address' placeholder="Enter Your Address" className="input input-bordered border-gray-500 w-full bg-black/10" required />
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#00AA55] h-[50px] w-full text-white text-[18px]">Order Confirm</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;