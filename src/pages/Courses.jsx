import { Link } from 'react-router-dom';

function Courses() {
  return (
    <div className="courses-page py-5">
      <h1 className="text-center pb-4">Учебни ресурси по история</h1>

      <div className="container">
        <div className="row g-4 justify-content-center">
          {/* Презентации */}
          <div className="col-md-5">
            <div className="resource-box three-d-box bg-2">
              <h2 className="text-center py-3">Презентации</h2>
              <div className="categories d-flex justify-content-between px-4">
                <div>
                  <Link to="/courses/presentations/5-class">5. клас</Link>
                  <Link to="/courses/presentations/6-class">6. клас</Link>
                  <Link to="/courses/presentations/7-class">7. клас</Link>
                  <Link to="/courses/presentations/8-class">8. клас</Link>
                </div>
                <div>
                  <Link to="/courses/presentations/9-class">9. клас</Link>
                  <Link to="/courses/presentations/10-class">10. клас</Link>
                  <Link to="/courses/presentations/11-class">11. клас</Link>
                  <Link to="/courses/presentations/12-class">12. клас</Link>
                </div>
              </div>
            </div>
          </div>

          {/* Видеоматериали */}
          <div className="col-md-5">
            <div className="resource-box three-d-box bg-3">
              <h2 className="text-center py-3">Видеоматериали</h2>
              <div className="categories d-flex justify-content-between px-4">
                <div>
                  <Link to="/courses/videos/5-class">5. клас</Link>
                  <Link to="/courses/videos/6-class">6. клас</Link>
                  <Link to="/courses/videos/7-class">7. клас</Link>
                  <Link to="/courses/videos/8-class">8. клас</Link>
                </div>
                <div>
                  <Link to="/courses/videos/9-class">9. клас</Link>
                  <Link to="/courses/videos/10-class">10. клас</Link>
                  <Link to="/courses/videos/11-class">11. клас</Link>
                  <Link to="/courses/videos/12-class">12. клас</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courses;
