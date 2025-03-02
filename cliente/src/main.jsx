import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Registrar from './pages/Registro'
import Alterar from './pages/Alterar'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
       <Routes>
       <Route path="/" element={<Registrar/>}/>
            <Route path="/Home" element={<Home/>}/>
            <Route path="/Alterar/:id" element={<Alterar/>}/>
       </Routes>
    </BrowserRouter>
  </StrictMode>
)
