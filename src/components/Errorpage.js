import React from 'react'
import './Errorpage.css'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async';

const Errorpage = () => {
  return (
    <div className='container'>
      <Helmet>
                <title>Page not found</title>
                <meta name='description' content='page not found '/>
                <link rel='canonical' href='/errorpage' />
            </Helmet>
       <nav className='nav'>
        <ul className='navbar'>
          <li className='nav-items'>
            <Link to='/' className='nav-links'>Home</Link>
          </li>

        </ul>
      </nav>
      <p>404
       <br /> Opps Page 
       <br /> not found
       </p>

       
    </div>
  )
}

export default Errorpage
