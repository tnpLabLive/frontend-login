import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./context/authContext";

axios.defaults.withCredentials = true;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AuthProvider>
      <App />
    </AuthProvider>
  </BrowserRouter>
);
