import { ArrowUpRight, CircleCheck } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import laptopImage from "@/assest/laptop.png"

const Protection = () => {
    return (
        <div className='bg-[#071E17] p-16 mt-16 flex space-x-5'>
            <div className='space-y-5'>
                <h5 className='text-[18px] font-semibold text-[#00AA55]'>Protection</h5>
                <h2 className='text-[40px] font-semibold text-white'>Ultimate Shield for Your Device </h2>
                <button className="btn w-[200px] h-[60px] text-[20px] bg-[#00AA55] text-white">Talk with us <ArrowUpRight /></button>
            </div>
            <div className=' md:w-1/2 pr-12'>
                <Image src={laptopImage} alt='laptop' height={500} width={500}></Image>
            </div>
            <div>
                <h2 className='text-[28px] font-semibold text-white'>How to Save Your Gadget?</h2>
                <ul className='space-y-2 mt-2 text-white'>
                    <li className='flex gap-x-2'><CircleCheck className='text-[#00AA55]' />Invest in a quality phone case.</li>
                    <li className='flex gap-x-2'><CircleCheck className='text-[#00AA55]' />A portable personal computer with built-in screen and keyboard</li>
                    <li className='flex gap-x-2'><CircleCheck className='text-[#00AA55]' />A type of keyboard that uses individual mechanical switches for each key.</li>
                    <li className='flex gap-x-2'><CircleCheck className='text-[#00AA55]' />A screen used to display the output from a computer.</li>
                    <li className='flex gap-x-2'><CircleCheck className='text-[#00AA55]' />A camera designed for video conferencing, streaming, and recording.</li>
                    
                </ul>
            </div>
        </div>
    );
};

export default Protection;