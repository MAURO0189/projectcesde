import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithGoogle } from "../authentication/authFirebase";
import { useUser } from "../context/UserContext";
import "../assets/style/singUp.css";

function SingUp() {
  const navigate = useNavigate();
  const { setUser, setToken } = useUser();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [useGoogle, setUseGoogle] = useState(false);
  const [useEmailPassword, setUseEmailPassword] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate("");
  };

  const handleGoogleLogin = async () => {
    try {
      const { user, token } = await signInWithGoogle();
      setUser(user);
      setToken(token);
      navigate("/home");
    } catch (error) {
      console.error(
        "Error al iniciar sesión con Google:",
        error.code,
        error.message
      );
      alert(
        "Error al iniciar sesión con Google. Por favor, inténtalo de nuevo más tarde."
      );
    }
  };

  const toggleUseGoogle = (isChecked) => {
    setUseGoogle(isChecked);
    if (isChecked) {
      setUseEmailPassword(false);
    } else {
      setUseEmailPassword(true);
    }
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
                {!useGoogle && useEmailPassword && (
                  <>
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
                  </>
                )}
              </div>
              <div className="opt-group"></div>
              {!useGoogle && <button type="submit">Iniciar Sesión</button>}
              {useGoogle && (
                <button
                  type="button"
                  onClick={handleGoogleLogin}
                  className="google-login-button"
                >
                  Iniciar Sesión con Gmail
                </button>
              )}
              <div className="form-check">
                <input
                  className="form-check-input my-3"
                  type="checkbox"
                  checked={useGoogle}
                  onChange={(e) => toggleUseGoogle(e.target.checked)}
                  id="useGoogleCheck"
                />
                <label
                  className="form-check-label my-2 fs-6"
                  htmlFor="useGoogleCheck"
                >
                  Iniciar sesión con Gmail
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingUp;
