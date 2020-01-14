import React from 'react'

import '../../styles/About.scss'

import subteGif from '../../images/subte_gif_color_color.gif'

function About() {

  return (
    <div className='section-container container'>
      <div className='row align-items-center justify-content-center my-3 my-md-0'>
        <div className='col-12 col-md-6 text-center'>
          <h3>SUBTE es mucho más que una cooperativa</h3>
          <p>Somos un colectivo, un grupo de amigas y amigos, una cooperativa de trabajo en formación, un espacio donde nos juntamos a hacer lo que más nos gusta, diseñar, programar, ilustrar, enseñar, crear, pensar y muchas cosas más.</p>
        </div>
        <div className='col-md-1'></div>
        <div className='col-10 col-md-4'>
          <img className='img-fluid' src={subteGif} alt='Subte Gif presentación' />
        </div>
      </div>
    </div>
  )
}

export default About