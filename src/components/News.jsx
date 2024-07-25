import React from "react";

function News() {
  return (
    <>
      <div className="row row-cols-1 row-cols-md-3 g-4 mt-3 mx-3">
        <div className="col">
          <div className="card h-100 shadow">
            <img
              src="/lava-bien-tus-manos.jpg"
              className="card-img-top img-fluid"
              alt="lavado-manos"
            />
            <div className="card-body">
              <h5 className="card-title">
                Lava bien tus manos para prevenir enfermedades
              </h5>
              <p className="card-text mb-auto">
                La higiene es vital para evitar que se propaguen los virus y es
                importante asumirla como una conducta social, cívica y de salud
                pública pues es una forma de protegernos entre todos”. Así lo
                explica César Augusto López, médico epidemiólogo de SURA, con
                quien hablamos para compartirte algunas medidas de prevención de
                enfermedades.
              </p>
              <a
                class="blog-sura-card-link"
                href="https://segurossura.com/co/blog/salud/lava-bien-tus-manos-para-prevenir-enfermedades/"
                target="_blank"
                data-uw-rm-brl="PR"
                data-uw-original-href="https://segurossura.com/co/blog/salud/lava-bien-tus-manos-para-prevenir-enfermedades/"
                aria-label="LEE - abrir en una nueva pestaña"
                data-uw-rm-ext-link=""
                uw-rm-external-link-id="https://segurossura.com/co/blog/salud/lava-bien-tus-manos-para-prevenir-enfermedades/$lee"
              >
                LEE <i class="fas fa-arrow-right" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100 shadow">
            <img
              src="/podcast-especial-duelo.jpg"
              className="card-img-top"
              alt="duelo"
            />
            <div className="card-body">
              <h5 className="card-title">Depresión posparto</h5>
              <p className="card-text mb-auto">
                La melancolía posparto no es igual a la depresión, esto es algo
                que trasciende ese estado. Si quieres saber cómo detectarla o
                cómo apoyar a las madres que la padecen, escucha este episodio
                en el que las especialistas nos dan sus recomendaciones.
                <br />
                <a
                  class="informate-covid-noticia-link"
                  href="https://edusalud.co/cursos"
                  target="_blank"
                  data-uw-rm-brl="PR"
                  data-uw-original-href="https://edusalud.co/cursos"
                  aria-label="IR - abrir en una nueva pestaña"
                  data-uw-rm-ext-link=""
                  uw-rm-external-link-id="https://edusalud.co/cursos$ir"
                >
                  IR
                  <span>
                    <i class="fas fa-arrow-right" aria-hidden="true"></i>
                  </span>
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100 shadow">
            <img src="/video.jpg" className="card-img-top" alt="video" />
            <div className="card-body">
              <h5 className="card-title">Pide tus medicamentos a domicilio</h5>
              <p className="card-text mb-auto">
                Aprende aquí a pedir tus medicamentos a domicilio desde
                <a href="https://www.epssura.com/"> www.epssura.com.</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default News;
