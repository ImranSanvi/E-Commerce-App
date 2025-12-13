import React, { useContext } from 'react';
import { BiDollar } from 'react-icons/bi';
import { IoMdStar } from 'react-icons/io';
import { cartContext } from '../Provider/CartProvider';

// const handleAddToCart = (id) =>{
//     addToDB(id);
// }

const ProductDetailsCard = ({products}) => {
    // console.log(products);

    const {addToCart} = useContext(cartContext);
    return (
        <div className='border border-amber-300 p-5 rounded-[10px] space-y-5 '>
            <img className='rounded-[10px] h-[400px]  ' src={products.image} alt="" />
            <h1 className='font-bold text-[25px] '>{products.title}</h1>
            <p className='text-gray-300'>{products.description}</p>

            <div className='flex justify-between items-center'>
                <div className='text-amber-500 flex justify-between items-center gap-2'>
                    <p>Price : {products.price}</p>
                    <BiDollar></BiDollar>
                </div>
                <div className='text-amber-500 flex justify-between items-center gap-2'>
                    <p>Rating : {products?.rating?.rate}</p>
                    <IoMdStar></IoMdStar>
                </div>
            </div>

            <button className='bg-purple-300 p-2 rounded-[10px]  '>{products.category} </button>

           <div className='flex justify-center'>
                <button onClick={()=>addToCart(products.id)} className='bg-amber-400 rounded-[10px] px-4 py-2 text-white font-bold '>Add to card</button>
           </div>

        </div>
    );
};

export default ProductDetailsCard;