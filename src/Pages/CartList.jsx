import React, { useContext, useEffect, useState } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { APIContext } from '../Provider/ContextProvider';
import { getStoredProducts } from '../utility/AddToDB';
import CartListCard from './CartListCard';

const CartList = () => {
    const {productsData, loading} = useContext(APIContext);
    // console.log(productsData);
    const [cartProduct, setCartProduct] = useState([]);

    useEffect(() => {
        if (!loading) {
            const loadCart = () => {
                const storedProduct = getStoredProducts();
                const ConvertedStoredProduct = storedProduct.map(id => parseInt(id));
                const myProductList = productsData.filter(product =>
                    ConvertedStoredProduct.includes(product.id)
                );
                setCartProduct(myProductList);
            };

            loadCart();

            window.addEventListener("cart-updated", loadCart);

            return () => window.removeEventListener("cart-updated", loadCart);
        }
    }, [productsData, loading]);


    return (
        <div>
            <header>
                <Header></Header>
            </header>

            <main className='my-[41px] md:my-[82px] '>
                <div className='w-5/6 mx-auto grid grid-cols-1 md:grid-cols-2 gap-5'>
                    {
                        cartProduct.map(product => <CartListCard key={product.id} product={product}></CartListCard>)
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