export default function Contacts() {
    return (
        <main>
            <div class="container py-4">
                <div class="contact-form">
                    <h2 class="text-center">Свържете се с нас</h2>
                    <form>
                        <div class="mb-3">
                            <label for="name" class="form-label">Име</label>
                            <input type="text" class="form-control" id="name" placeholder="Въведете вашето име" required />
                        </div>
                        <div class="mb-3">
                            <label for="email" class="form-label">Имейл</label>
                            <input type="email" class="form-control" id="email" placeholder="Въведете вашия имейл" required />
                        </div>
                        <div class="mb-3">
                            <label for="message" class="form-label">Съобщение</label>
                            <textarea class="form-control" id="message" rows="4" placeholder="Въведете вашето съобщение" required></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary w-100">Изпрати</button>
                    </form>
                    <div class="mt-4">
                        <h5>Адрес:</h5>
                        <div style={{width: '100%', paddingTop: '25px', paddingBottom: '25px'}}>
                            <iframe class="rounded shadow" width="100%" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=23.540954589843754%2C43.20642705583016%2C23.544296622276306%2C43.207793613657735&amp;layer=mapnik&amp;marker=43.20035%2C23.55175"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}