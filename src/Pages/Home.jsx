import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { NavLink, useLoaderData } from 'react-router';
import ProductCard from '../Components/ProductCard';
import LeftAside from '../Components/homelayout/LeftAside';
import RightAside from '../Components/homelayout/RightAside';

const Home = () => {
    const data = useLoaderData();
    // console.log(data);

    return (

        <div className='bg-[#C9DABF]/20'>

            <div className='w-5/6 mx-auto grid md:grid-cols-12 py-[41px] md:py-[82px] md:gap-15 space-y-15 md:space-y-0'>

                <aside className='md:col-span-9 h-fit sticky top-0'>
                    <LeftAside data={data}></LeftAside>
                </aside>

                <aside className='md:col-span-3 h-fit sticky top-0 '>
                    <RightAside></RightAside>
                </aside>

            </div>
        </div>
    );
};

export default Home;