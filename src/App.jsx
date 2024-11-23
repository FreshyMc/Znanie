import { useState } from 'react'
import Logo from './assets/logo.png';
import { Link } from 'react-router-dom';

const slides = [
  {
    name: 'Borko',
    grade: 1,
    comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt et quibusdam deleniti repudiandae dignissimos dolor deserunt vitae placeat! Vitae, doloribus.'
  },
  {
    name: 'Niki',
    grade: 6,
    comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt et quibusdam deleniti repudiandae dignissimos dolor deserunt vitae placeat! Vitae, doloribus.'
  },
  {
    name: 'Alex',
    grade: 10,
    comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt et quibusdam deleniti repudiandae dignissimos dolor deserunt vitae placeat! Vitae, doloribus.'
  }
];

function App() {

  return (
    <>
      <nav className='row py-2 position-fixed w-100'>
        <div className='col-1'>
          <img src={Logo} alt='Logo' height='100' />
        </div>
        <div className='col-11 p-0'>
          <ul className='d-flex p-0 px-4 m-0 w-100 h-100 align-items-stretch nav-links'>
            <li>
              <Link to='#' className='bg-1'>
                <span>Начало</span>
              </Link>
            </li>
            <li>
              <Link to='#' className='bg-2'>
                <span>История</span>
              </Link>
            </li>
            <li>
              <Link to='#' className='bg-3'>
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
      </nav>
      <header className='row main-header'>
        <div className='col-12'>
          <div className='header-content'>
            <h1 className='pt-4 mt-4'>Znanie</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus mollitia, impedit corrupti perferendis officiis iusto voluptas! Quia, at cumque et voluptatum accusantium provident obcaecati maiores. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta, at?
            </p>
          </div>
        </div>
      </header>
      <section className='row main-section'>
        <div className="col-12 px-4 py-4">
          <div className="container-fluid m-0 py-4">
            <div className="row my-4 g-4">
              <div className="col-lg m-0">
                <div className="coolbox-wrapper">
                  <div className='coolbox'>
                    <div className="front bg-2 d-flex justify-content-center align-items-center">
                      <i className="fa-solid fa-landmark fs-2" />
                      <p className='m-0 py-2 text-center'>История</p>
                    </div>
                    <div className="back bg-2 d-flex flex-column">
                      <p className='m-0 text-center'>
                        Материали за
                      </p>
                      <div className='container flex-grow-1 m-0 p-0'>
                        <div className="row h-100 m-0 p-0">
                          <div className="col d-flex flex-column justify-content-center text-center">
                            <Link to='#history'>5. клас</Link>
                            <Link to='#history'>6. клас</Link>
                            <Link to='#history'>7. клас</Link>
                          </div>
                          <div className="col d-flex flex-column justify-content-center text-center">
                            <Link to='#history'>9. клас</Link>
                            <Link to='#history'>10. клас</Link>
                            <Link to='#history'>11. клас</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg m-0">
                <div className="coolbox-wrapper">
                  <div className='coolbox'>
                    <div className="front bg-3 d-flex justify-content-center align-items-center">
                      <i className="fa-solid fa-desktop fs-2" />
                      <p className='m-0 py-2 text-center'>Информационни технологии</p>
                    </div>
                    <div className="back bg-3 d-flex flex-column">
                      <p className='m-0 text-center'>
                        Материали за
                      </p>
                      <div className='container flex-grow-1 m-0 p-0'>
                        <div className="row h-100 m-0 p-0">
                          <div className="col d-flex flex-column justify-content-center text-center">
                            <Link to='#history'>5. клас</Link>
                            <Link to='#history'>6. клас</Link>
                            <Link to='#history'>7. клас</Link>
                          </div>
                          <div className="col d-flex flex-column justify-content-center text-center">
                            <Link to='#history'>9. клас</Link>
                            <Link to='#history'>10. клас</Link>
                            <Link to='#history'>11. клас</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='row testimonials-section'>
        <div className='col-12 p-0 d-flex flex-column'>
          <h1 className='text-center py-3 m-0 mt-4 section-title'>Доволни потребители</h1>
          <Carousel slides={slides} />
        </div>
      </section>
      <footer className='row px-4 py-2'>
        <div className="col-lg-4 pt-4">
          <div className="d-flex align-items-center">
            <img src={Logo} width={150} className='rounded' />
            <h1 className='ps-3'>Znanie</h1>
          </div>
          <p className='pt-2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse alias error nostrum nihil eligendi sit.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi quo veritatis, omnis consectetur alias excepturi!
          </p>
        </div>
        <div className="col-lg-8 pt-4 d-flex align-items-start">
          <div>
            <p className='d-flex align-items-center fs-3'><i className="fa-solid fa-location-dot fs-3" /><span className='ps-2'>Нашият Адрес</span></p>
            <p>Address line 1</p>
            <p>Address line 2</p>
          </div>
          <div className='ps-4 ms-4'>
            <p className='d-flex align-items-center fs-3'><i className="fa-solid fa-phone fs-3" /><span className='ps-2'>Контакти</span></p>
            <p>+359 123 4567</p>
            <p>+359 234 5678</p>
          </div>
        </div>
        <div className="col-12">
          <hr />
          <p className='m-0 py-2 text-center'>Znanie. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}

function Carousel({ slides }) {
  return (
    <div id="carouselExampleIndicators" className="carousel slide flex-grow-1" data-bs-ride="carousel">
      <div className="carousel-indicators mb-1 mb-lg-3">
        {
          slides.map((slide, i) => <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={i} className={`${i === 0 ? 'active' : ''}`} aria-current={`${i === 0}`} aria-label={`Slide ${i}`}></button>)
        }
      </div>
      <div className="carousel-inner h-100">
        {
          slides.map((slide, i) => <CarouselSlide {...slide} active={i === 0} />)
        }
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

function CarouselSlide({ name, comment, grade, active }) {
  return (
    <div className={`carousel-item h-100 ${active ? 'active' : ''}`} data-bs-interval="5000">
      <div className='w-100 h-100 d-flex align-items-center justify-content-center'>
        <div className='testimonial col-9 col-lg-6'>
          <div className='d-flex align-items-center testimonial-top'>
            <img src={Logo} />
            <p className='ps-4 fs-3 m-0'>
              <span>
                {name}
              </span>
              <span className='fs-5'>
                {grade}. клас
              </span>
            </p>
          </div>
          <p className='testimonial-content fs-4'>"{comment}"</p>
        </div>
      </div>
    </div>
  );
}

export default App
