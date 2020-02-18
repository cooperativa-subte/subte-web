import React from 'react'
import '../styles/NotFound.scss'
import { ReactComponent as NotFoundImg } from '../images/Error404.svg'

import { NavLink } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className='not-found-container container-fluid'>
      <div className='row justify-content-center mt-5'>
        <div className='col-11 text-center'>
          <NotFoundImg className='not-found-img' />
          <h4 className='mt-5'>Ups, la página que estás buscando no existe. Verificá la URL o dirigite a la <NavLink exact to='/'>página principal</NavLink></h4>
        </div>
      </div>
    </div>
  )

}