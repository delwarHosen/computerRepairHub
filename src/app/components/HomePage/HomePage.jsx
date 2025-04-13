import Hero from '@/compnents/Hero/Hero';
import React from 'react';
import Services from '../Services/Services';
import Protection from '../Protection/Protection';
import About from '@/compnents/About/About';
import Brandin from '@/compnents/Brandin/Brandin';
import Review from '@/compnents/Review/Review';

const HomePage = () => {
    return (
        <div>
            <Hero></Hero>
            <Services></Services>
            <Protection></Protection>
            <About></About>
            <Review></Review>
            <Brandin></Brandin>
        </div>
    );
};

export default HomePage;