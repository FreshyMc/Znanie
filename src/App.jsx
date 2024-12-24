import { useId, useState } from 'react'
import { Link } from 'react-router-dom';

import Slide1 from './assets/kids_1.jpg';
import Slide2 from './assets/kids_2.jpg';
import Slide3 from './assets/kids_3.jpg';
import Slide4 from './assets/kids_4.jpg';
import Slide5 from './assets/kids_5.jpg';
import Slide6 from './assets/kids_6.jpg';
import Slide7 from './assets/kids_7.jpg';

import Avatar1 from './assets/avatar_1.jfif';
import Avatar2 from './assets/avatar_2.jfif';
import Avatar3 from './assets/avatar_3.jfif';
import Avatar4 from './assets/avatar_4.jfif';

const slides = [
  {
    name: 'Borko',
    image: Avatar1,
    grade: 1,
    comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt et quibusdam deleniti repudiandae dignissimos dolor deserunt vitae placeat! Vitae, doloribus.'
  },
  {
    name: 'Niki',
    image: Avatar2,
    grade: 6,
    comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt et quibusdam deleniti repudiandae dignissimos dolor deserunt vitae placeat! Vitae, doloribus.'
  },
  {
    name: 'Alex',
    image: Avatar3,
    grade: 10,
    comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt et quibusdam deleniti repudiandae dignissimos dolor deserunt vitae placeat! Vitae, doloribus.'
  },
  {
    name: 'Diana',
    image: Avatar4,
    grade: 11,
    comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt et quibusdam deleniti repudiandae dignissimos dolor deserunt vitae placeat! Vitae, doloribus.'
  }
];

const headerSlides = [
  {
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem cumque, labore fugit corrupti vitae earum dolor repudiandae quidem, laborum alias est. Rem soluta quaerat sint accusantium molestias cum, earum officiis.',
    image: Slide1
  },
  {
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem cumque, labore fugit corrupti vitae earum dolor repudiandae quidem, laborum alias est. Rem soluta quaerat sint accusantium molestias cum, earum officiis.',
    image: Slide2
  },
  {
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem cumque, labore fugit corrupti vitae earum dolor repudiandae quidem, laborum alias est. Rem soluta quaerat sint accusantium molestias cum, earum officiis.',
    image: Slide3
  },
  {
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem cumque, labore fugit corrupti vitae earum dolor repudiandae quidem, laborum alias est. Rem soluta quaerat sint accusantium molestias cum, earum officiis.',
    image: Slide4
  },
  {
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem cumque, labore fugit corrupti vitae earum dolor repudiandae quidem, laborum alias est. Rem soluta quaerat sint accusantium molestias cum, earum officiis.',
    image: Slide5
  },
  {
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem cumque, labore fugit corrupti vitae earum dolor repudiandae quidem, laborum alias est. Rem soluta quaerat sint accusantium molestias cum, earum officiis.',
    image: Slide6
  },
  {
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem cumque, labore fugit corrupti vitae earum dolor repudiandae quidem, laborum alias est. Rem soluta quaerat sint accusantium molestias cum, earum officiis.',
    image: Slide7
  },
];

function App() {

  return (
    <>
      <header className='row main-header'>
        <div className='col-12 p-0'>
          <Carousel slides={headerSlides} isHeader={true} />
        </div>
      </header>
      <section className='row main-section'>
        <div className="col-12 px-4 py-4">
          <div className="container-fluid m-0 py-4">
            <div className="row my-4 g-4">
              <div className="col-lg m-lg-0">
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
                            <Link to='#history'>8. клас</Link>
                          </div>
                          <div className="col d-flex flex-column justify-content-center text-center">
                            <Link to='#history'>9. клас</Link>
                            <Link to='#history'>10. клас</Link>
                            <Link to='#history'>11. клас</Link>
                            <Link to='#history'>12. клас</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg m-lg-0">
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
                            <Link to='#history'>8. клас</Link>
                          </div>
                          <div className="col d-flex flex-column justify-content-center text-center">
                            <Link to='#history'>9. клас</Link>
                            <Link to='#history'>10. клас</Link>
                            <Link to='#history'>11. клас</Link>
                            <Link to='#history'>12. клас</Link>
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
          <h1 className='text-center py-1 m-0 mt-4 section-title'>Доволни потребители</h1>
          <Carousel slides={slides} />
        </div>
      </section>
    </>
  )
}

function Carousel({ slides, isHeader = false }) {
  const id = useId();

  return (
    <div id={id} className="carousel slide h-100" data-bs-ride="carousel">
      <div className="carousel-indicators mb-1 mb-lg-3">
        {
          slides.map((slide, i) => <button type="button" data-bs-target={`#${id}`} data-bs-slide-to={i} className={`${i === 0 ? 'active' : ''}`} aria-current={`${i === 0}`} aria-label={`Slide ${i}`}></button>)
        }
      </div>
      <div className="carousel-inner h-100">
        {
          slides.map((slide, i) => (isHeader) ? <HeaderSlide {...slide} active={i === 0} /> : <CarouselSlide {...slide} active={i === 0} />)
        }
      </div>
      {
        isHeader && (
          <>
            <button className="carousel-control-prev" type="button" data-bs-target={`#${id}`} data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target={`#${id}`} data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </>
        )
      }
    </div>
  );
}

function HeaderSlide({ header = 'Znanie', text, active, image }) {
  return (
    <div className={`carousel-item h-100 ${active ? 'active' : ''}`} data-bs-interval="5000">
      <div className='w-100 h-100 d-flex align-items-center justify-content-center slide' style={{ backgroundImage: `url(${image})` }}>
        <div className='col-6 slide-content p-4'>
          <h1 className='text-center'>{header}</h1>
          <p className='text-center'>
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}

function CarouselSlide({ image, name, comment, grade, active }) {
  return (
    <div className={`carousel-item h-100 ${active ? 'active' : ''}`} data-bs-interval="5000">
      <div className='w-100 h-100 d-flex align-items-center justify-content-center'>
        <div className='testimonial col-9 col-lg-6'>
          <div className='d-flex flex-column align-items-center testimonial-top'>
            <img src={image} />
            <p className='d-flex flex-column align-items-center fs-3 m-0'>
              <span>
                {name}
              </span>
              <span className='fs-5'>
                {grade}. клас
              </span>
            </p>
          </div>
          <p className='testimonial-content text-center fs-4'>"{comment}"</p>
        </div>
      </div>
    </div>
  );
}

export default App
