import React, { useContext } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import ProductCard from '../Components/ProductCard';
import LeftAside from '../Components/homelayout/LeftAside';
import RightAside from '../Components/homelayout/RightAside';
import { APIContext } from '../Provider/ContextProvider';

const AllProducts = () => {
    // const data = useLoaderData();
    // console.log(data);

    const {productsData, loading} = useContext(APIContext);
    // console.log(productsData);
    if(loading){
        return (
            <div className='flex justify-center my-[100px]'>
                <span className="loading loading-spinner text-error"></span>
            </div>
        );
    }

    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main className='w-5/6 mx-auto my-[50px] md:my-[100px] '>
                <h1 className='text-green-500 text-[25px] font-bold mb-[30px] '>All Products</h1>
                <div className='grid grid-cols-1 md:grid-cols-12 md:gap-15 space-y-15 md:space-y-0'>
                    <aside className='md:col-span-9 h-fit sticky top-0'>
                        <LeftAside data={productsData}></LeftAside>
                    </aside>
                    <aside className='md:col-span-3 h-fit sticky top-0'>
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