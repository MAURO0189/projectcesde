// eslint-disable-next-line no-unused-vars
import React from "react";
import Logosura from "../../public/logosura.png";
import { Link } from "react-router-dom";
import Carrusel2 from "./Carrusel2";
import Footer from "./Footer";
import "../assets/style/styles.css";
import FormularioMovilidad from "./FormularioMovilidad";

function Movilidad() {
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
      <Carrusel2 />
      <section className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-8">
            <h3 className="titulo mt-3 my-2">Formulario de servicios</h3>
            <FormularioMovilidad />
          </div>
          <div className="col-3">
            <h3 className="titulo mt-3 my-2">Flujo de servicio</h3>
            <p>
              Se agrega un formulario para simplificar la toma de datos de cada
              uno de nuestros clientes, lo que también nos va permite
              automatizar el proceso de atención de siniestros y/o choques
              simples.
            </p>
            <p>
              La generación de un reporte de accidentes mas simple, permite
              agilizar la atención a todos nuestros clientes para mejorar su
              experiencia y mejorar los niveles de servicio.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Movilidad;
