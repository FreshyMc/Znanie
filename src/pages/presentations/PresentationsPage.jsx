import { useParams, Link } from "react-router-dom";
import presentations from "../data/presentations";
import "../../styles/courses.css"; // Импортиране на стилизиращия файл

function PresentationsPage() {
  const { classId } = useParams();
  const classPresentations = presentations[classId] || [];

  return (
    <div className="presentations-page">
      <h1 className="presentations-header">Презентации за {classId.replace("-", " ").replace("class", "").trim()}. клас</h1>
      <div className="videos-container">
        {classPresentations.length > 0 ? (
          <ul className="videos-list">
            {classPresentations.map((item) => (
              <li key={item.id} className="video-item">
                <h3 class="video-title">{item.title}</h3>
                <div style={{width: '100%', height: '350px'}} className="presentation">
                  { item?.element && (item.element)}
                </div>
                {/*
                  (item.external ?? false) ? (
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="presentation-link">
                      {item.title}
                    </a>
                  ) : (
                    <Link to={item.link} className="presentation-link">{item.title}</Link>
                  )
                  */
                }
              </li>
            ))}
          </ul>
        ) : (
          <p className="no-presentations">Няма налични презентации за този клас.</p>
        )}
        <Link to="/courses" className="back-button">
          Назад
        </Link>
      </div>
    </div>
  );
}

export default PresentationsPage;
