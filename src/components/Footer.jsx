export default function Footer() {
    return (
        <footer className="footer-container">
            {/* Секция за основна информация */}
            <div className="footer-section">
                <h1 className="footer-logo">Znanie</h1>
                <p className="footer-description">
                    Добре дошли в сайта на „Знание“ – платформата, създадена с мисията да вдъхновява ученици и учители!
                </p>
            </div>

            {/* Секция за адрес */}
            <div className="footer-section">
                <h3 className="footer-heading">
                    <i className="fa-solid fa-location-dot"></i> Нашият Адрес
                </h3>
                <p className="footer-text">🏙️ Адрес: град Враца</p>
                <p className="footer-text">🏠 Бул. 2 Юни № 19</p>
            </div>

            {/* Секция за контакти */}
            <div className="footer-section">
                <h3 className="footer-heading">
                    <i className="fa-solid fa-phone"></i> Контакти
                </h3>
                <p className="footer-text">📞 Телефон: +359 898 38 35 34</p>
                <p className="footer-text">✉️ Имейл: znanie@gmail.com</p>
            </div>

            {/* Финален ред */}
            <div className="footer-bottom">
                <hr className="footer-line" />
                <p>Znanie. All rights reserved &copy; 2025</p>
            </div>
        </footer>
    );
}
