import React from 'react'
import { Helmet } from 'react-helmet-async';
import "./Playlist.css"

const Playlist = () => {
  return (
    <div>
      <Helmet>
        <title>Playlist</title>
        <meta name='description' content='Search your favorite playlist ' />
        <link rel='canonical' href='/playlist' />
      </Helmet>
      <div>

        <section className='majeed'>
          <div className='playlist-container'>
            <div className='playlist-1'>
              <i class="fa fa-music" />
            </div>

            <h1>Tay Iwar mix</h1>
          </div>
        </section>

        <section className='ladipoe'>
          <div className='playlist-container'>

            <i class="fa fa-music" />
            <h1>Gospel mix</h1>
          </div>
        </section>

        <section className='ogranya'>
          <div className='playlist-container'>
            <i class="fa fa-music" />
            <h1>Bathroom mix</h1>
          </div>
        </section>

        <section className='mavins'>
          <div className='playlist-container'>
            <i class="fa fa-music" />
            <h1>In my feelings mix</h1>
          </div>
        </section>


      </div>
    </div>
  )
}

export default Playlist
