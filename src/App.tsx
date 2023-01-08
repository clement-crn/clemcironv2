import React from 'react';
import Layout from './components/Layout/Layout';
import { Outlet } from 'react-router-dom';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NavbarHome from './components/navbar/NavbarHome';
import Contact from './pages/contact/About';
import Sitesweb from './pages/sitesweb/Sitesweb';
import Jeuxvideo from './pages/jeuxvideo/Jeuxvideo';
import Home from './pages/home/Home';
import Footbar from './components/footbar/Footbar';
function App() {
  return (
    <BrowserRouter>
    <NavbarHome/>
        <Routes>
            
                <Route path="/" element={<Home />} />
                <Route path="Sitesweb" element={<Sitesweb />} />
                <Route path="Jeuxvideo" element={<Jeuxvideo/>} />
                <Route path="Contact" element={<Contact />} />
           
        </Routes>
    
    </BrowserRouter>
  );
}

export default App;
