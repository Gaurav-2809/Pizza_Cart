import React from 'react'
import {Link} from 'react-router-dom'
const Product = (props) => {
    // console.log(props);
    const {product}=props;
    return (
        <>
            <Link to={`/products/${product.id}`}>
                <div>
                    <img src={props.product.linkImagen} alt="pizza" />
                    <h2 className='text-center font-bold'>{props.product.descripcion}</h2>
                    <div className='text-center  mt-2'>
                        <span className='text-sm bg-gray-200 rounded-full px-4 py-1'>Small</span>
                    </div>
                    <div className='flex justify-between mt-2'>
                        <span>{props.product.precio}</span>
                        <button className='bg-yellow-500 font-bold text-black rounded-full px-2 py-1 text-sm'>ADD</button>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default Product