import React from 'react'
import { NavLink } from 'react-router-dom'

import logoSrc from '../images/LogoSUBTE_horizontal.svg'

import '../styles/Header.scss'

function Header() {
  return (
    <header className='container-fluid'>
      <nav className='row align-items-center'>
        <div className='col-3'>
          <div className='row '>
            <div className='col-11'>
              <NavLink exact to='/' className='ml-5 d-block link-img'>
                <img className='img-fluid' src={logoSrc} alt='Logo Subte' />
              </NavLink>
            </div>
          </div>
        </div>
        <div className='col-9'>
          <div className='row justify-content-end'>
            <div className='col-8 text-right mr-4'>
              <NavLink exact to='/about' className='' activeClassName='active'>Quiénes Somos</NavLink>
              <NavLink exact to='/services' className='' activeClassName='active'>Servicios</NavLink>
              <NavLink exact to='/projects' className='' activeClassName='active'>Portfolio</NavLink>
              <NavLink exact to='/contact' className='' activeClassName='active'>Contacto</NavLink>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header;