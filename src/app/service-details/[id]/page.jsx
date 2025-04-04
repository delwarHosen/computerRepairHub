import dbConnect, { collectionNameObj } from '@/lib/dbConnect';
import { ObjectId } from 'mongodb';
import Image from 'next/image';
import bannerImage from '@/assest/detailsBanner.jpg'
import gadgetImage from '@/assest/gadgetImg.jpg'
import React from 'react';
import { ArrowUpRight, ChevronRight, CircleCheck, Square } from 'lucide-react';
import Link from 'next/link';

const serviceDetails = async ({ params }) => {
    const p = await params;
    const singleServiceColl = dbConnect(collectionNameObj.servicesCollection)
    const data = await singleServiceColl.findOne({ _id: new ObjectId(p.id) })


    // all data loaded
    const serviceCollection = dbConnect(collectionNameObj.servicesCollection)
    const datas = await serviceCollection.find({}).toArray();


    return (
        <div>
            <section className='relative w-full '>
                <Image
                    src={bannerImage}
                    alt="Background"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                />
                <div className="bg-[#071E17] opacity-90 h-80 ">
                    <div className='pt-20 pl-10'>
                        <h2 className='text-5xl font-bold text-white'>{data.title}</h2>
                        <p className='text-white flex mt-5'>
                            <span className='flex'>Home <ChevronRight className='text-[#00AA55]' /></span>
                            <span className='flex'>Services <ChevronRight className='text-[#00AA55]' /></span>
                            <span>{data.title}</span></p>
                    </div>
                </div>
            </section>
            <section className='flex w-full p-10'>
                {/* page Link */}
                <div className='md:w-1/4'>
                    <div className='bg-white rounded-sm flex justify-center'>
                        <div>
                            <h2 className='text-[32px] font-semibold flex items-center gap-1'><Square className=' h-4 w-4 text-white bg-[#00AA55]'></Square> Our Services</h2>
                            <div className='space-y-2 py-4 '>
                                {
                                    datas.map(element => <div key={element._id}>
                                        <Link className={`btn h-[50px] w-[250px] bg-[#D9D9D9] hover:border-2 hover:border-[#00AA55] `} href={`/service-details/${element._id}`}><ArrowUpRight className='text-[#00AA55]' />{element.title}</Link>
                                    </div>)
                                }
                            </div>
                        </div>
                    </div>
                    <div className='mt-3'>
                        <button className="btn w-[300px] h-[50px] text-[20px] bg-[#00AA55] text-white">Checkout <ArrowUpRight /></button>
                    </div>
                </div>
                {/* Page details */}
                <div className=' w-full'>
                    <div className='ml-11'>
                        <Image className='rounded-xl' src={data.image} width={850} height={700} alt='details image'></Image>
                    </div>
                    <div className='ml-12'>
                        <div className='mt-10'>
                            <h1 className='text-[36px] font-semibold'>We give you complete all control</h1>
                            <p>You can position your service offering as one where customers have full autonomy to manage their repair process, whether it’s booking, tracking, or managing the entire experience. This can provide an empowering user experience. Here are the ways to give complete control to your customers. Provide an online self-diagnosis tool where customers can run through a checklist to identify what might be wrong with their device. This could help them choose the correct service.</p>
                        </div>
                        <div className='flex gap-x-5 mt-5 '>
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
            </section>
        </div>
    );
};

export default serviceDetails;