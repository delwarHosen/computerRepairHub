import Image from 'next/image';
import React from 'react';
import heroImage from '@/assest/hero.png'
import bgImage from '@/assest/bgImage.jpg'
import { ArrowUpRight } from 'lucide-react';

const Hero = () => {
    return (
        <div className='relative h-screen w-full'>
            <Image
                src={bgImage}
                alt="Background"
                layout="fill"
                objectFit="cover"
                quality={100}
            />
            <div className="hero bg-[#071E17] opacity-90 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <Image className='md:-mr-[16px]' src={heroImage} alt='heroImage'></Image>
                    <div className='text-white md:ml-[50px]'>
                        <h1 className="md:text-[65px] font-bold">Fast, Reliable Computer Repairs – We Fix, You Relax!</h1>
                        <button className="btn w-[200px] h-[60px] text-[20px] bg-[#00AA55] text-white">Contact us <ArrowUpRight /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;