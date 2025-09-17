import Image from 'next/image';
import React from 'react';
import aboutImg from "@/assest/about.jpg"
import { ArrowUpRight } from 'lucide-react';

const AboutPage = () => {
    return (
        <div className='hero-content flex-col lg:flex-row-reverse md:space-x-10 mt-10 md:m-16'>

            <div className='md:w-1/2 md:space-y-5 space-y-2 text-center md:text-start'>
                <h5 className='text-[20px] font-semibold text-[#00AA55]'>About us</h5>
                <h2 className='text-[40px] font-semibold'>Get Solution for All Electric Devices</h2>
                <p>At devicemaster, we are a team of highly skilled technicians with years of experience in the tech repair industry. Our expertise covers a broad spectrum of devices, including laptops, desktops, smartphones, tablets, and more..</p>
                <button className="btn w-[200px] h-[60px] text-[20px] bg-[#00AA55] text-white">More About us <ArrowUpRight /></button>
            </div>
            <div className='md:w-1/2 '>
                <Image className='rounded-xl' src={aboutImg} alt='about img' width={800} height={700}></Image>
            </div>
        </div>
    );
};

export default AboutPage;