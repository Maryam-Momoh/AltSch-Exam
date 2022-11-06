import React from 'react'
import { Helmet } from 'react-helmet-async';

const Album = () => {
  return (
    <div>
      <Helmet>
                <title>Albums</title>
                <meta name='description' content='Stream latest albums'/>
                <link rel='canonical' href='/album' />
            </Helmet>
      <div>

        <section className='majeed'>
          <div className='playlist-container'>
            <div className='playlist-1'>
              <i class="fa fa-music" />
            </div>

            <h1>Majeed-Bitter sweet</h1>
          </div>
        </section>

        <section className='ladipoe'>
          <div className='playlist-container'>

            <i class="fa fa-music" />
            <h1>Tribl Nights-Anthologies</h1>
          </div>
        </section>

        <section className='ogranya'>
          <div className='playlist-container'>
            <i class="fa fa-music" />
            <h1>Ogranya-Festival of the Sun</h1>
          </div>
        </section>

        <section className='mavins'>
          <div className='playlist-container'>
            <i class="fa fa-music" />
            <h1>Show Dem Camp-The Palmwine Express</h1>
          </div>
        </section>


      </div>
    </div>
  )
}

export default Album
