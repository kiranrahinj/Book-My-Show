import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import MovieProvider from "./context/movieContext";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <MovieProvider>
      <App />
      </MovieProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
