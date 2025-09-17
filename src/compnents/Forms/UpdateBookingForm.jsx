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

            // customers
            date,
            phone,
            address,
        }

        // console.log(bookingService);

        // const res = await fetch(`https://tech-repair-hub.vercel.app/api/my-booking/${data._id}`, {
        //     method: "PATCH",
        //     body: JSON.stringify(bookingService)
        // })

        // const payloadService = await res.json()
        // router.push("/my-booking")
        // console.log(payloadService);


        try {
            const res = await fetch(
                `https://tech-repair-hub.vercel.app/api/my-booking/${data._id}`,
                {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json", // important
                    },
                    body: JSON.stringify(bookingService),
                }
            );

            const payloadService = await res.json();

            if (res.ok) {
                alert("✅ Booking updated successfully!");
                router.push("/my-booking"); // redirect after alert
            } else {
                alert(`❌ Update failed: ${payloadService.message || "Try again later"}`);
            }

            console.log(payloadService);
        } catch (error) {
            console.error(error);
            alert("⚠️ Something went wrong while updating.");
        }

    }

    return (
        <div className='md:p-5'>
            <h2 className='text-[24px] font-semibold underline text-center uppercase'>Booking Your Service: {data.service_name}</h2>
            <div className='flex justify-center'>
                <div className='md:w-2/3'>
                    <form onSubmit={handleBooking} className="bg-[#1a1a1a] md:p-10 p-5 rounded-lg">
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
                                <input type="number" defaultValue={data.service_price} readOnly name='price' placeholder="Due Ammount" className="input input-bordered border-gray-500 w-full bg-black/10" required />
                            </div>
                            <div className="form-control md:w-1/2">
                                <label className="fieldset-label font-semibold">Date</label>
                                <input type="date" defaultValue={data.date} name='date' placeholder="Enter Your Password" className="input input-bordered border-gray-500 w-full bg-black/10" required />
                            </div>
                        </div>
                        <div className='md:flex md:space-x-5 space-y-3'>
                            <div className="form-control md:w-1/2">
                                <label className="fieldset-label font-semibold">Phone No</label>
                                <input type="number" defaultValue={data.phone} name='phone' placeholder="Enter Your Phone" className="input input-bordered border-gray-500 w-full bg-black/10" required />
                            </div>
                            <div className="form-control md:w-1/2">
                                <label className="fieldset-label font-semibold">Parmanent Address</label>
                                <input type="text" defaultValue={data.address} name='address' placeholder="Enter Your Address" className="input input-bordered border-gray-500 w-full bg-black/10" required />
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