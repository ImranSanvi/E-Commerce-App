import React, { useContext } from 'react';
import { cartContext } from '../Provider/CartProvider';

const CartListCard = ({product}) => {
    
    const {removeFromCart} = useContext(cartContext);

    return (
        <div className='bg-[#FFCDC9]/50 px-3 py-3 rounded-[5px] border-gray-500'>
            <div className='flex justify-between items-center gap-2 grid md:grid-cols-5 '>
                <img className='rounded-[5px] w-[100px] h-[100px] col-span-1 ' src={product.image} alt="" />
                <div className='col-span-3'>
                    <h1 className='font bold'>{product.title}</h1>
                    <p>{product.price}</p>
                    <p>{product.category}</p>
                </div>
                <button onClick={() => removeFromCart(product.id)} className='bg-amber-500 rounded-[10px] p-2 font-bold text-white my-[18px] col-span-1'>remove</button>
            </div>
                
        </div>
    );
};

export default CartListCard;