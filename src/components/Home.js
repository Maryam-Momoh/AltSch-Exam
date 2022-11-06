import React from 'react'
import { Helmet } from 'react-helmet-async';
import { Link, Outlet } from 'react-router-dom'
import './Home.css';

const Home = () => {
    return (
        <div className='body'>
            <Helmet>
                <title>Home</title>
                <meta name='description' content='Welcome '/>
                <link rel='canonical' href='/' />
            </Helmet>
            <nav >
                <ul className=' navbar'>
                    <li className='nav-items'>
                        <Link to='/' className='nav-links'>Home</Link>
                    </li>

                    <li className='nav-items'>
                        <Link to='/music' className='nav-links'>Music</Link>
                    </li>

                    <li className='nav-items'>
                        <Link to='/premium' className='nav-links'>Premium</Link>
                    </li>
                    
                </ul>
            </nav>
            
            <Outlet />
            <p>WELCOME <br/> MUSIC LOVER</p>
        </div>
    )
}

export default Home
