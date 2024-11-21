import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./pages/Home";
import GlobalStyles from "./styles/globals";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyles />
    <HomePage />
  </React.StrictMode>
);
