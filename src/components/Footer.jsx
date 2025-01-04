export default function Footer() {
    return (
        <footer className='row p-4' >
            {/* Секция за основна информация */}
            < div className="col px-2" >
                <div className='footer-content'>
                    <p className='d-flex align-items-center justify-content-center fs-3 py-2 m-0 footer-box'>
                        <h1 className="fs-3">Znanie</h1>
                    </p>
                    <p className='px-2 pt-2 znanie-style'>
                        Добре дошли в сайта на „Знание“ – платформата, създадена с мисията да вдъхновява ученици и учители!
                    </p>
                </div>
            </div >

            {/* Секция за адрес */}
            < div className="col px-2" >
                <div className='footer-content'>
                    <p className='d-flex align-items-center justify-content-center fs-3 py-2 m-0 footer-box'>
                        <i className="fa-solid fa-location-dot fs-3" />
                        <span className='ps-2'>Нашият Адрес</span>
                    </p>
                    <div className="d-flex flex-column align-items-center">
                        <p><span>🏙️</span><span>Адрес: град Враца</span></p>
                        <p><span>🏠</span><span>Бул. 2 Юни № 19</span></p>
                    </div>
                </div>
            </div>

            {/* Секция за контакти */}
            < div className="col px-2" >
                <div className='footer-content'>
                    <p className='d-flex align-items-center justify-content-center fs-3 py-2 m-0 footer-box'><i
                        className="fa-solid fa-phone fs-3" /><span className='ps-2'>Контакти</span></p>
                    <p className='px-2 pt-2 adres-style'>📞 Телефон: +359 898 38 35 34</p>
                    <p className='px-2 pb-2 adres-style'>✉️ Имейл: znanie@gmail.com</p>
                </div>
            </div >

            {/* Финален ред */}
            < div className="col-12" >
                <hr />
                <p className='m-0 py-2 text-center'>Znanie. All rights reserved.</p>
            </div>
        </footer >
    );
}