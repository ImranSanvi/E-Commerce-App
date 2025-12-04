import React from 'react';
import { BiDollar } from 'react-icons/bi';
import { IoMdStar } from 'react-icons/io';

const ProductDetailsCard = ({products}) => {
    // console.log(products);
    return (
        <div className='border border-amber-300 p-5 rounded-[10px] space-y-5 '>
            <img className='rounded-[10px]' src={products.image} alt="" />
            <h1 className='font-bold text-[25px] '>{products.title}</h1>
            <p className='text-gray-300'>{products.description}</p>

            <div className='flex justify-between items-center'>
                <div className='text-amber-500 flex justify-between items-center gap-2'>
                    <p>Price : {products.price}</p>
                    <BiDollar></BiDollar>
                </div>
                <div className='text-amber-500 flex justify-between items-center gap-2'>
                    <p>Price : {products.rate}</p>
                    <IoMdStar></IoMdStar>
                </div>
            </div>

            <h2 className='font-bold'>Available : {products.count} </h2>

           <div className='flex justify-center'>
                <button className='bg-amber-400 rounded-[10px] px-4 py-2 text-white font-bold '>Add to card</button>
           </div>

        </div>
    );
};

export default ProductDetailsCard;

        // "id": 1,
        // "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        // "price": 109.95,
        // "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        // "category": "men's clothing",
        // "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
        // "rating": {
        // "rate": 3.9,
        // "count": 120