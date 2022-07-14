import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router';

const SingleProduct = () => {
    const [product, singleProduct]=useState({});
    const params= useParams();

    // console.log(params);

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'e4e9ac2881mshd1db3270dfd6fc5p18a338jsn652a76b8dddd',
                'X-RapidAPI-Host': 'pizzaallapala.p.rapidapi.com'
            }
        };
        fetch(`https://pizzaallapala.p.rapidapi.com/productos/${params.id}`, options)
        .then(res=>res.json())
        .then(product=>{
            console.log(product)
        })
    }, [])
    return (
        <div className='container mx-auto mt-12'>
            <button className='mb-12 font-bold'>Back</button>
            <div className='flex'>
                <img src="/image/peproni.png" alt="pizza" />
                <div className='ml-16'>
                    <h1 className='text-xl font-bold'>Havana Special</h1>
                    <div className='text-md'>Small</div>
                    <div className='font-bold mt-2'>400</div>
                    <button className='bg-yellow-500 font-bold text-black rounded-full px-2 py-1 text-sm'>Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct
