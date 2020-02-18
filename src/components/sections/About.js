import React from 'react'

import '../../styles/About.scss'
import gifNosotres from '../../images/GifWebSubte.gif'

function About() {

  return (
    <div className='section-container container about-section-container'>
      <div className='row align-items-center justify-content-center my-5'>
        <div className='col-10 col-md-6 px-0'>
          <p>SUBTE es una cooperativa de trabajo integrada por diseñadores, ilustradores y programadores. Nos unimos para apoyarnos mutuamente y ampliar horizontes, generando un espacio de creación y reflexión colectiva, así como también contribuir al crecimiento de quienes trabajan con nosotros mediante el diseño y la comunicación visual.</p>
          <p>Ofrecemos servicios de diseño gráfico, programación, ilustración, marketing digital, producción audiovisual y formación.</p>
          <p>Nos proponemos trabajar para mejorar la comunicación de organizaciones y personas teniendo en cuenta la sustentabilidad económica, social y ambiental de nuestros proyectos.</p>
          <p>Trabajamos con la convicción de que la construcción de alternativas se produce en el plano económico, político y cultural, pero también en el simbólico y estético. Conformamos este espacio para poder trabajar y reflexionar integrando esas diferentes dimensiones de la vida social.</p>
        </div>
        <div className='col-10 col-md-6'>
          <div className='row justify-content-center'>
            <div className='col-md-10'>
              <img src={gifNosotres} className='img-fluid' alt='Gif de SUBTE' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About