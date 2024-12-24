export default function Footer() {
    return (
        <footer className='row p-4 mt-4'>
            <div className="col px-2">
                <div className="d-flex align-items-center">
                    <h1>Znanie</h1>
                </div>
                <p className='pt-2'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse alias error nostrum nihil eligendi sit.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi quo veritatis, omnis consectetur alias excepturi!
                </p>
            </div>
            <div className="col-lg px-2">
                <div className='footer-content'>
                    <p className='d-flex align-items-center justify-content-center fs-3 py-2 m-0 footer-box'><i className="fa-solid fa-location-dot fs-3" /><span className='ps-2'>Нашият Адрес</span></p>
                    <p className='px-2 pt-2'>Address line 1</p>
                    <p className='px-2 pb-2'>Address line 2</p>
                </div>
            </div>
            <div className="col-lg px-2">
                <div className='footer-content'>
                    <p className='d-flex align-items-center justify-content-center fs-3 py-2 m-0 footer-box'><i className="fa-solid fa-phone fs-3" /><span className='ps-2'>Контакти</span></p>
                    <p className='px-2 pt-2'>+359 123 4567</p>
                    <p className='px-2 pb-2'>+359 234 5678</p>
                </div>
            </div>
            <div className="col-12">
                <hr />
                <p className='m-0 py-2 text-center'>Znanie. All rights reserved.</p>
            </div>
        </footer>
    );
}