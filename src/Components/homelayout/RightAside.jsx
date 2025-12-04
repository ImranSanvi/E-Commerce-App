import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';

const RightAside = () => {
    return (
        <div className='space-y-5'>
            <div className='flex items-center border border-gray-400 rounded-[10px] p-2 gap-4'>
                <FcGoogle className='w-[30px] h-[30px]'></FcGoogle>
                <button className='font-medium text-black'>Login with google</button>
            </div>
            <div className='flex items-center border border-gray-400 rounded-[10px] p-2 gap-4'>
                <BsGithub className='w-[30px] h-[30px]'></BsGithub>
                <button className='font-medium text-black'>Login with github</button>
            </div>
        </div>
    );
};

export default RightAside;