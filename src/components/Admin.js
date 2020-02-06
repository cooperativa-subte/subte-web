import React, { useContext } from 'react'
import { Auth0Context } from './contexts/auth0-context'

import '../styles/Admin.scss'

export default function Admin() {
  const auth0 = useContext(Auth0Context)
  return (
    <div className='admin-container container'>
      <div className='row justify-content-center'>
        <div className='col-11 text-center'>
          <button onClick={auth0.loginWithRedirect}>Login</button>
        </div>
      </div>
    </div>
  )
}