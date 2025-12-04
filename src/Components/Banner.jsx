import React from 'react';
import banner from './../assets/banner.jpg'
import { NavLink } from 'react-router';

const Banner = () => {
    return (
        <div className='w-full h-[350px] bg-cover bg-center  py-5' style={ {backgroundImage: `url(${banner})`}}>
            <div className='w-5/6 mx-auto'>

                <div className='md:w-2/7 space-y-4'>
                    <h1 className='text-white text-[25px] font-bold'>Shopping And Department store</h1>
                    <p className='text-white mb-20 '>Shopping is a bit of <span className='text-red-500'>relaxing</span> for me, which is someTime troubling for the bank balance</p>
                    <NavLink to={'/about'} className=' text-white py-2 px-3 rounded-2xl bg-[#7132CA]'>Learn more</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Banner;