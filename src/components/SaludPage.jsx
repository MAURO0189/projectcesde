// eslint-disable-next-line no-unused-vars
import React from "react";
import Logosura from "../../public/logosura.png";
import { Link } from "react-router-dom";
import Carrusel from "./Carrusel";
import Footer from "./Footer";
import "../assets/style/styles.css";
import FormularioSalud from "./FormularioSalud";

function SaludPage() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-white mt-3 my-2">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <img
                  className="mx-3"
                  src={Logosura}
                  alt="Este es el logo"
                  style={{ maxWidth: "150px", maxHeight: "60px" }}
                />
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Carrusel />
      <section className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-8">
            <h3 className="titulo mt-3 my-2">Formulario de servicios</h3>
            <FormularioSalud />
          </div>
          <div className="col-3">
            <h3 className="titulo mt-3 my-2">Flujo de servicio</h3>
            <p>
              Este flujo es para poder automatizar el proceso de lo servicios de
              salud en casa.
            </p>
            <p>
              La prioridad de este proceso es condensar la información a través
              de la inclusión de un formulario, donde se van a incluir los datos
              requeridos para la mejor prestación del servicio.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default SaludPage;
