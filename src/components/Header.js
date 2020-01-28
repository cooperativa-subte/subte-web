import React, { useEffect, useState, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { BrowserView, MobileView, isMobile } from 'react-device-detect'
import { CSSTransition } from 'react-transition-group';

import logoSrc from '../images/LogoSUBTE_horizontal.svg'
import menuIcon from '../images/menu-icon.svg'

import '../styles/Header.scss'

export default function Header({ shadow }) {

  const [headerClasses, setHeaderClasses] = useState('container-fluid')
  const [showMenu, setShowMenu] = useState(false)
  const menuItemsEle = useRef(null)

  useEffect(() => {
    let classes = isMobile ? 'container' : 'container-fluid'
    classes += shadow ? ' box-shadow' : ' '
    setHeaderClasses(classes)
  }, [shadow])

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <header className={headerClasses}>
      <BrowserView>
        <nav className='row justify-content-center align-items-center'>
          <div className='col-xl-11'>
            <div className='row justify-content-between align-items-center menu-content'>
              <div className='col-3'>
                <NavLink exact to='/' className='d-block link-img mr-5 pr-3'>
                  <img className='img-fluid' src={logoSrc} alt='Logo Subte' />
                </NavLink>
              </div>
              <div className='col-7 text-right'>
                <NavLink exact to='/nosotres' className='' activeClassName='active'>Nosotres</NavLink>
                <NavLink exact to='/servicios' className='' activeClassName='active'>Servicios</NavLink>
                <NavLink exact to='/portfolio' className='' activeClassName='active'>Portfolio</NavLink>
                <NavLink exact to='/contacto' className='' activeClassName='active'>Contacto</NavLink>
              </div>
            </div>
          </div>
        </nav>
      </BrowserView>
      <MobileView>
        <nav>
          <div className='menu-bar row justify-content-between align-items-center'>
            <div className='col-5 ml-3'>
              <NavLink exact to='/' className='d-block link-img'>
                <img className='img-fluid' src={logoSrc} alt='Logo Subte' />
              </NavLink>
            </div>
            <div className='col-5 text-right mr-3'>
              <img className='menu-icon' src={menuIcon} alt='Menu Icon' onClick={() => { toggleMenu() }} />
            </div>
          </div>
          <CSSTransition in={showMenu} timeout={675} classNames='menu-items'>
            <div className='row menu-items box-shadow' ref={menuItemsEle}>
              <div className='col-12 text-right'>
                <NavLink exact to='/' className='mr-3' activeClassName='active' onClick={() => { toggleMenu() }}>Inicio</NavLink>
              </div>
              <div className='col-12 text-right mt-2'>
                <NavLink exact to='/nosotres' className='mr-3' activeClassName='active' onClick={() => { toggleMenu() }}>Quiénes somos</NavLink>
              </div>
              <div className='col-12 text-right mt-2'>
                <NavLink exact to='/servicios' className='mr-3' activeClassName='active' onClick={() => { toggleMenu() }}>Servicios</NavLink>
              </div>
              <div className='col-12 text-right mt-2'>
                <NavLink exact to='/portfolio' className='mr-3' activeClassName='active' onClick={() => { toggleMenu() }}>Portfolio</NavLink>
              </div>
              <div className='col-12 text-right my-2 pb-2'>
                <NavLink exact to='/contacto' className='mr-3' activeClassName='active' onClick={() => { toggleMenu() }}>Contacto</NavLink>
              </div>
            </div>
          </CSSTransition>
        </nav>
      </MobileView>
    </header >
  )
}