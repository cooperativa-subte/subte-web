import React from 'react'

import { NavLink } from 'react-router-dom'

import '../../styles/Services.scss'
import merketingImg from '../../images/servicios_marketing.png'
import disenioImg from '../../images/servicios_disenio.png'
import illustrationImg from '../../images/servicios_illustration.png'
import programmingImg from '../../images/servicios_programacion.png'
import formacionImg from '../../images/servicios_formacion.png'

export default function Services() {
  return (
    <div className='section-container container-fluid services-container'>
      <div className='row justify-content-center'>
        <div className='col-11 text-left'>
          <div className='row'>
            <div className='col-6'>
              <h3 className='position-sticky negrita'>Conocé nuestros servicios</h3>
            </div>
            <div className='col-6 text-container'>
              <div>
                <h5 className='negrita'>Diseño gráfico</h5>
                <p>Diseño Editorial</p>
                <p>Diseño de identidad visual</p>
                <p>Diseño de folletería</p>
              </div>
              <div>
                <h5>Programación</h5>
                <p>Diseño web</p>
                <p>Desarrollo de aplicaciones</p>
                <p>Posicionamiento SEO</p>
                <p>Analítica</p>
              </div>
              <div>
                <h5>Producción Audiovisual</h5>
              </div>
              <div>
                <h5>Marketing Audiovisual</h5>
                <p>Gestión de Redes Sociales</p>
                <p>Desarrollo de Contenido</p>
                <p>Campañas publicitarias</p>
              </div>
              <div>
                <h5>Ilustración</h5>
              </div>
              <div>
                <h5>Formación</h5>
                <p>Talleres</p>
                <p>Consultoría y capacitación</p>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-12 hola'>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}