import React from "react";

function News2() {
  return (
    <>
      <div className="row row-cols-1 row-cols-md-3 g-4 mt-3 mx-3">
        <div className="col">
          <div className="card h-100 shadow">
            <img
              src="/img-daños-materiales.jpg"
              className="card-img-top img-fluid"
              alt="lavado-manos"
            />
            <div className="card-body">
              <h5 className="card-title">choques simples</h5>
              <p className="card-text mb-auto">
                ¿Qué hacer en caso de choque que ocasione solo daños materiales?
              </p>
              <a
                class="blog-sura-card-link"
                href="https://www.segurossura.com.co/paginas/personas.aspx"
                target="_blank"
              >
                Ingresa aquí
                <i class="fas fa-arrow-right" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100 shadow">
            <img
              src="/img-lesionados.jpg"
              className="card-img-top"
              alt="duelo"
            />
            <div className="card-body">
              <h5 className="card-title">Siniestros</h5>
              <p className="card-text mb-auto">
                ¿Qué hacer en caso de un choque que deje lesionados o
                fallecidos?
                <br />
                <a
                  class="blog-sura-card-link"
                  href="https://www.segurossura.com.co/paginas/personas.aspx"
                  target="_blank"
                >
                  IR
                  <i class="fas fa-arrow-right" aria-hidden="true"></i>
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100 shadow">
            <img
              src="/img-reclamacion-seguro-de-vida.jpg"
              className="card-img-top"
              alt="video"
            />
            <div className="card-body">
              <h5 className="card-title">Reclamación seguro de vida</h5>
              <p className="card-text mb-auto">
                ¿Cómo hacer una reclamación de mi seguro de vida?
                <a
                  class="blog-sura-card-link"
                  href="https://www.segurossura.com.co/paginas/personas.aspx"
                  target="_blank"
                >
                  LEE
                  <i class="fas fa-arrow-right" aria-hidden="true"></i>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default News2;
