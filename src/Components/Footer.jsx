import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { NavLink } from 'react-router';

const Footer = () => {
    return (
        <div className='bg-[#C9CDCF] text-white px-[42px] md:px-[140px] py-4'>
            <div className='flex flex-col md:flex-row space-y-7 md:space-y-0 justify-between items-start md:items-center'>
                <div className='flex flex-col gap-1'>
                    <NavLink className='font-medium text-[20px]'>Contact Info</NavLink>
                    <NavLink to={'/about'} className='font-medium text-[20px]'>About</NavLink>
                    <NavLink className='font-medium text-[20px]'>Design</NavLink>
                    <NavLink className='font-medium text-[20px]'>Help & Support</NavLink>
                    <NavLink className='font-medium text-[20px]'>Blog</NavLink>
                </div>

                <div className='flex gap-3'>
                    <FaFacebook className='w-[35px] h-[35px]'></FaFacebook>
                    <FaTwitter className='w-[35px] h-[35px]'></FaTwitter>
                    <FaInstagram className='w-[35px] h-[35px]'></FaInstagram>
                </div>

                <div className='flex flex-col gap-1'>
                    <p className='font-medium text-[20px]'>Privacy</p>
                    <p className='font-medium text-[20px]'>Terms & Conditions</p>
                    <p className='font-medium text-[20px]'>Cookie Policy</p>
                </div>

            </div>
            <p className="font-bold text-center text-white">Copyright ©2025 - All right reserved</p>
        </div>
    );
};

export default Footer;