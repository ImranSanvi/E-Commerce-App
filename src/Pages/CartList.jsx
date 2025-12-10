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

    useEffect(()=>{
        if(!loading){
            const storedProduct = getStoredProducts();
            const ConvertedStoredProduct = storedProduct.map(id => parseInt(id));
            const myProductList = productsData.filter(product => ConvertedStoredProduct.includes(product.id));
            setCartProduct(myProductList);
        } 
    }, [productsData])

    return (
        <div>
            <header>
                <Header></Header>
            </header>

            {
                cartProduct.map(product => <CartListCard key={product.id} product={product}></CartListCard>)
            }

            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default CartList;