import React, { useContext } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { NavLink} from 'react-router';
import ProductCard from '../Components/ProductCard';
import LeftAside from '../Components/homelayout/LeftAside';
import RightAside from '../Components/homelayout/RightAside';
import { APIContext } from '../Provider/ContextProvider';

const Home = () => {

    const {productsData, loading} = useContext(APIContext);

    if(loading){
        return (
            <div className='flex justify-center my-[100px]'>
                <span className="loading loading-spinner text-error"></span>
            </div>
        );
    }
    const limitedProducts = productsData.slice(0, 9);

    return (

        <div className='bg-[#C9DABF]/20 py-[41px] md:py-[82px]'>

            <div className='w-5/6 mx-auto grid md:grid-cols-12  md:gap-15 space-y-15 md:space-y-0'>

                <aside className='md:col-span-9 md:h-fit md:sticky md:top-0'>
                    <LeftAside data={limitedProducts}></LeftAside>
                </aside>


                <aside className='md:col-span-3 md:h-fit md:sticky md:top-0 '>
                    <RightAside></RightAside>
                </aside>


            </div>

            <div className='flex justify-center mt-5'>
                <NavLink to={'/allProduct'} className='bg-amber-500 px-3 py-2 text-white font-bold rounded-2xl'>Show All</NavLink>
            </div>

        </div>
    );
};

export default Home;