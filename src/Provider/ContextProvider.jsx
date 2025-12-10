import React, { createContext, useEffect, useState } from 'react';

export const APIContext = createContext();

const ContextProvider = ({children}) => {

    const [productsData, setProductsData] = useState([]);
    const [loading , setLoading] = useState(true);

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then( (data) => {
                setProductsData(data);
                setLoading(false);
            })
            .catch( ()=> setLoading(false));
    },[])

    return <APIContext.Provider value={{productsData, loading}}>{children}</APIContext.Provider>;
};

export default ContextProvider;