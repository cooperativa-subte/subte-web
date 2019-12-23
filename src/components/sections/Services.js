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
        <div className='col-11'>
          <div className='row align-items-center justify-content-around m-3'>
            <div className='col-12 text-center mb-3'>
              <h1>Estos son nuestros Servicios</h1>
            </div>

            <div className='col-12 col-md-4'>
              <img className='img-fluid' src={disenioImg} alt='Foto Diseño' />
            </div>
            <div className='col-12 col-md-4 text-center'>
              <h3>Diseño Gráfico</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tristique metus felis, et porta leo elementum eget. Nunc fermentum ligula ac vestibulum tempus. Nam ullamcorper, justo a sodales vehicula, metus justo blandit metus, et tincidunt felis dolor in magna. Nam eleifend orci a leo porta condimentum. In euismod ullamcorper nunc.</p>
            </div>

            <div className='w-100'></div>

            <div className='col-12 col-md-4 order-md-3'>
              <img className='img-fluid' src={merketingImg} alt='Foto Diseño' />
            </div>
            <div className='col-12 col-md-4 text-center order-md-2'>
              <h3>Marketing Digital</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tristique metus felis, et porta leo elementum eget. Nunc fermentum ligula ac vestibulum tempus. Nam ullamcorper, justo a sodales vehicula, metus justo blandit metus, et tincidunt felis dolor in magna. Nam eleifend orci a leo porta condimentum. In euismod ullamcorper nunc.</p>
            </div>

            <div className='w-100 order-md-4'></div>

            <div className='col-12 col-md-4 order-md-5'>
              <img className='img-fluid' src={illustrationImg} alt='Foto Ilustracion' />
            </div>
            <div className='col-12 col-md-4 text-center order-md-6'>
              <h3>Ilustración</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tristique metus felis, et porta leo elementum eget. Nunc fermentum ligula ac vestibulum tempus. Nam ullamcorper, justo a sodales vehicula, metus justo blandit metus, et tincidunt felis dolor in magna. Nam eleifend orci a leo porta condimentum. In euismod ullamcorper nunc.</p>
            </div>

            <div className='w-100 order-md-7'></div>

            <div className='col-12 col-md-4 order-md-8'>
              <img className='img-fluid' src={programmingImg} alt='Foto Programacion' />
            </div>
            <div className='col-12 col-md-4 text-center order-md-7'>
              <h3>Programación de Páginas y Aplicaciones Web</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tristique metus felis, et porta leo elementum eget. Nunc fermentum ligula ac vestibulum tempus. Nam ullamcorper, justo a sodales vehicula, metus justo blandit metus, et tincidunt felis dolor in magna. Nam eleifend orci a leo porta condimentum. In euismod ullamcorper nunc.</p>
            </div>

            <div className='w-100 order-md-8'></div>

            <div className='col-12 col-md-4 order-md-9'>
              <img className='img-fluid' src={formacionImg} alt='Foto Programacion' />
            </div>
            <div className='col-12 col-md-4 text-center order-md-10'>
              <h3>Formación y Talleres</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tristique metus felis, et porta leo elementum eget. Nunc fermentum ligula ac vestibulum tempus. Nam ullamcorper, justo a sodales vehicula, metus justo blandit metus, et tincidunt felis dolor in magna. Nam eleifend orci a leo porta condimentum. In euismod ullamcorper nunc.</p>
            </div>

            <div className='w-100'></div>

            <div className='col-12 col-md-8 text-center mt-5 order-md-11'>
              <p>Cualquier consulta no duden en enviarnos una consulta a través del <NavLink exact to='/contact'>formulario de contacto</NavLink>.</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}