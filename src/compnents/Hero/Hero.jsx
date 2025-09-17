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
                <div className="md:flex">
                   
                    <div className='text-white md:ml-[50px] md:mt-[50px]'>
                        <h1 className="md:text-[65px] text-[32px] m-5 md:m-1 text-center md:text-start font-bold">Fast, Reliable Computer Repairs – We Fix, You Relax!</h1>
                       <div className='text-center md:text-start'>
                       <button className="btn md:w-[200px] w-[180px]  md:h-[60px] h-[60px] text-[20px] bg-[#00AA55] text-white">Contact us <ArrowUpRight /></button>
                       </div>
                    </div>
                    <Image className='md:h-[500px] h-80 mt-5 ' src={heroImage} alt='heroImage'></Image>
                </div>
            </div>
        </div>
    );
};

export default Hero;