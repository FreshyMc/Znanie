import { useParams, Link } from 'react-router-dom'; 
import videos from '../data/videos_IT';
import '../../styles/it.css'; 

function VideosPageIT() {
  const { classId } = useParams();  // Вземаме параметъра classId от URL
  const classVideos = videos[classId] || [];  // Вземаме видеата за съответния клас или празен масив, ако няма видеа

  console.log("classId:", classId);  // Проверка на classId

  return (
    <div className="videos-page py-5">
      <h1 className="presentations-header">
        Видеоматериали за {classId.replace("-", " ").replace("class", "").trim()} клас
      </h1>
      <div className="videos-container">
        {classVideos.length > 0 ? (
          <ul className="videos-list">
            {classVideos.map((item) => (
              <li key={item.id} className="video-item">
                <h3 className="video-title">{item.title}</h3>
                <div className="video-embed">
                  <video width="100%" controls>
                    <source src={item.link} type="video/mp4" />
                    Вашият браузър не поддържа видео елемент.
                  </video>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="no-videos">Няма налични видеоматериали за този клас.</p>
        )}

        <Link to="/IT" className="back-button">
          Назад
        </Link>
      </div>
    </div>
  );
}

export default VideosPageIT;
