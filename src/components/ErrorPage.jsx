import React from 'react'
import { Link } from 'react-router-dom'

export const ErrorPage = () => {
  return (
    <div className='d-flex justify-content-center align-items-center flex-column w-100 bg-dark' style={{height: '100vh'}} id='errorPage'>
        <img src="/assets/img/logoUrbana.png" alt="" className='logoErrorPage'/>
        <h1 className='mt-3 text-light border p-3 rounded'>404:</h1>
        <h1 className='text-light mb-4'>Página no encontrada</h1>
        <Link to={'/'} className='btn btn-danger'>Volver</Link>
    </div>
  )
}
