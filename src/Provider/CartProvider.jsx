import React, { createContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

export const cartContext = createContext();

const CartProvider = ( {children}) => {

    const [cartIds, setCartIds] = useState([]);

    useEffect(() => {
        localStorage.setItem("productList", JSON.stringify(cartIds));
    }, [cartIds]);

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("productList")) || [];
        setCartIds(stored);
    }, []);

    const addToCart = (id) => {
        if (cartIds.includes(id)) {
            toast("Already exit in cart");
            return;
        }
        const newCart = [...cartIds];
        newCart.push(id);
        setCartIds(newCart);
        toast("Product added to cart");
    };

    const removeFromCart = (id) => {
        const newCart = cartIds.filter(itemId => itemId !== id);
        setCartIds(newCart);
        toast("Product removed from cart");
    };

    return <cartContext.Provider value={ {addToCart, removeFromCart, cartIds}}>{children}</cartContext.Provider>
};

export default CartProvider;