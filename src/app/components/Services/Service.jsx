import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Service = ({ element }) => {
    const { _id,title, image, icon_image, card_detail } = element
    return (
        <div className='md:mt-10 mt-5 mx-auto'>
            <div className="card bg-base-100 md:w-96 w-[350px] shadow-sm">
                <div>
                    <Image className='w-full p-4 rounded-3xl' src={image} width={200} height={200} alt='service image'></Image>
                </div>
                <div className="card-body">
                    <h2 className="text-[28px] font-semibold">{title}</h2>
                    <div className='flex items-center gap-5 mt-2'>
                        <Image src={icon_image} width={50} height={50} alt='service image'></Image>
                        <p>{card_detail}</p>
                    </div>
                    <div className="card-actions mt-4 text-[20px] font-bold text-[#00AA55]">
                      <Link href={`/service-details/${_id}`}>Read More</Link><ArrowUpRight/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;