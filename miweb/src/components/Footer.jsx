import React from 'react';
import './footer.css'
import { useLocation } from 'react-router-dom';


const Footer = () => {
  const location = useLocation();
  const isOpcionesPage = location.pathname === '/opciones';

  if (isOpcionesPage) {
    return null; // No se muestra el footer en la página de opciones
  }

  return (
    <footer className="footer">
      <div className="contact-info">
        <p>Mail: belenaguiilarv@gmail.com</p>
        <p>Celular: (+54) 9 351 375 0472</p>
      </div>
    </footer>
  );
}

export default Footer;
