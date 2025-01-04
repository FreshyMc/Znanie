import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Common from './components/Common.jsx'
import Courses from './pages/Courses.jsx'
import Contacts from './pages/Contacts.jsx'
import About from './pages/About.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Common />}>
          <Route index element={<App />} />
          <Route path='courses' element={<Courses />} />
          <Route path='contacts' element={<Contacts />} />
          <Route path='about-us' element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
