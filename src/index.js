import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Lista from "./components/routes/lista";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Link to="/">Cerca</Link>
      <Link to="/lista">Lista</Link>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="lista" element={<Lista />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
