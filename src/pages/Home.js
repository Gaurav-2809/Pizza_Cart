import React from 'react'
import Products from '../components/Products'

const Home = () => {
  return (
    <>
        <div className="hero py-20">
            <div className='container mx-auto flex items-center justify-between'>
                <div className='w-1/2'>
                    <h6 className='text-lg'><em>Are you Hungry?</em></h6>
                    <h1 className='font-bold text-3xl md:text-6xl'>Don't wait now!</h1>
                    <button className='px-4 py-2 font-bold rounded-full text-white bg-yellow-500 mt-4 hover:bg-yellow-600'>Order Now</button>
                </div>
                <div className='w-1/2'>
                    <img className='w-3/5' src="/image/pizza.png" alt="pizza" />
                </div>
            </div>
        </div>
        <div>
            <Products/>
        </div>
    </>
  )
}

export default Home