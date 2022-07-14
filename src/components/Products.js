import React, { useEffect, useState } from 'react'
import Product from '../components/Product'

const Products = () => {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'e4e9ac2881mshd1db3270dfd6fc5p18a338jsn652a76b8dddd',
                'X-RapidAPI-Host': 'pizzaallapala.p.rapidapi.com'
            }
        };
        
        fetch('https://pizzaallapala.p.rapidapi.com/productos', options)
            .then(response => response.json())
            .then(products => {
                setProducts(products.productos);
            });
        
    },[]);
    return (
        <>
            <div className='container mx-auto pb-24'>
                <h1 className='font-bold text-lg my-8'>Products</h1>
                <div className='grid grid-cols-5 gap-24 my-8'>
                    {
                        products.map(product => <Product key={product.id} product={product}/>)
                    }
                </div>
            </div>
        </>
    )
}

export default Products;