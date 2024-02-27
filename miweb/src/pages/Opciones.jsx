import { Link } from "react-router-dom";
import "./opciones.css"

function Opciones() {
  return (
    <div className="opciones">
      <ul className="nav-links">
        <li>
          <Link to="/">INICIO</Link>
        </li>
        <li>
          <Link to="/services">SERVICIOS</Link>
        </li>
        <li>
          <Link to="/client_work">CLIENT WORK</Link>
        </li>
        <li>
          <Link to="/contact">CONTACTO</Link>
        </li>
      </ul>
    </div>
  );
}

export default Opciones;
