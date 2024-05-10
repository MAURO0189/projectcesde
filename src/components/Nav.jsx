// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import Logosura from "../../public/logosura.png";

function Nav() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-white mt-3 my-2">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <img
                  className="mx-3"
                  src={Logosura}
                  alt="Este es el logo"
                  style={{ maxWidth: "150px", maxHeight: "60px" }}
                />
              </li>
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
