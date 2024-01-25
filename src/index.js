import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import NetworkContextProvider from "./context/NetworkContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <NetworkContextProvider>
      <App />
    </NetworkContextProvider>
  </BrowserRouter>
);
