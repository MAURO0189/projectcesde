// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import Logosura from "../../public/logosura.png";
import Footer from "./Footer";

function About() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light mt-3 my-2">
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
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="p-5 mb-4 bg-body-tertiary rounded-3">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">
            ¡Bienvenidos a nuestro equipo de desarrollo innovador!
          </h1>
          <p className="col-md-8 fs-4">
            Somos un equipo apasionado de profesionales de la tecnología
            comprometidos con la excelencia en el desarrollo de software. En
            nuestra familia, encontrarás a Mauro Yepes, nuestra experta Full
            Stack que domina tanto el arte del frontend como del backend con
            JavaScript. Desde interfaces de usuario dinámicas hasta sólidas
            arquitecturas de servidor, Mauro lleva la innovación y la
            funcionalidad a cada proyecto que toca. Junto a Mauro, está Juan
            David Taborda, nuestro especialista en Automatización de Procesos
            Robóticos (RPA). Con su habilidad para diseñar y desplegar robots de
            software, Juan impulsa la eficiencia operativa y la productividad
            empresarial. Su enfoque meticuloso y su capacidad para identificar
            oportunidades de automatización hacen que sea una pieza fundamental
            en cualquier equipo enfocado en la optimización de procesos. En
            conjunto, nuestro equipo fusiona la creatividad del desarrollo
            frontend con la eficiencia de la automatización RPA, ofreciendo
            soluciones tecnológicas integrales y efectivas para nuestros
            clientes. ¡Déjanos llevar tu visión a la realidad digital!
          </p>
        </div>
      </div>

      <div className="row align-items-md-stretch">
        <div className="col-md-6">
          <div className="h-100 p-5 text-bg-dark rounded-3">
            <h2>Desarrollador Full Stack especializado en JavaScript:</h2>
            <p>
              Nombre: Mauro Yepes Descripción: Mauro es un desarrollador Full
              Stack con experiencia tanto en el frontend como en el backend,
              utilizando principalmente JavaScript. Con una pasión por la
              creación de interfaces de usuario intuitivas y funcionales, Mauro
              es experto en frameworks como React.js y Angular.js para la
              construcción de experiencias de usuario dinámicas y atractivas.
              Además, tiene un sólido conocimiento en el desarrollo del lado del
              servidor utilizando tecnologías como Node.js y Express.js. Mauro
              es conocido por su capacidad para trabajar en proyectos complejos,
              desde el diseño inicial hasta la implementación final, siempre
              buscando soluciones innovadoras y eficientes.
            </p>
            <button className="btn btn-outline-light" type="button">
              Saber más
            </button>
          </div>
        </div>
        <div className="col-md-6">
          <div className="h-100 p-5 bg-body-tertiary border rounded-3">
            <h2>Desarrollador de RPA:</h2>
            <p>
              Nombre: Juan David Taborda Descripción: Juan David es un
              desarrollador especializado en Automatización de Procesos
              Robóticos (RPA). Con una amplia experiencia en el diseño e
              implementación de robots de software para automatizar tareas
              repetitivas y tediosas, Juan David ha demostrado su habilidad para
              mejorar la eficiencia y la precisión en una variedad de entornos
              empresariales. Utilizando herramientas como UiPath, Automation
              Anywhere y Blue Prism, Juan David ha desarrollado soluciones RPA
              personalizadas para optimizar procesos en áreas como contabilidad,
              recursos humanos y atención al cliente. Su enfoque meticuloso y su
              capacidad para identificar oportunidades de automatización lo
              convierten en un recurso valioso para cualquier equipo orientado a
              la eficiencia operativa.
            </p>
            <button className="btn btn-outline-secondary" type="button">
              Saber más
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
