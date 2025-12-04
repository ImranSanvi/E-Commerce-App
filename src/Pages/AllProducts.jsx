import React from 'react';
import { useLoaderData } from 'react-router';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import ProductCard from '../Components/ProductCard';
import LeftAside from '../Components/homelayout/LeftAside';
import RightAside from '../Components/homelayout/RightAside';

const AllProducts = () => {
    const data = useLoaderData();
    // console.log(data);

    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main className='w-5/6 mx-auto my-[50px] md:my-[100px] '>
                <h1 className='text-green-500 text-[25px] font-bold mb-[30px] '>All Products</h1>
                <div className='grid grid-cols-1 md:grid-cols-12 md:gap-15 space-y-15 md:space-y-0'>
                    <aside className='md:col-span-9'>
                        <LeftAside data={data}></LeftAside>
                    </aside>
                    <aside className='md:col-span-3'>
                        <RightAside></RightAside>
                    </aside>
                </div>
            </main>

            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default AllProducts;