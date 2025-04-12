"use client"
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React from 'react';

const UpdateBookingForm = ({ data }) => {
    const { data: session } = useSession()
    const router = useRouter()

    const handleBooking = async (e) => {
        e.preventDefault()
        const form = e.target;
        // const name = form.name.value;
        // const email = form.email.value;
        const date = form.date.value;
        const phone = form.phone.value;
        const address = form.address.value;

        const bookingService = {
            // session
            // customerName: name,
            // email,

            // customers
            date,
            phone,
            address,

            // extra info
            // service_id: data._id,
            // service_name: data.title,
            // service_price: data.pric,
            // service_img: data.image
        }

        // console.log(bookingService);

        const res = await fetch(`http://localhost:3000/api/my-booking/${data._id}`, {
            method: "PATCH",
            body: JSON.stringify(bookingService)
        })
        const payloadService = await res.json()
        router.push("/my-booking")
        console.log(payloadService);
    }

    return (
        <div className='md:p-5'>
            <h2 className='text-[24px] font-semibold underline text-center uppercase'>Booking Your Service: {data.service_name}</h2>
            <div className='flex justify-center'>
                <div className='md:w-2/3'>
                    <form onSubmit={handleBooking} className="bg-white md:p-10 p-5 rounded-lg">
                        <div className='md:flex md:space-x-5 space-y-3'>
                            <div className="form-control md:w-1/2">
                                <label className="fieldset-label font-semibold">Name</label>
                                <input type="text" defaultValue={session?.user?.name} readOnly name='name' placeholder="Enter Your Name" className="input input-bordered w-full" required />
                            </div>
                            <div className="form-control md:w-1/2">
                                <label className="fieldset-label font-semibold">Email</label>
                                <input type="email" defaultValue={session?.user?.email} readOnly name='email' placeholder="Enter Your Email" className="input input-bordered w-full" required />
                            </div>
                        </div>
                        <div className='md:flex md:space-x-5 space-y-3'>
                            <div className="form-control md:w-1/2">
                                <label className="fieldset-label font-semibold">Amount</label>
                                <input type="number" defaultValue={data.service_price} readOnly name='price' placeholder="Due Ammount" className="input input-bordered w-full" required />
                            </div>
                            <div className="form-control md:w-1/2">
                                <label className="fieldset-label font-semibold">Date</label>
                                <input type="date" defaultValue={data.date} name='date' placeholder="Enter Your Password" className="input input-bordered w-full" required />
                            </div>
                        </div>
                        <div className='md:flex md:space-x-5 space-y-3'>
                            <div className="form-control md:w-1/2">
                                <label className="fieldset-label font-semibold">Phone No</label>
                                <input type="number" defaultValue={data.phone} name='phone' placeholder="Enter Your Phone" className="input input-bordered w-full" required />
                            </div>
                            <div className="form-control md:w-1/2">
                                <label className="fieldset-label font-semibold">Parmanent Address</label>
                                <input type="text" defaultValue={data.address} name='address' placeholder="Enter Your Address" className="input input-bordered w-full" required />
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#00AA55] h-[50px] w-full text-white text-[18px]">Update Now</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateBookingForm;