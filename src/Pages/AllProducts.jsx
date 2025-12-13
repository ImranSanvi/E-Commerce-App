import React, { useContext, useEffect, useState } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import ProductCard from '../Components/ProductCard';
import LeftAside from '../Components/homelayout/LeftAside';
import RightAside from '../Components/homelayout/RightAside';
import { APIContext } from '../Provider/ContextProvider';
import AllProductsRight from '../Components/AllProductsRight';

const AllProducts = () => {
    // const data = useLoaderData();
    // console.log(data);

    const {productsData, loading} = useContext(APIContext);
    // console.log(productsData);

    const [sort, setSort] = useState("");
    const [displayProducts, setDisplayProducts] = useState([]);
    const [searchItem, setSearchItem] = useState("");

    useEffect( ()=>{
        setDisplayProducts(productsData);
    },[productsData])

    // console.log(displayProducts);

    if(loading){
        return (
            <div className='flex justify-center my-[100px]'>
                <span className="loading loading-spinner text-error"></span>
            </div>
        );
    }


    const handleSort = (type) =>{
        setSort(type);
        if(type === 'price'){
            const sortedByPrice = [...displayProducts].sort( (a, b) => a.price-b.price);
            setDisplayProducts(sortedByPrice);
        }
        if(type === 'rating'){
            const sortedByPrice = [...displayProducts].sort( (a, b) => a.rating.rate-b.rating.rate);
            setDisplayProducts(sortedByPrice);
        }
    }

    const handleSearch = (e) => {
        const value = e.target.value;
        setSearchItem(value);
        if (value.trim() === "") {
            setDisplayProducts(productsData);
        } else {
            const filteredProducts = productsData.filter(product =>
                product.title.toLowerCase().includes(value.toLowerCase())
            );
            setDisplayProducts(filteredProducts);
        }
    }

    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main className='w-5/6 mx-auto my-[50px] md:my-[100px] '>
                <h1 className='text-green-500 text-[25px] font-bold mb-[11px] '>All Products</h1>

                <div className='mb-[30px] flex gap-5 items-center'>
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn m-1 bg-gradient-to-r from-[#31694E] via-[#658C58] to-[#BBC863] text-white font-bold">Sort By : {sort ? sort : ""} </div>
                        <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                            <li><a onClick={()=> handleSort("price")} >Price</a></li>
                            <li><a onClick={()=> handleSort("rating")} >Rating</a></li>
                        </ul>
                    </div>

                    <input onChange={handleSearch} type="text" name="" id="" className="w-1/2 md:w-[300px] px-4 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#658C58]" placeholder='Search Item...'/>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-12 md:gap-15 space-y-15 md:space-y-0'>
                    <aside className='md:col-span-9 h-fit sticky top-0'>
                        <LeftAside data={displayProducts}></LeftAside>
                    </aside>
                    <aside className='md:col-span-3 h-fit sticky top-0'>
                        <AllProductsRight></AllProductsRight>
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