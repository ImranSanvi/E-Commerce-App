import React, { useEffect, useState } from 'react';
import logo from './../assets/Logo.png'
import { NavLink } from 'react-router';
import { FaCartArrowDown } from 'react-icons/fa';
import { getCartCount } from '../utility/AddToDB';

const Header = () => {

    const [count, setCount] = useState(getCartCount());

    useEffect(() => {
        const updateCount = () => {
            setCount(getCartCount());
        };

        // Listen to custom event
        window.addEventListener("cart-updated", updateCount);

        return () => window.removeEventListener("cart-updated", updateCount);
    }, []);


    return (
        <div className='bg-[#5459AC]/70'>

            <div className=' text-white flex flex-col md:flex-row space-y-4 md:space-y-0 justify-between items-center w-5/6 mx-auto py-3'>
                <img className='w-[82px] h-[82px] rounded-full' src={logo} alt="" />
                <div className='flex gap-5'>
                    <NavLink to={'/'} className='font-semibold text-[16px]'>Home</NavLink>
                    <NavLink to={'/allProduct'} className='font-semibold text-[16px]'>All Products</NavLink>
                    <div className='flex items-center relative'>
                        <NavLink to={'/cartList'} className='font-semibold text-[16px]'>My Cart</NavLink>
                        <FaCartArrowDown></FaCartArrowDown>
                        <span className='absolute -top-3 -right-3 bg-amber-600 text-white w-[19px] h-[19px] rounded-full flex justify-center items-center '>
                            {count}
                        </span>
                    </div>
                </div>
                <button className='bg-gradient-to-r from-[#059212] to-[#9BEC00] px-3 py-2 rounded-2xl text-white'>Logout</button>
            </div>
        </div>
    );
};

export default Header;