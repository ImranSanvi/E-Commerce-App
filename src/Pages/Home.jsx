import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import banner from './../assets/banner.jpg'
import { NavLink, useLoaderData } from 'react-router';
import ProductCard from '../Components/ProductCard';

const Home = () => {
    const data = useLoaderData();
    // console.log(data);

    return (
        <div>
            <header>
                <Header></Header>
            </header>

            <main>
                <div className='w-full h-[350px] bg-cover bg-center px-[42px] md:px-[140px] py-5' style={ {backgroundImage: `url(${banner})`}}>
                    <div className='md:w-2/7 space-y-4'>
                        <h1 className='text-[#88304E] text-[25px] font-bold'>Shopping And Department store</h1>
                        <p className='text-[#88304E]'>Shopping is a bit of <span className='text-white'>relaxing</span> for me, which is someTime troubling for the bank balance</p>
                        <NavLink to={'/about'} className='text-white py-2 px-3 rounded-2xl bg-[#7132CA]'>Learn more</NavLink>
                    </div>
                </div>

                <div className=' mx-[42px] md:mx-[140px] my-[41px] md:my-[82px]'>
                    <div className=' mb-[21px] md:mb-[42px] grid grid-cols-1 md:grid-cols-3 gap-8 '>
                        {
                            data.map(product => <ProductCard key={product.id} product={product}></ProductCard>)
                        }

                    </div>
                    <div className='flex justify-center'>
                        <NavLink to={'/allProduct'} className='bg-gradient-to-r from-purple-600 to-blue-600 px-3 py-2 rounded-2xl text-white'>Show All</NavLink>
                    </div>
                </div>

            </main>

            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Home;