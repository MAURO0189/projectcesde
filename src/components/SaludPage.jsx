import React from "react";
import Carrusel from "./Carrusel";
import Footer from "./Footer";
import "../assets/style/styles.css";
import FormularioSalud from "./FormularioSalud";
import ChatBot from "./ChatBot";
import News from "./News";
import Nav from "./Nav";

function SaludPage() {
  return (
    <>
      <Nav />
      <main style={{ marginTop: "70px" }}>
        <Carrusel />
      </main>
      <ChatBot />
      <section className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-8">
            <h3 className="titulo mt-3 my-2">
              Formulario de registro usuarios Markbot
            </h3>
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
          <h1 className="titulo mt-3 my-2">Contenidos para tu bienestar</h1>
          <h3 className="titulo mt-3 my-2">Noticias</h3>
          <p>
            Infórmate sobre los temas más nuevos que tenemos para tu bienestar y
            el de los que más quieres.
          </p>
          <News />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default SaludPage;
