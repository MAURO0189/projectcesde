import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Movilidad from "./components/Movilidad";
import SaludPage from "./components/SaludPage";
import About from "./components/About";
import SingUp from "./components/SingUp";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<SingUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/movilidad" element={<Movilidad />} />
          <Route path="/saludPage" element={<SaludPage />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
