import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { FaFacebook, FaTwitter } from 'react-icons/fa';
import offer1 from './../assets/offer_1.jpg'
import offer2 from './../assets/offer_2.jpg'
import offer3 from './../assets/offer_3.jpg'

const AllProductsRight = () => {
    return (
        <div className='space-y-5'>
            
            <h1 className='font-bold text-[25px]  '>Find Us</h1>
            <div className='flex items-center border border-gray-400 rounded-[10px] p-2 gap-4'>
                <FaFacebook className='w-[25px] h-[25px] text-blue-600'></FaFacebook>
                <button className='font-medium text-black'>Facebook</button>
            </div>
            <div className='flex items-center border border-gray-400 rounded-[10px] p-2 gap-4'>
             <img src="https://img.icons8.com/?size=100&id=BrU2BBoRXiWq&format=png&color=000000" className='w-[25px] h-[25px] ' alt="" />
                <button className='font-medium text-black'>Instagram</button>
            </div>
            <div className='flex items-center border border-gray-400 rounded-[10px] p-2 gap-4'>
                <FaTwitter className='w-[25px] h-[25px] text-blue-400'></FaTwitter>
                <button className='font-medium text-black'>Twitter</button>
            </div>

            <h1 className='font-bold text-[25px] '>Offers</h1>

            <img src={offer1} alt="" />
            <img src={offer2} alt="" />
            <img src={offer3} alt="" />
        </div>
    );
};

export default AllProductsRight;