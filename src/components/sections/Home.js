import React from 'react';
import { NavLink } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import { isMobile } from 'react-device-detect';

import '../../styles/Home.scss';

export default function Home() {
  return (
    <div className="section-container container-fluid home-container">
      <div className="row align-items-center justify-content-center">
        <div className="col-12 px-0">
          <Carousel indicators={false} interval={2500} pauseOnHover={false}>
            <Carousel.Item>
              <NavLink exact to="/proyectos/acrin-signo">
                {isMobile ? (
                  <img
                    className="d-block w-100"
                    src="https://res.cloudinary.com/subteuy/image/upload/v1580479150/subte.uy/Imagenes%20de%20Proyectos/6%20-%20Acrin/06_00_home_mobile_j9oxvs.jpg"
                    alt="Acrin Portada"
                  />
                ) : (
                  <img
                    className="d-block w-100"
                    src="https://res.cloudinary.com/subteuy/image/upload/v1579906162/subte.uy/Imagenes%20de%20Proyectos/6%20-%20Acrin/06_00_qbizee.jpg"
                    alt="Acrin Portada"
                  />
                )}
              </NavLink>
            </Carousel.Item>
            <Carousel.Item>
              <NavLink exact to="/proyectos/sintep-inaguracion">
                {isMobile ? (
                  <img
                    className="d-block w-100"
                    src="https://res.cloudinary.com/subteuy/image/upload/v1580479048/subte.uy/Imagenes%20de%20Proyectos/9_Sintep_Inaguracion/09_00_home_mobile_k1yexr.jpg"
                    alt="Sintep Portada"
                  />
                ) : (
                  <img
                    className="d-block w-100"
                    src="https://res.cloudinary.com/subteuy/image/upload/v1580251481/subte.uy/Imagenes%20de%20Proyectos/9_Sintep_Inaguracion/09_00_lbbrdj.jpg"
                    alt="Sintep Portada"
                  />
                )}
              </NavLink>
            </Carousel.Item>
            <Carousel.Item>
              <NavLink exact to="/proyectos/aicoo-signo">
                {isMobile ? (
                  <img
                    className="d-block w-100"
                    src="https://res.cloudinary.com/subteuy/image/upload/v1580479097/subte.uy/Imagenes%20de%20Proyectos/11_Aicoo/11_00_home_mobile_hfvbbh.jpg"
                    alt="Aicoo Portada"
                  />
                ) : (
                  <img
                    className="d-block w-100"
                    src="https://res.cloudinary.com/subteuy/image/upload/v1580139473/subte.uy/Imagenes%20de%20Proyectos/11_Aicoo/11_00_apu2vx.jpg"
                    alt="Aicoo Portada"
                  />
                )}
              </NavLink>
            </Carousel.Item>
            <Carousel.Item>
              <NavLink exact to="/proyectos/zur-1968">
                {isMobile ? (
                  <img
                    className="d-block w-100"
                    src="https://res.cloudinary.com/subteuy/image/upload/v1580479258/subte.uy/Imagenes%20de%20Proyectos/7_Zur_1968/07_00_home_mobile_mjo8sf.jpg"
                    alt="1968 Zur Portada"
                  />
                ) : (
                  <img
                    className="d-block w-100"
                    src="https://res.cloudinary.com/subteuy/image/upload/v1580137261/subte.uy/Imagenes%20de%20Proyectos/7_Zur_1968/07_00_xuhm5j.jpg"
                    alt="1968 Zur Portada"
                  />
                )}
              </NavLink>
            </Carousel.Item>
            <Carousel.Item>
              <NavLink exact to="/proyectos/librillos-comuna">
                {isMobile ? (
                  <img
                    className="d-block w-100"
                    src="https://res.cloudinary.com/subteuy/image/upload/v1580479336/subte.uy/Imagenes%20de%20Proyectos/5_Comuna_Librillos/05_00_home_mobile_ou1msk.jpg"
                    alt="Librillos Comuna Portada"
                  />
                ) : (
                  <img
                    className="d-block w-100"
                    src="https://res.cloudinary.com/subteuy/image/upload/v1580136275/subte.uy/Imagenes%20de%20Proyectos/5_Comuna_Librillos/05_00_00_ibavlk.jpg"
                    alt="Librillos Comuna Portada"
                  />
                )}
              </NavLink>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
}
