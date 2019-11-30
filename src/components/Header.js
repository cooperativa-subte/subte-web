import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

import logoSrc from '../images/LogoSUBTE_horizontal.svg'

import '../styles/Header.scss'

export default function Header({shadow}) {

  let [headerClasses, setHeaderClasses] = useState('container-fluid')

  useEffect(() => {
    shadow ? setHeaderClasses('container-fluid box-shadow') : setHeaderClasses('container-fluid')
  }, [shadow])

  return (
    <header className={headerClasses}>
      <nav className='row justify-content-center'>
        <div className='col-xl-11'>
          <div className='row justify-content-between align-items-center'>
            <div className='col-3'>
              <NavLink exact to='/' className='d-block link-img mr-5 pr-3'>
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