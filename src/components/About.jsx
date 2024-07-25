import React from "react";
import Footer from "./Footer";
import Nav from "./Nav";

function About() {
  return (
    <>
      <Nav />
      <div className="p-5 mb-4 bg-body-tertiary rounded-3">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">
            ¡Bienvenidos a nuestro equipo de desarrollo innovador!
          </h1>
          <p className="col-md-8 fs-4">
            Somos un equipo apasionado de profesionales de la tecnología
            comprometidos con la excelencia en el desarrollo de software. En
            nuestra familia, encontrarás a Mauro Yepes, nuestra experto Full
            Stack que domina tanto el arte del frontend como del backend con
            JavaScript. Desde interfaces de usuario dinámicas hasta sólidas
            arquitecturas de servidor, Mauro lleva la innovación y la
            funcionalidad a cada proyecto que toca. Junto a Mauro, en este
            ejercicio académido están Sonia Villacorte, Diego Ospina y Tattiana
            Hernandez en conjunto,fusionando la creatividad del desarrollo
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
            <h2>Desarrolladores de RPA:</h2>
            <p>
              Nombres:Sonia Villacorte , Diego Ospina, Tattiana Hernandez.
              Descripción: Grupo de desarrolladores especializados en
              Automatización de Procesos Robóticos (RPA). Con una amplia
              experiencia en el diseño e implementación de robots de software
              para automatizar tareas repetitivas y tediosas, mejorando la
              eficiencia y la precisión en una variedad de entornos
              empresariales. Utilizando herramientas como UiPath y otras.
              Creando en este caso un recurso valioso para cualquier equipo
              orientado a la eficiencia operativa y apoyo académido de otros.
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
