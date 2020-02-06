import React from 'react'
import { useAuth0 } from './contexts/auth0-context'

import '../styles/Admin.scss'

export default function Admin() {
  const { isLoading, user, loginWithRedirect, logout } = useAuth0()
  return (
    <div className='admin-container container'>
      <div className='row justify-content-center my-5'>
        <div className='col-11 text-center'>
          {
            !isLoading && !user && (
              <>
                <button onClick={loginWithRedirect}>Login</button>
              </>
            )
          }
          {
            !isLoading && user && (
              <>
                <h1>Estas logueado en SUBTE</h1>
                <p>Hola {user.name}</p>
                {user.picture && <img src={user.picture} alt='Mi Avatar' />}
                <div className='my-4'>
                  <button onClick={() => logout({ returnTo: window.location.origin })} >Logout</button>
                </div>
              </>
            )
          }
        </div>
      </div>
    </div>
  )
}