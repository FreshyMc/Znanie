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
import PresentationsPageIT from './pages/presentations/PresentationsPageIT.jsx';
import VideosPageIT from './pages/videos/VideosPageIT.jsx';
import Test from './pages/Test.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Common />}>
          <Route index element={<App />} />
          <Route path="courses" element={<Courses />} />
          <Route path="IT" element={<IT />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="about-us" element={<About />} />
          <Route path="courses/presentations/:classId" element={<PresentationsPage />} />
          <Route path="courses/videos/:classId" element={<VideosPage />} />
          {/* Нови маршрути за IT */}
          <Route path='test' element={<Test />} />
          <Route path="it/presentations/:classId" element={<PresentationsPageIT />} />
          <Route path="it/videos/:classId" element={<VideosPageIT />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
