import React from 'react'
import { Link } from 'react-router-dom'
import { CartWidget } from './CartWidget'

export const Footer = () => {
    return (
        <footer className="navbar navbar-expand-lg bg-dark border-bottom border-body d-flex flex-column mt-5" data-bs-theme="dark">
            <div className="container-fluid container">
                <Link to={'/'} className="navbar-brand">
                    <img src={'./assets/img/logoUrbana.png'} className='navbar-brand__logo' alt="" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to={'/'} className="nav-link" aria-current="page">Todos los Productos</Link>
                        </li>
                        <li className="nav-item dropup">
                            <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Categorías
                            </a>
                            <ul className="dropdown-menu">
                                <li><Link to={'category/remeras'} className="dropdown-item">Remeras</Link></li>
                                <li><Link to={'category/camperas'} className="dropdown-item">Camperas</Link></li>
                                <li><Link to={'category/buzos'} className="dropdown-item">Buzos</Link></li>
                            </ul>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <CartWidget />
                    </form>
                </div>
            </div>
            <hr className='mt-4'/>
            <p className=''>Powered by <i>Emmanuel Araujo</i> | Todos los derechos reservados</p>
        </footer>
    )
}
