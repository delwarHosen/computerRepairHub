import React from 'react';
import bannerImage from '@/assest/detailsBanner.jpg'
import Image from 'next/image';
import { ArrowUpRight, ChevronRight, Clock, Headset, MapPin } from 'lucide-react';

const Contact = () => {
    // const handleContact= ()=>{
    //     console.log("hello");
    // }
    return (
        <div>
            {/* banner */}
            <section className='relative w-full '>
                <Image
                    src={bannerImage}
                    alt="Background"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                />
                <div className="bg-[#071E17] opacity-90 h-80 ">
                    <div className='pt-20 p-10'>
                        <div className='flex justify-between '>
                            <h2 className='text-5xl font-bold text-white'>Contact Us</h2>
                            {/* <h2 className='text-5xl font-bold text-white '>Service Fee: ${data.pric}</h2> */}
                        </div>
                        <p className='text-white flex mt-5'>
                            <span className='flex'>Home <ChevronRight className='text-[#00AA55]' /></span>
                            <span className='flex'>Contact <ChevronRight className='text-[#00AA55]' /></span>
                            {/* <span>{data.title}</span> */}
                        </p>
                    </div>
                </div>
            </section>
            {/* card */}
            <section className='flex justify-center items-center'>
                <div className='grid md:grid-cols-3 space-x-2'>
                    <div className='flex space-x-3  py-8 px-5 border-2 border-[#3B3B3B] hover:border-[#00AA55] rounded-xl md:my-10 my-3'>
                        <span className='h-14 w-14 mt-2 border-2 border-[#3B3B3B] hover:border-[#00AA55] hover:bg-[#3B3B3B] hover:text-[#00AA55] rounded-full'><MapPin className='mx-auto mt-3 text-[50px]' /></span>
                        <div>
                            <h3 className='text-[28px] font-semibold'>Our Address</h3>
                            <p>132, Tic St, Kingston, New York 12401 USA.</p>
                        </div>
                    </div>
                    <div className='flex space-x-3 py-8 px-5 border-2 border-[#3B3B3B] hover:border-[#00AA55] rounded-xl md:my-10 my-3'>
                        <span className='h-14 w-14 mt-2 border-2 border-[#3B3B3B] hover:border-[#00AA55] hover:bg-[#3B3B3B] hover:text-[#00AA55] rounded-full'><Headset className='mx-auto mt-3 text-[50px]' /></span>
                        <div>
                            <h3 className='text-[28px] font-semibold'>24/7 Support</h3>
                            <p>+(528) 456-7592, info@example.com</p>
                        </div>
                    </div>
                    <div className='flex space-x-3 py-8 px-5 border-2 border-[#3B3B3B] hover:border-[#00AA55] rounded-xl md:my-10 my-3'>
                        <span className='h-14 w-14 mt-2 border-2 border-[#3B3B3B] hover:border-[#00AA55] hover:bg-[#3B3B3B] hover:text-[#00AA55] rounded-full'><Clock className='mx-auto mt-3 text-[50px]' /></span>
                        <div>
                            <h3 className='text-[28px] font-semibold'>Opening Hours</h3>
                            <p>Sat - Mon 10 am - 8 pm Fri Off - Day</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* contact form */}
            <section>
                <div className='md:w-1/2 bg-[#1a1a1a] m-3 rounded-md md:p-10'>
                    <h3 className='text-[28px] font-semibold text-center'>Send us a Direct Message</h3>
                    <form className="p-5 rounded-lg">
                        <div className='md:flex md:space-x-5 space-y-4'>
                            <div className="form-control w-full">
                                <label className="fieldset-label font-semibold">Name</label>
                                <input type="text" name='name' placeholder="Enter Your Name" className="input input-bordered border-gray-500 w-full bg-black/10" required />
                            </div>
                        </div>
                        <div className='md:flex md:space-x-5 space-y-3'>
                            <div className="form-control md:w-1/2">
                                <label className="fieldset-label font-semibold">Email</label>
                                <input type="email" name='email' placeholder="Enter Your Email" className="input input-bordered border-gray-500 w-full bg-black/10" required />
                            </div>
                            <div className="form-control md:w-1/2">
                                <label className="fieldset-label font-semibold">Phone</label>
                                <input type="number" name='phone' placeholder="Enter Your Phone no" className="input input-bordered border-gray-500 w-full bg-black/10" required />
                            </div>
                        </div>
                        <div className='md:flex md:space-x-5 space-y-3'>
                            <div className="form-control w-full">
                                <label className="fieldset-label font-semibold">Your Message</label>
                                <textarea type="text" name='message' placeholder="Message" className="input input-bordered border-gray-500 w-full bg-black/10  h-28" required />
                            </div>
                            
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#00AA55] h-[50px] w-full text-white text-[18px]">Send Message <ArrowUpRight /></button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Contact;