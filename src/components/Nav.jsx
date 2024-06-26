// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import Logosura from "../../public/logosura.png";

function Nav() {
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
                <Link className="nav-link" to="/saludPage">
                  Salud en Casa
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/movilidad">
                  Movilidad
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  Acerca de
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
