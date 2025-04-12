import { CircleCheck } from 'lucide-react';
import React from 'react';

const Brandin = () => {
    return (
        <div className='flex space-x-5 m-16'>
            <div className='flex space-x-2'>
                <div>
                    <CircleCheck className='text-[#00AA55] w-[50px] h-[50px] mt-3' />
                </div>
                <div>
                    <h3 className='text-[28px] font-semibold text-[#3B3B3B]'>Skilled Technicians</h3>
                    <p className='text-[#3B3B3B]'>Our team comprises skilled professionals with extensive training & certifications.</p>
                </div>
            </div>
            <div className='flex space-x-2'>
                <div>
                    <CircleCheck className='text-[#00AA55] w-[50px] h-[50px] mt-3' />
                </div>
                <div>
                    <h3 className='text-[28px] font-semibold text-[#3B3B3B]'>10+ Years Experiences</h3>
                    <p className='text-[#3B3B3B]'>Work with the client to set short-term and long-term financial goals.</p>
                </div>
            </div>
            <div className='flex space-x-2'>
                <div>
                    <CircleCheck className='text-[#00AA55] w-[50px] h-[50px] mt-3' />
                </div>
                <div>
                    <h3 className='text-[28px] font-semibold text-[#3B3B3B]'>Quality Guarantee</h3>
                    <p className='text-[#3B3B3B]'>Work with the client to set short-term and long-term financial goals.</p>
                </div>
            </div>
           
        </div>
    );
};

export default Brandin;