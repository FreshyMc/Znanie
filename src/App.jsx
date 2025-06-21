// Импортиране на необходимите зависимости и ресурси
import { useEffect, useId, useRef, useState } from 'react'
import Logo from './assets/logo.png';
import { Link } from 'react-router-dom';

import MainCarousel from './components/carousel/Carousel';

// Импортиране на изображения за слайдове и аватари
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

// Данни за доволни потребители
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
    comment: 'Като учител по ИТ, често търся интерактивни ресурси за часовете си. "Знание" ми помага да ангажирам учениците си и да обясня сложните концепции по достъпен начин.'
  }
];

// Данни за основния карусел в хедъра
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
        {/* Хедър с карусел */}
        <header className='row main-header'>
          <div className='col-12 p-0'>
            <Carousel slides={headerSlides} isHeader />
          </div>
        </header>

        {/* Основен раздел с избор на категория */}
        <section className='row main-section'>
          <div className="col-12 px-4 py-4">
            <div className="container-fluid m-0 py-4">
              <div className="row my-4 g-0">
                
                {/* Кутия за История */}
                <div className="col-lg m-lg-0">
                  <div className="coolbox-wrapper">
                    <div className='coolbox'>
                      <div className="front bg-2 d-flex justify-content-center align-items-center">
                        <i className="fa-solid fa-landmark fs-2"/>
                        <p className='m-0 py-2 text-center'>История</p>
                      </div>
                      <div className="back bg-2 d-flex flex-column">
                        <p className='m-0 text-center'>Материали по</p>
                        <div className='container flex-grow-1 d-flex align-items-center justify-content-center'>
                          {/* Добавен бутон с икона за История */}
                          <Link to="/courses" className="category-btn">
                            <i className="fa-solid fa-book-open"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Кутия за Информационни технологии */}
                <div className="col-lg m-lg-0">
                  <div className="coolbox-wrapper">
                    <div className='coolbox'>
                      <div className="front bg-3 d-flex justify-content-center align-items-center">
                        <i className="fa-solid fa-desktop fs-2"/>
                        <p className='m-0 py-2 text-center'>Информационни технологии</p>
                      </div>
                      <div className="back bg-3 d-flex flex-column">
                        <p className='m-0 text-center'>Материали по</p>
                        <div className='container flex-grow-1 d-flex align-items-center justify-content-center'>
                          {/* Добавен бутон с икона за ИТ */}
                          <Link to="/it" className="category-btn">
                            <i className="fa-solid fa-laptop-code"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Секция със доволни потребители */}
        <section className='row testimonials-section'>
          <div className='col-12 p-0 d-flex flex-column'>
            <h1 className='text-center py-1 m-0 mt-4 section-title'>Доволни потребители</h1>
            <Carousel slides={slides}/>
          </div>
        </section>
      </>
  )
}

// Компонент за карусел
function Carousel({slides, isHeader = false}) {
  const id = useId();

  return (
      <div id={id} className="carousel slide h-100" data-bs-ride="carousel">
        <div className="carousel-indicators mb-1 mb-lg-3">
          {
            // Създаване на индикатори за слайдовете
            slides.map((slide, i) => <button type="button" data-bs-target={`#${id}`} data-bs-slide-to={i}
                                             className={`${i === 0 ? 'active' : ''}`} aria-current={`${i === 0}`}
                                             aria-label={`Slide ${i}`}></button>)
          }
        </div>
        <div className="carousel-inner h-100">
          {
            // Рендиране на слайдовете според вида на карусела
            slides.map((slide, i) => (isHeader) ? <HeaderSlide {...slide} active={i === 0}/> :
                <CarouselSlide {...slide} active={i === 0}/>)
          }
        </div>
        {
          // Навигационни бутони, ако каруселът е в хедъра
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

// Слайд за хедър карусела
function HeaderSlide({ header = 'Znanie', text, active, image }) {
  return (
      <div className={`carousel-item h-100 ${active ? 'active' : ''}`}>
        <div
            className="slide"
            style={{
              position: 'relative',
              height: '60vh', // Височина на контейнера
            }}
        >
          <img src={image} alt='Slide Content' style={{position: 'absolute', left: 0, top: 0, width: '100%', height: '100%', backgroundPosition: 'center', objectFit: 'cover'}} />
          <div className="slide-content">
            <p className="text-center">{text}</p>
          </div>
        </div>
      </div>
  );
}

// Слайд за секция с коментари от доволни потребители
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

export default App;
