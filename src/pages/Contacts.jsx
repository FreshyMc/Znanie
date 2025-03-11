import { useState } from "react";
import { db, collection, addDoc } from "../config/firebase";

export default function Contacts() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Изпращане на данни:", formData); // ✅ Виждаме какво се изпраща

        try {
            await addDoc(collection(db, "contacts"), formData);
            alert("✅ Съобщението е изпратено успешно!");
            setFormData({ name: "", email: "", message: "" });
        } catch (error) {
            console.error("❌ Грешка при изпращане:", error);
            alert("⚠️ Възникна грешка при изпращането. Виж конзолата за подробности.");
        }
    };

    return (
        <main id="contacts-page" className="container py-5">
            <h2 className="text-center mb-4">Свържете се с нас</h2>
            <p className="text-center text-muted mb-5">
                Свържете се с нас за въпроси, предложения или допълнителна информация.
            </p>

            <div className="row">
                <div className="col-lg-6 mb-4">
                    <div className="form-wrapper rounded shadow p-4">
                        <h4 className="mb-3">Изпратете съобщение</h4>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Име</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Имейл</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="message" className="form-label">Съобщение</label>
                                <textarea
                                    className="form-control"
                                    id="message"
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary w-100">
                                Изпрати
                            </button>
                        </form>
                    </div>
                </div>

                <div className="col-lg-6">
                    <h4 className="mb-3">Нашият адрес</h4>
                    <p className="text-muted mb-3">
                        Намерете ни на адреса по-долу или използвайте картата, за да планирате вашето посещение.
                    </p>
                    <address className="text-muted mb-4">
                        <strong>Град Враца, България</strong>
                        <br />
                        бул. 2 Юни № 19
                        <br />
                        Телефон: +359 898 38 35 34
                        <br />
                        Имейл: <a href="mailto:znanie@gmail.com">znanie@gmail.com</a>
                    </address>
                    <div className="map-container rounded shadow-lg">
                        <iframe
                            className="map-frame"
                            width="100%"
                            height="400"
                            frameBorder="0"
                            scrolling="no"
                            marginHeight="0"
                            marginWidth="0"
                            src="https://www.openstreetmap.org/export/embed.html?bbox=23.5512%2C43.2000%2C23.5522%2C43.2006&layer=mapnik&marker=43.2003%2C23.5517"
                        ></iframe>
                    </div>
                </div>
            </div>
        </main>
    );
}
