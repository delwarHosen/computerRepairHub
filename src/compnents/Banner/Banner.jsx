import React from 'react';

const Banner = ({data}) => {
    return (
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
                        <h2 className='text-5xl font-bold text-white'>{data.title}</h2>
                        <h2 className='text-5xl font-bold text-white '>Service Fee: ${data.pric}</h2>
                    </div>
                    <p className='text-white flex mt-5'>
                        <span className='flex'>Home <ChevronRight className='text-[#00AA55]' /></span>
                        <span className='flex'>Services <ChevronRight className='text-[#00AA55]' /></span>
                        <span>{data.title}</span></p>
                </div>
            </div>
        </section>
    );
};

export default Banner;