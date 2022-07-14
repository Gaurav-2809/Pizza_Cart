import React from 'react'
import { Link } from 'react-router-dom'
const Navigation = () => {

    const cartStyle ={
        background: '#F59E0D',
        display: 'flex',
        borderRadius: '50px',
        padding: '0.3rem 0.6rem'
    }
    return (
        <>
            <nav className='container  mx-auto flex items-center justify-between py-4'>
                <div className="logo">
                    <Link to='/'>
                        <img style={{ height: 45 }} src="/image/logo.png" alt="logo" />
                    </Link>
                </div>
                <ul className='flex items-center'>
                    <li className='px-2'><Link to='/'>Home</Link></li>
                    <li className='px-2'><Link to='/products'>Products</Link></li>
                    <li className='px-2'><Link to='/cart'>
                        <div className='cart' style={cartStyle}>
                            <span>10</span>
                            <img className='ml-3' src="/image/cart.png" alt="cart" />
                        </div>
                    </Link></li>
                </ul>
            </nav>
        </>
    )
}

export default Navigation
