import React from 'react'
import { NavLink } from 'react-router-dom'

import { Carousel } from 'react-bootstrap'

import '../styles/Home.scss'


export default function Home() {
  return (
    <div className='section-container container-fluid home-container'>
      <div className='row align-items-center justify-content-center'>
        <div className='col-12 px-0'>
          <Carousel indicators={false} interval={2500} pauseOnHover={false}>
            <Carousel.Item>
              <NavLink exact to='/portfolio/acrin-signo' className=''>
                <img
                  className="d-block w-100"
                  src="https://res.cloudinary.com/subteuy/image/upload/v1579906162/subte.uy/Imagenes%20de%20Proyectos/6%20-%20Acrin/06_00_qbizee.jpg"
                  alt="First slide"
                />
              </NavLink>
            </Carousel.Item>
            <Carousel.Item>
              <NavLink exact to='/portfolio/sintep-inaguracion' className=''>
                <img
                  className="d-block w-100"
                  src="https://res.cloudinary.com/subteuy/image/upload/v1580251481/subte.uy/Imagenes%20de%20Proyectos/9_Sintep_Inaguracion/09_00_lbbrdj.jpg"
                  alt="Third slide"
                />
              </NavLink>
            </Carousel.Item>
            <Carousel.Item>
              <NavLink exact to='/portfolio/aicoo-signo' className=''>
                <img
                  className="d-block w-100"
                  src="https://res.cloudinary.com/subteuy/image/upload/v1580139473/subte.uy/Imagenes%20de%20Proyectos/11_Aicoo/11_00_apu2vx.jpg"
                  alt="Third slide"
                />
              </NavLink>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  )
}