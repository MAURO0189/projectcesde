// eslint-disable-next-line no-unused-vars
import React from "react";

function Carrusel() {
  return (
    <>
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="./public/banner0.png"
              className="d-block w-100"
              alt="banner1"
            />
          </div>
          <div className="carousel-item">
            <img
              src="./public/banner2.png"
              className="d-block w-100"
              alt="banner2"
            />
          </div>
          <div className="carousel-item">
            <img
              src="./public/banner3.png"
              className="d-block w-100"
              alt="banner3"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default Carrusel;
