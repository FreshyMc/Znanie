import { useParams, Link } from "react-router-dom";
import presentations from "../data/presentations/";
import "../../styles/courses.css"; // Импортиране на стилизиращия файл

function PresentationsPage() {
  const { classId } = useParams();
  const classPresentations = presentations[classId] || [];

  return (
    <div className="presentations-page">
      <h1 className="presentations-header">Презентации за {classId.replace("-", " ").replace("class", "").trim()} клас</h1>
      <div className="presentations-container">
        {classPresentations.length > 0 ? (
          <ul className="presentations-list">
            {classPresentations.map((item) => (
              <li key={item.id} className="presentation-item">
                <div>{item?.presentation}</div>
                <p className="presentation-link">
                  {item.title}
                </p>
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
