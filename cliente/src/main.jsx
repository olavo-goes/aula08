import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Registrar from './pages/Registro'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
       <Routes>
            <Route path="/Home" element={<Home/>}/>
            <Route path="/Registrar" element={<Registrar/>}/>
       </Routes>
    </BrowserRouter>
  </StrictMode>,
)
