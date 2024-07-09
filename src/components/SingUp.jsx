import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/style/singUp.css";

function SingUp() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate("");
  };

  return (
    <>
      <div className="content">
        <div className="container">
          <div className="form">
            <form onSubmit={handleSubmit}>
              <img className="logo2" src="./logosura1.png" alt="logo" />
              <div className="opt-group">
                <label id="signIn">Ingreso</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Correo"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  title="Ingresa un correo válido"
                  required
                  autoComplete="off"
                />
                <br />
                <input
                  type="password"
                  name="password"
                  placeholder="Contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  title="Ingresa tu contraseña"
                  required
                />
              </div>
              <div className="opt-group"></div>
              <button type="submit">Iniciar Sesión</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingUp;
