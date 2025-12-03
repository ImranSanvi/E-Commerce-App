import React from 'react';
import logo from './../assets/Logo.png'
import { NavLink } from 'react-router';

const Header = () => {
    return (
        <div className='bg-[#5459AC]/70 text-white flex flex-col md:flex-row space-y-4 md:space-y-0 justify-between items-center px-[42px] md:px-[140px] py-3'>
            <img className='w-[82px] h-[82px] rounded-full' src={logo} alt="" />
            <div className='flex gap-5'>
                <NavLink to={'/'} className='font-semibold text-[16px]'>Home</NavLink>
                <NavLink className='font-semibold text-[16px]'>All Products</NavLink>
                <NavLink className='font-semibold text-[16px]'>About</NavLink>
            </div>
            <button className='bg-[#7132CA] px-3 py-2 rounded-2xl text-white'>Logout</button>
        </div>
    );
};

export default Header;