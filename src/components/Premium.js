import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async';
import './Premium.css';

const Login = () => {
  return (
    <div >
      <Helmet>
        <title>Premium</title>
        <meta name='description' content='Premium is coming soon ' />
        <link rel='canonical' href='/premium' />
      </Helmet>
      <nav className='nav'>
        <ul className='navbar'>
          <li className='nav-items'>
            <Link to='/' className='nav-links'>Home</Link>
          </li>

        </ul>
      </nav>
      <div className='body'>
        <div className="content">
          <button>COMING SOON...</button>
        </div>
      </div>
    </div>
  )
}

export default Login
