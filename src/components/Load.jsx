import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TailSpin } from "react-loader-spinner";
import "../assets/style/load.css";

function Load() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      navigate("/home");
    }, 1500);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <>
      {loading ? (
        <div className="loading-container">
          <h1 className="loadTitle">Ingresando...</h1>
          <img src="./img001.png" className="loadImg" alt="img" />
          <TailSpin color="#2d6df6" size={120} loading={true} />
        </div>
      ) : null}
    </>
  );
}

export default Load;
