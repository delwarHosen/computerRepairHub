import dbConnect, { collectionNameObj } from '@/lib/dbConnect';
import React from 'react';
import Service from './Service';

const Services = async () => {

    const serviceCollection = dbConnect(collectionNameObj.servicesCollection)
    const data = await serviceCollection.find({}).toArray();

    return (
        <div className='mt-20'>
            <div className='text-center'>
                <p className='text-[#00AA55] font-semibold'>Our services</p>
                <h2 className='md:text-[28px] text-[24px] md:w-1/3 font-semibold mx-auto'>Fast and Reliable Repairs for Every Need</h2>
            </div>
            <div className='grid md:grid-cols-3 gap-2'>
                {
                    data.map(element =>
                        <Service
                            key={element._id}
                            element={element}
                        ></Service>
                    )
                }

            </div>
        </div>
    );
};

export default Services;