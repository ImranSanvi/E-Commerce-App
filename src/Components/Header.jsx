import React from 'react';
import logo from './../assets/Logo.png'
import { NavLink } from 'react-router';

const Header = () => {
    return (
        <div className='bg-[#5459AC]/70'>

            <div className=' text-white flex flex-col md:flex-row space-y-4 md:space-y-0 justify-between items-center w-5/6 mx-auto py-3'>
                <img className='w-[82px] h-[82px] rounded-full' src={logo} alt="" />
                <div className='flex gap-5'>
                    <NavLink to={'/'} className='font-semibold text-[16px]'>Home</NavLink>
                    <NavLink to={'/allProduct'} className='font-semibold text-[16px]'>All Products</NavLink>
                    <NavLink to={'/about'} className='font-semibold text-[16px]'>About</NavLink>
                </div>
                <button className='bg-gradient-to-r from-[#059212] to-[#9BEC00] px-3 py-2 rounded-2xl text-white'>Logout</button>
            </div>
        </div>
    );
};

export default Header;