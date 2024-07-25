import React from "react";
import Carrusel2 from "./Carrusel2";
import Footer from "./Footer";
import "../assets/style/styles.css";
import FormularioMovilidad from "./FormularioMovilidad";
import ChatBot from "./ChatBot";
import News2 from "./News2";
import Nav from "./Nav";

function Movilidad() {
  return (
    <>
      <Nav />
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
          <h1 className="titulo mt-3 my-2">Noticias</h1>
          <p>
            Infórmate sobre los temas más nuevos en siniestros y la ley de
            choques simples.
          </p>
          <News2 />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Movilidad;
