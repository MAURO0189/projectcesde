import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Movilidad from "./components/Movilidad";
import SaludPage from "./components/SaludPage";
import About from "./components/About";
import SingUp from "./components/SingUp";
import { UserProvider } from "./context/UserContext";
import NotBackRoute from "./components/routes/NotBackRoute";
import ProtectedRoute from "./components/routes/ProtectedRoute";

function App() {
  return (
    <>
      <UserProvider>
        <Router>
          <Routes>
            <Route element={<NotBackRoute />}>
              <Route path="/" element={<SingUp />} />
            </Route>
            <Route element={<ProtectedRoute />}>
              <Route path="/home" element={<Home />} />
            </Route>
            <Route path="/movilidad" element={<Movilidad />} />
            <Route path="/saludPage" element={<SaludPage />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
      </UserProvider>
    </>
  );
}

export default App;
