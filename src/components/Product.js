import React from 'react'

const Product = () => {
    return (
        <>
            <div>
                <img src="/image/peproni.png" alt="pizza" />
                <h2 className='text-center font-bold'>Havana Special</h2>
                <div className='text-center  mt-2'>
                    <span className='text-sm bg-gray-200 rounded-full px-4 py-1'>Small</span>
                </div>
                <div className='flex justify-between mt-2'>
                    <span>₹ 500</span>
                    <button className='bg-yellow-500 font-bold text-black rounded-full px-2 py-1 text-sm'>ADD</button>
                </div>
            </div>
        </>
    )
}

export default Product