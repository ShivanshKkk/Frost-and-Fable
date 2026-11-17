import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./themes/theme.css";
import "./styles/global.css";
import "./styles/home.css";
import "./styles/pages.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
