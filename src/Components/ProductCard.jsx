import React from 'react';
import { BiDollar } from 'react-icons/bi';
import { IoMdStar } from 'react-icons/io';
import { NavLink } from 'react-router';

const Trending = ({product}) => {
    // console.log(product)
    return (
        <div className='rounded-[5px] p-4 border border-gray-300 space-y-5'>
            <img src={product.image} alt="" className='rounded-[5px] h-[300px] w-full' />
            <h2 className='font-bold '>{product.title}</h2>
            <div className='flex justify-between items-center'>
                <div className='text-amber-500 flex justify-between items-center gap-2'>
                    <p>Price : {product.price}</p>
                    <BiDollar></BiDollar>
                </div>
                <div className='text-amber-500 flex justify-between items-center gap-2'>
                    <p>Price : {product.rate}</p>
                    <IoMdStar></IoMdStar>
                </div>
            </div>

            <div className='flex justify-center'>
                <NavLink className='bg-[#706D54] rounded-[5px] py-2 px-3 text-white '>View Details</NavLink>
            </div>
        </div>
    );
};

export default Trending;