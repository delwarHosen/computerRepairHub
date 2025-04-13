"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import imageVector from "@/assest/quote.png"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Review = () => {

    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/api/reviews")
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1
    // };

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    console.log(reviews);
    return (
        <div className='flex bg-[#071E17] md:p-16 p-6 mt-8 md:mt-16'>
            <div className='md:w-2/3 w-full'>
                <p className='text-center md:text-start text-[#00AA55]'>Client Stories</p>
                <h1 className='md:text-[36px] text-[28px] font-semibold text-white text-center md:text-start'>Client Stories Trusted by Thousands of Satisfied Customers</h1>
                <div className='text-white md:mt-4 md:p-10 '>
                    <Slider {...settings}>
                        {
                            reviews.map((review) => (
                                <div key={review._id}>
                                    <p className='mt-5'>" {review.review} ,,</p>
                                    <hr className='mt-5' />
                                    <div className='flex space-x-3 mt-10 md:p-5'>
                                        <Image className='rounded-full h-[70px] w-[70px]' src={review.image} alt='revew.name' width={80} height={80} />
                                        <div>
                                            <h3 className='text-[28px]'>{review.name}</h3>
                                            <p>{review.designation}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </Slider>
                </div>
            </div>
            <div className='md:p-20 md:mt-10 hidden md:block'>
                <Image src={imageVector} alt=" quote" height={120} width={120}></Image>
            </div>

        </div>
    );
};

export default Review;


