import React, { useEffect, useState, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { BrowserView, MobileView, isMobile } from 'react-device-detect'
import { CSSTransition } from 'react-transition-group';

import logoSrc from '../images/LogoSUBTE_horizontal.svg'
import logoCompactoSrc from '../images/PerfilSubte.jpg'

import '../styles/Header.scss'

export default function Header({ shadow }) {

  const [headerClasses, setHeaderClasses] = useState('container-fluid')
  const [showMenu, setShowMenu] = useState(false)
  const menuItemsEle = useRef(null)

  useEffect(() => {
    console.log(isMobile)
    let classes = isMobile ? ' container ' : 'container-fluid'
    classes += shadow ? ' box-shadow ' : ' '
    setHeaderClasses(classes)
  }, [shadow])

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <header className={headerClasses}>
      <BrowserView>
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
      </BrowserView>
      <MobileView>
        <nav>
          <div className='menu-bar row justify-content-between align-items-center'>
            <div className='col-2 ml-3'>
              <NavLink exact to='/' className='d-block link-img'>
                <img className='img-fluid' src={logoCompactoSrc} alt='Logo Subte' />
              </NavLink>
            </div>
            <div className='col-8 text-right mr-3'>
              <i className="menu-icon fas fa-bars" onClick={() => { toggleMenu() }}></i>
            </div>
          </div>
          <CSSTransition in={showMenu} timeout={1000} classNames='menu-items'>
            <div className='row menu-items' ref={menuItemsEle}>
              <div className='col-12 text-right'>
                <NavLink exact to='/' className='mr-3' activeClassName='active' onClick={() => { toggleMenu() }}>Inicio</NavLink>
              </div>
              <div className='col-12 text-right mt-2'>
                <NavLink exact to='/about' className='mr-3' activeClassName='active' onClick={() => { toggleMenu() }}>Quiénes Somos</NavLink>
              </div>
              <div className='col-12 text-right mt-2'>
                <NavLink exact to='/services' className='mr-3' activeClassName='active' onClick={() => { toggleMenu() }}>Servicios</NavLink>
              </div>
              <div className='col-12 text-right mt-2'>
                <NavLink exact to='/projects' className='mr-3' activeClassName='active' onClick={() => { toggleMenu() }}>Portfolio</NavLink>
              </div>
              <div className='col-12 text-right my-2 pb-2'>
                <NavLink exact to='/contact' className='mr-3' activeClassName='active' onClick={() => { toggleMenu() }}>Contacto</NavLink>
              </div>
            </div>
          </CSSTransition>
        </nav>
      </MobileView>
    </header >
  )
}