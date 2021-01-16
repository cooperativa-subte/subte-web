import React from 'react';
import { NavLink } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import { isMobile } from 'react-device-detect';

import shuffleArray from '../utils/utilities';
import '../../styles/Home.scss';

const proyectos = [
  {
    url: '/proyectos/meeh',
    mobileUrl:
      'https://res.cloudinary.com/subteuy/image/upload/v1610826812/subte.uy/Home/PortadaDesktop_MEEH_am2n12.jpg',
    desktopUrl:
      'https://res.cloudinary.com/subteuy/image/upload/v1610826812/subte.uy/Home/PortadaDesktop_MEEH_am2n12.jpg',
    alt: 'MEEH Portada',
  },
  {
    url: '/proyectos/web-colectivo-catalejo',
    mobileUrl:
      'https://res.cloudinary.com/subteuy/image/upload/v1610826812/subte.uy/Home/PortadaMobile_Catalejo_t54wpz.jpg',
    desktopUrl:
      'https://res.cloudinary.com/subteuy/image/upload/v1610826813/subte.uy/Home/PortadaDesktop_Catalejo_tbwsfq.jpg',
    alt: 'Colectivo Catalejo Portada',
  },
  {
    url: '/proyectos/cone-vecino-ese-momento',
    mobileUrl:
      'https://res.cloudinary.com/subteuy/image/upload/v1610826812/subte.uy/Home/PortadaMobile_Cone_w1etmx.jpg',
    desktopUrl:
      'https://res.cloudinary.com/subteuy/image/upload/v1610826813/subte.uy/Home/PortadaDesktop_Cone_o7avij.jpg',
    alt: 'Coné Vecino, Ese momento Portada',
  },
  {
    url: '/proyectos/aicoo-signo',
    mobileUrl:
      'https://res.cloudinary.com/subteuy/image/upload/v1580479097/subte.uy/Home/11_00_home_mobile_hfvbbh.jpg',
    desktopUrl:
      'https://res.cloudinary.com/subteuy/image/upload/v1580139473/subte.uy/Home/11_00_apu2vx.jpg',
    alt: 'Aicoo Portada'
  },
  {
    url: '/proyectos/zur-1968',
    mobileUrl:
      'https://res.cloudinary.com/subteuy/image/upload/v1580479258/subte.uy/Home/07_00_home_mobile_mjo8sf.jpg',
    desktopUrl:
      'https://res.cloudinary.com/subteuy/image/upload/v1580137261/subte.uy/Home/07_00_xuhm5j.jpg',
    alt: 'Zur 1968'
  },
];

export default function Home() {
  return (
    <div className="section-container container-fluid home-container">
      <div className="row align-items-center justify-content-center">
        <div className="col-12 px-0">
          <Carousel indicators={false} interval={2500} pauseOnHover={false}>
            {
              shuffleArray(proyectos.map((proyecto) => (
                <Carousel.Item key={proyecto.url}>
                  <NavLink exact to={proyecto.url}>
                    {isMobile ? (
                      <img
                        className="d-block w-100"
                        src={proyecto.mobileUrl}
                        alt={proyecto.alt}
                      />
                    ) : (
                      <img
                        className="d-block w-100"
                        src={proyecto.desktopUrl}
                        alt={proyecto.alt}
                      />
                    )}
                  </NavLink>
                </Carousel.Item>
              )))
            }
          </Carousel>
        </div>
      </div>
    </div>
  );
}
