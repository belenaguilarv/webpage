// NavBar.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";

const NavBar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src="/thelogo.png" alt="Logo" />
        </Link>
      </div>
      <div className="options">
        {location.pathname === "/opciones" ? (
          <Link to="/#">
            <img src="/opcionesOut.png" alt="OpcionesOut" id="opcionesOut"/>
          </Link>
        ) : (
          <Link to="/opciones">
            <img src="/opciones.png" alt="Opciones" />
          </Link>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
