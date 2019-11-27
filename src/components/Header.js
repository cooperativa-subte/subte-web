import React from 'react'
import { NavLink } from 'react-router-dom'

import logoSrc from '../images/LogoSUBTE_horizontal.svg'

import '../styles/Header.scss'

export default function Header() {

  return (
    <header className='container-fluid'>
      <nav className='row justify-content-center'>
        <div className='col-xl-11'>
          <div className='row justify-content-between align-items-center'>
            <div className='col-3'>
              <NavLink exact to='/' className='ml-5 d-block link-img'>
                <img className='img-fluid' src={logoSrc} alt='Logo Subte' />
              </NavLink>
            </div>
            <div className='col-7 text-right'>
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