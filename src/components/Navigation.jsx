import { Link, useLocation } from 'react-router-dom';

import Logo from '../assets/logo.png';
import { useEffect, useRef } from 'react';

export default function Navigation() {
    const mobileMenuRef = useRef();
    const menuBtnRef = useRef();
    const location = useLocation();

    useEffect(() => {
        const menuShown = mobileMenuRef.current.className.includes('show');

        if (menuShown) {
            menuBtnRef.current.click();
        }
    }, [location]);

    return (
        <nav className='row py-2 position-fixed w-100'>
            <div className='col-6 col-lg-1'>
                <Link to='/'>
                    <img src={Logo} alt='Logo' height='100' />
                </Link>
            </div>
            <div className='col-6 col-lg-11 p-0'>
                <ul className='d-none d-lg-flex p-0 px-4 m-0 w-100 h-100 align-items-stretch nav-links'>
                    <li>
                        <Link to='/' className='bg-1'>
                            <span>Начало</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='/courses' className='bg-2'>
                            <span>История</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='/courses' className='bg-3'>
                            <span>Информационни технологии</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='#' className='bg-4'>
                            <span>За Нас</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='#' className='bg-5'>
                            <span>Контакти</span>
                        </Link>
                    </li>
                </ul>
                <button className="d-flex ms-auto d-lg-none btn toggle-btn align-items-center justify-content-center" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                    <i className="fa-solid fa-bars fs-2" />
                </button>
                <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel" ref={mobileMenuRef}>
                    <div className="offcanvas-header">
                        <h1 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Znanie</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" ref={menuBtnRef}></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className='d-flex align-content-stretch flex-wrap p-4 m-0 w-100 h-100 nav-links'>
                            <li>
                                <Link to='/' className='bg-1'>
                                    <span>Начало</span>
                                </Link>
                            </li>
                            <li>
                                <Link to='/courses' className='bg-2'>
                                    <span>История</span>
                                </Link>
                            </li>
                            <li>
                                <Link to='/courses' className='bg-3'>
                                    <span>Информационни технологии</span>
                                </Link>
                            </li>
                            <li>
                                <Link to='#' className='bg-4'>
                                    <span>За Нас</span>
                                </Link>
                            </li>
                            <li>
                                <Link to='#' className='bg-5'>
                                    <span>Контакти</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}