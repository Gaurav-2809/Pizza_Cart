import React from 'react'
import Product from '../components/Product'

const Products = () => {
    
    return (
        <>
            <div className='container mx-auto pb-24'>
                <h1 className='font-bold text-lg my-8'>Products</h1>
                <div className='grid grid-cols-5 gap-24 my-8'>
                    <Product/>
                </div>
            </div>
        </>
    )
}

export default Products