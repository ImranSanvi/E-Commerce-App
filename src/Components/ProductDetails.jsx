import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Header from './Header';
import Footer from './Footer';
import ProductDetailsCard from './ProductDetailsCard';
import RightAside from './homelayout/RightAside';
import { APIContext } from '../Provider/ContextProvider';
import AllProductsRight from './AllProductsRight';

const ProductDetails = () => {
    const {id} = useParams();
    // console.log(id);

    const {productsData, loading} = useContext(APIContext);
    // console.log(productsData);

    const [products, setProducts] = useState({});

        useEffect(() => {
        if (!loading) {
            const found = productsData.find((p) => p.id == id);
            setProducts(found);
        }
    }, [productsData, id, loading]);


    // console.log(products);

    return (
        <div>
           <header>
                <Header></Header>
           </header>

           <main className='w-5/6 mx-auto my-[50px] md:my-[100px] grid grid-cols-1 md:grid-cols-12 md:gap-15 space-y-15 md:space-y-0 '>
                <aside className='col-span-9 md:h-fit md:sticky md:top-0'>
                    <ProductDetailsCard key={id} products={products}></ProductDetailsCard>
                </aside>
                <aside className='col-span-3 md:h-fit md:sticky md:top-0'>
                    <AllProductsRight></AllProductsRight>
                </aside>
           </main>

           <footer>
                <Footer></Footer>
           </footer>
        </div>
    );
};

export default ProductDetails;