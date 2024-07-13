import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Logosura from "../../public/logosura.png";
import "../assets/style/styles.css";

function Nav() {
  const navigate = useNavigate();
  const handleLogOut = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("userToken");
    navigate("/");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top nav1 text-white my-2">
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
                <Link className="nav-link text-white" to="/saludPage">
                  Salud en Casa
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/movilidad">
                  Movilidad
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/about">
                  Acerca de
                </Link>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link text-white btn"
                  onClick={handleLogOut}
                >
                  Salir
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
