import React from 'react'

import '../styles/Home.scss'

import subteGif from '../images/subte_gif_bn_color.gif'

export default function Home() {
  return (
    <div className='home-container container'>
      <div className='row align-items-center justify-content-center'>
        <div className='col-4'>
          <img className='img-fluid' src={subteGif} alt='Subte Gif presentación' />
        </div>
        <div className='col-6 text-center'>
          <h1>Cooperativa de trabajo</h1>
          <h1>SUBTE</h1>
        </div>
      </div>
    </div>
  )
}