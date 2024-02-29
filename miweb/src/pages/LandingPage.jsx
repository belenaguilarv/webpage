import { Link } from "react-router-dom";
import "./landingpage.css";
import Team from "../components/team";

function LandingPage() {
  return (
    <div className="LandingPage">
      <div className="fondoLanding">
          <img src="./fondo0.png" alt="Inicio" />
      </div>
      <div className="fondo">
        <Link to="/services">
          <img src="./fondo1.png" alt="servicios" />
        </Link>
        <Link to="/client_work">
          <img src="./fondo2.png" alt="client work" />
        </Link>
      </div>
      <div className="fondoLanding">
      <img src="./logosclientes.png" alt="clients logos" />
      </div>
      <div className="quienesSomos">
        <h2>QUIENES SOMOS</h2>
        <div className="equipo" style={{ display: "flex" }}>
          <Team
            name="Pedro Pedrazas"
            description="CEO"
            imageUrl="./persona1.png"
          />
          <Team
            name="Martina Martinez"
            description="Directora de Diseño"
            imageUrl="./persona2.png"
          />
          <Team
            name="Fernanda Fernandez"
            description="Ejecutiva de Cuentas"
            imageUrl="./persona3.png"
          />
          <Team
            name="Juan Juanes"
            description="Community Manager"
            imageUrl="./persona4.png"
          />
        </div>
      </div>
      <div className="fondo">
        <Link to="/contact">
          <img src="./fondocontacto.png" alt="contacto" />
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
