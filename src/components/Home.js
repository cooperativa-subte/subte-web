import React from 'react'

import '../styles/Home.scss'

import subteGif from '../images/subte_gif_bn_color.gif'

export default function Home() {
  return (
    <div className='section-container container-fluid home-container'>
      <div className='row align-items-center justify-content-center'>
        <div className='col-11 col-xl-4'>
          <img className='img-fluid' src={subteGif} alt='Subte Gif presentación' />
        </div>
      </div>
    </div>
  )
}