import React from 'react';
import { useLoaderData } from 'react-router';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import ProductCard from '../Components/ProductCard';

const AllProducts = () => {
    const data = useLoaderData();
    // console.log(data);

    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main className='mx-[42px] md:mx-[140px] my-[50px] md:my-[100px]'>
                <h1 className='text-green-500 text-[25px] font-bold mb-[30px] '>All Products</h1>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
                    {
                        data.map(product => <ProductCard key={product.id} product={product}></ProductCard>)
                    }
                </div>
            </main>

            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default AllProducts;