import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BackOffice from "@pages/back_office/BackOffice";
import Home from "@pages/Home";
import LogPage from "@pages/LogPage";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LogPage />} />
        <Route path="/accueil" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/dashboard" element={<BackOffice />} />
      </Routes>
    </Router>
  );
}

export default App;
