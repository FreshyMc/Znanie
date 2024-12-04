import { useId, useState } from 'react'
import Logo from './assets/logo.png';
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
    name: 'Анелия Петрова, родител',
    image: Avatar1,
    comment: 'Сайтът е невероятен! Материалите са ясни и много добре организирани. Най-накрая мога да обясня историята на детето си, без да губя часове в търсене на информация.'
  },
  {
    name: 'Михаела Стоянова, родител',
    image: Avatar2,
    comment: 'Благодаря за труда и вдъхновението, вложени в тази платформа. Тук откривам всичко необходимо за подготовката на сина ми по ИТ и история.'
  },
  {
    name: 'Мария Колева, ученичка',
    image: Avatar3,
    comment: 'Това е най-доброто място за допълнителна подготовка. Презентациите и уроците са не само информативни, но и красиви!'
  },
  {
    name: 'Иван Георгиев, учител',
    image: Avatar4,
    comment: 'Като учител по ИТ, често търся интерактивни ресурси за часовете си. \'Знание\' ми помага да ангажирам учениците си и да обясня сложните концепции по достъпен начин.'
  }
];

const headerSlides = [
  {
    text: 'Открий вдъхновяващи видеоуроци по история за 5-12. клас! Всичко, от което се нуждаеш, на едно място.',
    image: Slide1
  },
  {
    text: 'Подготви се за успех с нашите интерактивни презентации по информационни технологии!',
    image: Slide2
  },
  {
    text: 'Знанието е сила! Разгледай новите учебни ресурси за 6. и 7. клас по история.',
    image: Slide3
  },
  {
    text: 'Готови за изпит? Виж най-новите ни видеоматериали по ИТ за 12. клас!',
    image: Slide4
  },
  {
    text: 'Новина: Добавени са материали за подготовка по история за 10. клас – провери още сега!',
    image: Slide5
  },
  {
    text: 'Видеоразходка из Средновековието – разгледай новите материали по история за 7. клас!',
    image: Slide6
  },
  {
    text: 'Следвай пътя към знанието с презентации и видеа, подготвени специално за теб!',
    image: Slide7
  },
];

function App() {

  return (
      <>
        <nav className='row py-2 position-fixed w-100'>
          <div className='col-6 col-lg-1'>
            <img src={Logo} alt='Logo' height='100'/>
          </div>
          <div className='col-6 col-lg-11 p-0'>
            <ul className='d-none d-lg-flex p-0 px-4 m-0 w-100 h-100 align-items-stretch nav-links'>
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
            <button className="d-flex ms-auto d-lg-none btn toggle-btn align-items-center justify-content-center"
                    type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar"
                    aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
              <i className="fa-solid fa-bars fs-2"/>
            </button>
            <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasDarkNavbar"
                 aria-labelledby="offcanvasDarkNavbarLabel">
              <div className="offcanvas-header">
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div className="offcanvas-body">
                <ul className='d-flex align-content-stretch flex-wrap p-4 m-0 w-100 h-100 nav-links'>
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
            </div>
          </div>
        </nav>
        <header className='row main-header'>
          <div className='col-12 p-0'>
            <Carousel slides={headerSlides} isHeader={true}/>
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
                        <i className="fa-solid fa-landmark fs-2"/>
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
                        <i className="fa-solid fa-desktop fs-2"/>
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
            <Carousel slides={slides}/>
          </div>
        </section>
        <footer className='row p-4'>
          <div className="col px-2">
            <div className='footer-content'>
              <p className='d-flex align-items-center justify-content-center fs-3 py-2 m-0 footer-box'>
                <h1 className="fs-3">Znanie</h1>
              </p>
              <p className='px-2 pt-2 znanie-style'>
                Добре дошли в сайта на „Знание“ – платформата, създадена с мисията да вдъхновява ученици и учители!
              </p>
            </div>
          </div>
          <div className="col px-2">
            <div className='footer-content'>
              <p className='d-flex align-items-center justify-content-center fs-3 py-2 m-0 footer-box'><i
                  className="fa-solid fa-location-dot fs-3"/><span className='ps-2'>Нашият Адрес</span></p>
              <p className='px-2 pt-2 adres-style'>🏙️ Адрес: град Враца</p>
              <p className='px-2 pb-2 adres-style'>🏠 Бул. 2 Юни № 19</p>
            </div>
          </div>
          <div className="col px-2">
            <div className='footer-content'>
              <p className='d-flex align-items-center justify-content-center fs-3 py-2 m-0 footer-box'><i
                  className="fa-solid fa-phone fs-3"/><span className='ps-2'>Контакти</span></p>
              <p className='px-2 pt-2 adres-style'>📞 Телефон: +359 898 38 35 34</p>
              <p className='px-2 pb-2 adres-style'>✉️ Имейл: znanie@gmail.com</p>
            </div>
          </div>
          <div className="col-12">
            <hr/>
            <p className='m-0 py-2 text-center'>Znanie. All rights reserved.</p>
          </div>
        </footer>
      </>
  )
}

function Carousel({slides, isHeader = false}) {
  const id = useId();

  return (
      <div id={id} className="carousel slide h-100" data-bs-ride="carousel">
        <div className="carousel-indicators mb-1 mb-lg-3">
          {
            slides.map((slide, i) => <button type="button" data-bs-target={`#${id}`} data-bs-slide-to={i}
                                             className={`${i === 0 ? 'active' : ''}`} aria-current={`${i === 0}`}
                                             aria-label={`Slide ${i}`}></button>)
          }
        </div>
        <div className="carousel-inner h-100">
          {
            slides.map((slide, i) => (isHeader) ? <HeaderSlide {...slide} active={i === 0}/> :
                <CarouselSlide {...slide} active={i === 0}/>)
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
        <div
            className="slide"
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '60vh', // Височина на контейнера
            }}
        >
          <div className="slide-content">
            <p className="text-center">{text}</p>
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
            <img src={image}/>

          </div>
          <p className='testimonial-content text-center fs-4'>"{comment}"</p>
          <p className='d-flex flex-column align-items-center fs-3 m-0'>
              <span className="name-style">
                {name}
              </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App
