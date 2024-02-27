import { Link } from "react-router-dom";
import "./landingpage.css";

function LandingPage() {
  return (
    <div className="LandingPage">
      <div className="fondo">
        <Link to="/">
          <img src="./fondo0.png" alt="Inicio" />
        </Link>
        <Link to="/services">
          <img src="./fondo1.png" alt="servicios" />
        </Link>
        <Link to="/client_work">
          <img src="./fondo2.png" alt="client work" />
        </Link>
        <img src="./logosclientes.png" alt="clients logos" />
      </div>
    </div>

  );
}

export default LandingPage;
