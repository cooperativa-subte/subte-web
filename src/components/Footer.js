import React from 'react'

import logoSubte from '../images/PerfilSubte.jpg'

import '../styles/Footer.scss'

function Footer() {
  return (
    <footer className='container-fluid'>
      <div className='row justify-content-center'>
        <div className='col-6 text-center'>
          <div className='row justify-content-center'>
            <div className='col-2 align-self-center'>
              <img className='img-fluid' src={logoSubte} alt='Foto perfil de subte' />
            </div>
          </div>
        </div>
        <div className='contacto-container col-6 align-self-center'>
          <p>San Salvador 1510 (Radiopedal)</p>
          <p>+598 99 589 734 (Francisco)</p>
          <p><a href='mailto:hola@subte.uy' target='_blank' rel='noopener noreferrer'>hola@subte.uy</a></p>
        </div>
      </div>
    </footer>
  )
}

export default Footer