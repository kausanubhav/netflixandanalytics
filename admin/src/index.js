import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { AuthContextProvider } from "./context/authContext/AuthContext";
import { ListContextProvider } from "./context/listContext/ListContext";
import { MovieContextProvider } from "./context/movieContext/MovieContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContextProvider>
    <MovieContextProvider>
      <ListContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ListContextProvider>
    </MovieContextProvider>
  </AuthContextProvider>
);
