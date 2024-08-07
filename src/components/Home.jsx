import React from "react";
import Nav from "./Nav";
import Banner from "./Banner";
import "../assets/style/styles.css";
import Footer from "./Footer";
import ChatBot from "./ChatBot";
import Testimonials from "./Testimonials";

function Home() {
  return (
    <>
      <Nav />
      <main style={{ marginTop: "70px" }}>
        <Banner />
      </main>
      <div className="mt-5 mx-3">
        <h3 className="titulo">SURA acompaña a los latinoamericanos</h3>
        <p className="texto">
          Con un portafolio de soluciones dinámicas en Seguros, Pensiones,
          Ahorro, Inversión y Gestión de activos, en 10 países de la región.
          SURA siempre está donde los latinoamericanos la necesitan. Contamos
          con presencia regional en 10 países.
        </p>
      </div>
      <ChatBot />
      <div className="row row-cols-1 row-cols-md-3 g-4 mt-3 mx-3">
        <div className="col">
          <div className="card h-100">
            <img
              src="/vacunacion.png"
              className="card-img-top"
              alt="vacunacion"
            />
            <div className="card-body">
              <h5 className="card-title">Vacunación</h5>
              <p className="card-text">
                Conoce las novedades diarias sobre la vacunación contra el
                COVID-19.
              </p>
              <br />
              <br />
              <a
                href="https://www.segurossura.com.co/covid-19/paginas/personas/que-hacer-cuando.aspx"
                className="btn btn-primary"
                target="_blank"
              >
                Preguntas COVID-19
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src="/covid.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">
                ¿Qué hacer si tienes sintomas de COVID-19?
              </h5>
              <p className="card-text">
                Queremos acompañarte con herramientas que te permitan
                autogestionarte, aún sin contar con una prueba diagnóstica.
              </p>
              <a
                href="https://www.segurossura.com.co/covid-19/paginas/personas/que-hacer-cuando.aspx"
                className="btn btn-primary"
                target="_blank"
              >
                Preguntas COVID-19
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src="/info.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Información general</h5>
              <p className="card-text">
                Resuelve tus inquietudes sobre el COVID-19. Encuentra contenidos
                relevantes para ti, tu familia y tu salud mental.
              </p>
              <br />
              <a
                href="https://www.segurossura.com.co/covid-19/paginas/personas/que-hacer-cuando.aspx"
                className="btn btn-primary"
                target="_blank"
              >
                Preguntas COVID-19
              </a>
            </div>
          </div>
        </div>
      </div>
      <Testimonials />
      <Footer />
    </>
  );
}

export default Home;
