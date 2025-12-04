import React from 'react';
import ProductCard from '../ProductCard';

const LeftAside = ({data}) => {
    console.log(data)
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
            {
                data.map(product => <ProductCard product={product}></ProductCard>)
            }
        </div>
    );
};

export default LeftAside;