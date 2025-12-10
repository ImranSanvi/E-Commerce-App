import React from 'react';

const CartListCard = ({product}) => {
    console.log(product)
    return (
        <div className='bg-[#FFCDC9] p-2 rounded-[5px] border-gray-500 my-3 '>
            <div className='flex gap-5 space-y-5 '>
                <img className='rounded-[5px] w-[100px] h-[100px] ' src={product.image} alt="" />
                <div>
                    <h1 className='font bold'>{product.title}</h1>
                    <p>{product.price}</p>
                    <p>{product.category}</p>
                </div>

                <button className='bg-amber-500 rounded-[10px] p-2 font-bold text-white'>remove items</button>
            </div>
        </div>
    );
};

export default CartListCard;