// eslint-disable-next-line no-unused-vars
import React from "react";
import Logosura from "../../public/logosura.png";
import { Link } from "react-router-dom";
import Carrusel2 from "./Carrusel2";
import Footer from "./Footer";
import "../assets/style/styles.css";
import FormularioMovilidad from "./FormularioMovilidad";
import ChatBot from "./ChatBot";

function Movilidad() {
  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top nav1 my-2">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img
              src={Logosura}
              alt="Este es el logo"
              style={{ maxWidth: "150px", maxHeight: "60px" }}
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link text-white" to="/">
                  Home
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <main style={{ marginTop: "70px" }}>
        <Carrusel2 />
      </main>
      <ChatBot />
      <section className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-8">
            <h3 className="titulo mt-3 my-2">
              Formulario de registro usuarios Markbot
            </h3>
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
