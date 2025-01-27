import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Common from './components/Common.jsx';
import App from './App.jsx';
import Courses from './pages/Courses.jsx';
import IT from './pages/IT.jsx';
import Contacts from './pages/Contacts.jsx';
import About from './pages/About.jsx';
import PresentationsPage from './pages/presentations/PresentationsPage.jsx';
import VideosPage from './pages/videos/VideosPage.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Common />}>
          <Route index element={<App />} />
          <Route index element={<Courses />} />
          <Route path="courses" element={<Courses />} />
          <Route path="IT" element={<IT />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="about-us" element={<About />} />
          <Route path="courses/presentations/:classId" element={<PresentationsPage />} />
          <Route path="courses/videos/:classId" element={<VideosPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
