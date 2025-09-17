import dbConnect, { collectionNameObj } from '@/lib/dbConnect';
// import { ObjectId } from 'mongodb';
import Image from 'next/image';
import bannerImage from '@/assest/detailsBanner.jpg'
import gadgetImage from '@/assest/gadgetImg.jpg'
import React from 'react';
import { ArrowUpRight, ChevronRight, CircleCheck, Square } from 'lucide-react';
import Link from 'next/link';
// import Banner from '@/compnents/Banner/Banner';

const serviceDetails = async ({ params }) => {
    const p = await params;

    const res = await fetch(`https://tech-repair-hub.vercel.app/api/service/${p.id}`)
    
    const data = await res.json()


    // all data loaded
    const serviceCollection = dbConnect(collectionNameObj.servicesCollection)
    const datas = await serviceCollection.find({}).toArray();


    return (
        <div>
            {/* <Banner data={data}></Banner> */}
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
                        <div className='md:flex justify-between '>
                            <h2 className='md:text-5xl text-2xl  font-bold text-white'>{data.title}</h2>
                            <h2 className='md:text-5xl text-2xl font-bold text-white '>Service Fee: ${data.pric}</h2>
                        </div>
                        <p className='text-white flex mt-5'>
                            <span className='flex'>Home <ChevronRight className='text-[#00AA55]' /></span>
                            <span className='flex'>Services <ChevronRight className='text-[#00AA55]' /></span>
                            <span>{data.title}</span></p>
                    </div>
                </div>
            </section>
            <section className='hero-content flex-col lg:flex-row-reverse w-full md:p-10 p-5'>

                {/* Page details */}
                <div className=' w-full'>
                    <div className='md:ml-11'>
                        <Image className='rounded-xl' src={data.image} width={850} height={700} alt='details image'></Image>
                    </div>
                    <div className='md:ml-12'>
                        <div className='mt-10 md:text-start text-center'>
                            <h1 className='md:text-[36px] text-[26px] font-semibold'>We give you complete all control</h1>
                            <p>You can position your service offering as one where customers have full autonomy to manage their repair process, whether it’s booking, tracking, or managing the entire experience. This can provide an empowering user experience. Here are the ways to give complete control to your customers. Provide an online self-diagnosis tool where customers can run through a checklist to identify what might be wrong with their device. This could help them choose the correct service.</p>
                        </div>
                        <div className='md:flex gap-x-5 mt-5 '>
                            <div>
                                <Image className='rounded mt-2' src={gadgetImage} width={400} height={300} alt='gadgetImg'></Image>
                            </div>
                            <div>
                                <h3 className='text-[28px] font-bold' >How to Save Gadget?</h3>
                                <ul className='space-y-2 mt-2'>
                                    <li className='flex gap-x-2'><CircleCheck className='text-[#00AA55]' />Invest in a quality phone case.</li>
                                    <li className='flex gap-x-2'><CircleCheck className='text-[#00AA55]' />A portable personal computer with built-in screen and keyboard</li>
                                    <li className='flex gap-x-2'><CircleCheck className='text-[#00AA55]' />A type of keyboard that uses individual mechanical switches for each key.</li>
                                    <li className='flex gap-x-2'><CircleCheck className='text-[#00AA55]' />A screen used to display the output from a computer.</li>
                                    <li className='flex gap-x-2'><CircleCheck className='text-[#00AA55]' />A camera designed for video conferencing, streaming, and recording.</li>
                                    <li className='flex gap-x-2'><CircleCheck className='text-[#00AA55]' />A small portable storage device used for transferring and storing data.</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
                {/* page Link */}
                <div className='md:-mt-[700px]'>
                    <div className='bg-[#1a1a1a] rounded-sm flex justify-center'>
                        <div>
                            <h2 className='text-[32px] font-semibold flex items-center gap-1'><Square className=' h-4 w-4  bg-[#00AA55]'></Square> Our Services</h2>
                            <div className='space-y-2 md:py-4 p-2 '>
                                {
                                    datas.map(element => <div key={element._id}>
                                        <Link href={`/service-details/${element._id}`} className={`btn h-[50px] w-[250px] bg-[#000000] text-white hover:border-2 hover:border-[#00AA55] `} ><ArrowUpRight className='text-[#00AA55]' />{element.title}</Link>
                                    </div>)
                                }
                            </div>
                        </div>
                    </div>
                    <div className='mt-3'>
                        <Link href={`/checkout/${data._id}`} className="btn w-[300px] h-[50px] text-[20px] bg-[#00AA55] text-white">Checkout <ArrowUpRight /></Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default serviceDetails;