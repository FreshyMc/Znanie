import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Common from './components/Common.jsx'
import Courses from './pages/Courses.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Common />}>
          <Route index element={<App />} />
          <Route path='courses' element={<Courses />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
