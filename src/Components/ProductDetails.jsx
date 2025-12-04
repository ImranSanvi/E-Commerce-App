import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import Header from './Header';
import Footer from './Footer';
import ProductDetailsCard from './ProductDetailsCard';

const ProductDetails = () => {
    const {id} = useParams();
    const data = useLoaderData();
    // console.log(data);

    const [products, setProducts] = useState({});

    useEffect( ()=>{
        const newProduct = data.find(product => product.id == id);
        setProducts(newProduct);
    }, [data, id])

    // console.log(products);

    return (
        <div>
           <header>
                <Header></Header>
           </header>

           <main className='w-5/6 mx-auto my-[50px] md:my-[100px] '>
                <ProductDetailsCard key={id} products={products}></ProductDetailsCard>
           </main>

           <footer>
                <Footer></Footer>
           </footer>
        </div>
    );
};

export default ProductDetails;