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
        <div className='col-11 text-center'>
          <h1>Estos son nuestros Servicios</h1>

          <div className='row justify-content-around align-items-center mt-4'>
            <div className='col-8 col-md-6 col-xl-3'>
              <img className='img-fluid' src={disenioImg} alt='Foto Diseño' />
            </div>
            <div className='col-md-4 text-center'>
              <h3>Diseño Gráfico</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tristique metus felis, et porta leo elementum eget. Nunc fermentum ligula ac vestibulum tempus. Nam ullamcorper, justo a sodales vehicula, metus justo blandit metus, et tincidunt felis dolor in magna. Nam eleifend orci a leo porta condimentum. In euismod ullamcorper nunc.</p>
            </div>
          </div>

          <div className='row justify-content-around align-items-center mt-4'>
            <div className='col-8 col-md-6 col-xl-3 order-md-2'>
              <img className='img-fluid' src={merketingImg} alt='Foto Diseño' />
            </div>
            <div className='col-md-4 text-center order-md-1'>
              <h3>Marketing Digital</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tristique metus felis, et porta leo elementum eget. Nunc fermentum ligula ac vestibulum tempus. Nam ullamcorper, justo a sodales vehicula, metus justo blandit metus, et tincidunt felis dolor in magna. Nam eleifend orci a leo porta condimentum. In euismod ullamcorper nunc.</p>
            </div>
          </div>

          <div className='row justify-content-around align-items-center mt-4'>
            <div className='col-8 col-md-6 col-xl-3'>
              <img className='img-fluid' src={illustrationImg} alt='Foto Ilustracion' />
            </div>
            <div className='col-md-4 text-center'>
              <h3>Ilustración</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tristique metus felis, et porta leo elementum eget. Nunc fermentum ligula ac vestibulum tempus. Nam ullamcorper, justo a sodales vehicula, metus justo blandit metus, et tincidunt felis dolor in magna. Nam eleifend orci a leo porta condimentum. In euismod ullamcorper nunc.</p>
            </div>
          </div>

          <div className='row justify-content-around align-items-center mt-4'>
            <div className='col-8 col-md-6 col-xl-3 order-md-2'>
              <img className='img-fluid' src={programmingImg} alt='Foto Programacion' />
            </div>
            <div className='col-md-7 text-left order-md-1'>
              <h3>Programación de Páginas y Aplicaciones Web</h3>
              <p className='mb-0'>Otra área en la que queremos hacer foco y nos parece importante es la programación tanto de páginas como de aplicaciones web.</p>
              <p className='mb-0'>Las páginas web nos sirven como herramienta de comunicación de nuestros clientes, brindamos la posibilidad de tener un sitio web moderno y trabajar con el cliente para que se adecúe a sus necesidades. Para saber más de las páginas web puede mandarnos un mensaje en el siguiente <NavLink exact to='/contact?subject=Asunto: Páginas Web'>link</NavLink>.</p>
              <p>Las aplicaciones web ya son herramientas más poderosas que cumplen un rol de resolver un problema determinado. La web actualmente es algo que todas y todos lo utilizamos en el día a día y cumple un rol muy importante en nuestros trabajos, es por eso que en una organización es importante contar con herramientas que puedan facilitarnos el trabajo del día a día. Para saber más de aplicaciones web puede mandarnos un mensaje en el siguiente <NavLink exact to='/contact?subject=Asunto: Aplicaciones Web'>link</NavLink>.</p>
            </div>
          </div>

          <div className='row justify-content-around align-items-center mt-4'>
            <div className='col-8 col-md-6 col-xl-3'>
              <img className='img-fluid' src={formacionImg} alt='Foto Programacion' />
            </div>
            <div className='col-md-4 text-center'>
              <h3>Formación y Talleres</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tristique metus felis, et porta leo elementum eget. Nunc fermentum ligula ac vestibulum tempus. Nam ullamcorper, justo a sodales vehicula, metus justo blandit metus, et tincidunt felis dolor in magna. Nam eleifend orci a leo porta condimentum. In euismod ullamcorper nunc.</p>
            </div>
          </div>

          <div className='row justify-content-around align-items-center mt-4'>
            <div className='col-10 col-md-6 text-center'>
              <p>Cualquier consulta no duden en enviarnos un mensaje a través del <NavLink exact to='/contact'>formulario de contacto</NavLink>.</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}