import React from 'react'

import '../../styles/About.scss'

function About() {

  return (
    <div className='section-container container about-section-container'>
      <div className='row align-items-center justify-content-center my-3 my-md-0'>
        <div className='col-12 col-md-6'>
          <p>Subte es una cooperativa de trabajo integrada por diseñadores, ilustradores y programadores con experiencia. Nos unimos para apoyarnos mutuamente y ampliar horizontes, generando un espacio de creación y reflexión colectiva.</p>
          <p>Ofrecemos servicios de diseño gráfico, programación, ilustración, marketing digital, producción audiovisual y formación.</p>
          <p>Nos proponemos trabajar para mejorar la comunicación de organizaciones y personas teniendo en cuenta la sustentabilidad económica, social y ambiental de nuestros proyectos.</p>
          <p>Trabajamos con la convicción de que la construcción de alternativas se produce en el plano económico, político y cultural, pero también en el simbólico y estético. Conformamos este espacio para poder trabajar y reflexionar integrando esas diferentes dimensiones de la vida social.</p>
        </div>
        <div className='col-10 col-md-6'>
          <div className='row justify-content-center'>
            <div className='col-md-10'>
              <p>Natalia Acosta</p>
              <p>Joaquín Cabrera</p>
              <p>Santiago Paradeda</p>
              <p>Mariana Escobar</p>
              <p>Francisco Cobas</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About