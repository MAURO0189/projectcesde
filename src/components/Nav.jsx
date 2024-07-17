import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Logosura from "../../public/logosura.png";
import "../assets/style/styles.css";

function Nav() {
  const [userName, setUserName] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.displayName) {
      setUserName(user.displayName);
    }
  }, []);

  const handleLogOut = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("userToken");
    navigate("/");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
            </ul>
            <div className="navbar-text text-white d-flex align-items-center">
              <span
                className="ms-2"
                onClick={toggleMenu}
                style={{ cursor: "pointer" }}
              >
                {userName}
              </span>
              <FontAwesomeIcon
                icon={faUser}
                size="1x"
                style={{ marginLeft: "8px" }}
              />
              {isMenuOpen && (
                <button
                  className="nav-link text-white btn ms-2"
                  onClick={handleLogOut}
                >
                  Salir
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
