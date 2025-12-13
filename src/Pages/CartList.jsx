import React, { useContext, useEffect, useState } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { APIContext } from '../Provider/ContextProvider';
import { getStoredProducts } from '../utility/AddToDB';
import CartListCard from './CartListCard';
import { cartContext } from '../Provider/CartProvider';

const CartList = () => {
    const {productsData, loading} = useContext(APIContext);
    // console.log(productsData);
    // const [cartProduct, setCartProduct] = useState([]);
    const {cartIds} = useContext(cartContext);

    if(loading){
        return <span className="loading loading-bars loading-xl"></span>
    }

    const cartProducts = productsData.filter(product =>
        cartIds.includes(product.id)
    );



    return (
        <div>
            <header>
                <Header></Header>
            </header>

            <main className='my-[41px] md:my-[82px] '>
                <div className='w-5/6 mx-auto grid grid-cols-1 md:grid-cols-2 gap-5'>
                    {
                        cartProducts.map(product => <CartListCard key={product.id} product={product}></CartListCard>)
                    }
                </div>
            </main>



            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default CartList;