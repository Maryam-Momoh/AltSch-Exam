import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { Helmet } from 'react-helmet-async';
import "./Music.css"

const Music = () => {
  return (
    <body >
      <Helmet>
        <title>Music</title>
        <meta name='description' content='Stream your favorite songs ' />
        <link rel='canonical' href='/music' />
      </Helmet>
      <nav className='nav'>
        <ul className='navbar'>
          <li className='nav-items'>
            <Link to='/' className='nav-links'>Home</Link>
          </li>

          <li className='nav-items'>
            <Link to='playlist' className='nav-links'>Playlist</Link>
          </li>

          <li className='nav-items'>
            <Link to='album' className='nav-links'>Album</Link>
          </li>
        </ul>
      </nav>
      <Outlet />

    </body>
  )
}

export default Music
