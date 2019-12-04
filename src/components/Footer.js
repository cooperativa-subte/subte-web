import React from 'react'

import logoSubte from '../images/LogoSUBTE_compacto_blanco.png'

import '../styles/Footer.scss'

function Footer() {
  return (
    <footer className='container-fluid'>
      <div className='row justify-content-center'>

        <div className='col-xl-11'>

          <div className='row justify-content justify-content-between'>

            <div className='d-none d-md-block col-md-3 text-center'>
              <div className='row justify-content-left'>
                <div className='col-4 align-self-center'>
                  <img className='img-fluid' src={logoSubte} alt='Foto perfil de subte' />
                </div>
              </div>
            </div>

            <div className='contacto-container col-12 col-md-4 align-self-center text-center'>
              <p>San Salvador 1510 (Radiopedal)</p>
              <p>+598 99 589 734 (Francisco)</p>
              <p><a href='mailto:hola@subte.uy' target='_blank' rel='noopener noreferrer'>hola@subte.uy</a></p>
            </div>

            <div className='col-12 col-md-3 social-networks-container align-self-center my-2 my-md-0'>
              <a href='https://www.facebook.com/subteuy' target='_blank' rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
              <a href='https://twitter.com/subteuy' target='_blank' rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
              <a href='https://www.instagram.com/subteuy/' target='_blank' rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer