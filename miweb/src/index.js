import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';

import LandingPage from './pages/LandingPage';
import Servicios from './pages/Servicios';
import ClientWork from './pages/ClientWork';
import Contacto from './pages/Contacto';
import Opciones from './pages/Opciones';

import NavBar from './components/NavBar';
import Footer from './components/Footer';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/services" element={<Servicios />} />
        <Route path="/client_work" element={<ClientWork />} />
        <Route path="/contact" element={<Contacto />} />
        <Route path="/opciones" element={<Opciones />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
