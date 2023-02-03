import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BackOffice from "@pages/back_office/BackOffice";
import Home from "@pages/Home";
import LogPage from "@pages/LogPage";
import Spots from "@pages/Spots";
import OneSpot from "@pages/OneSpot";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LogPage />} />
        <Route path="/accueil" element={<Home />} />
        <Route path="/spots" element={<Spots />} />
        <Route path="/spots/:id" element={<OneSpot />} />
      </Routes>
      <Routes>
        <Route path="/dashboard" element={<BackOffice />} />
      </Routes>
    </Router>
  );
}

export default App;
