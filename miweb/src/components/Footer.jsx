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
      <div className="contact-info1">
        <p className='title'>Contacto</p>
        <p>theagency@gmail.com</p>
        <p>(+54) 341 305 0492</p>
        <p>Calle Siempre Viva 742</p>
      </div>
      <div className='contact-info2'>
        {/*podrian ser links a redes sociales*/}
        <p className='title'>Nuestras Redes</p>
        <div className='redes'>
        <img src="/logoFb.png" alt="facebok" />
        <img src="/logoInstagram.png" alt="facebok" />
        <img src="/logoYoutube.png" alt="facebok" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
