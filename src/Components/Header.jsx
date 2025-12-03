import React from 'react';
import logo from './../assets/Logo.png'
import { NavLink } from 'react-router';

const Header = () => {
    return (
        <div className='bg-[#5459AC]/70 text-white flex justify-between items-center px-[140px] py-3'>
            <img className='w-[82px] h-[82px] rounded-full' src={logo} alt="" />
            <div className='flex gap-5'>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink>All Products</NavLink>
                <NavLink>About</NavLink>
            </div>
            <button className='bg-[#7132CA] px-3 py-2 rounded-2xl text-white'>Logout</button>
        </div>
    );
};

export default Header;