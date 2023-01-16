import "./app.scss";
import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Watch from "./pages/watch/Watch";
import { useContext } from "react";
import { AuthContext } from "./authContext/AuthContext";

const App = () => {
  const {user}=useContext(AuthContext);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={user ? <Home /> : <Navigate to="/register" />}
        />
        <Route
          path="/register"
          element={!user ? <Register /> : <Navigate to="/" />}
        />
        <Route
          path="/login"
          element={!user ? <Login /> : <Navigate to="/" />}
        />
        {user && (
          <>
            <Route exact path="/movies" element={<Home type="movies" />} />
            <Route exact path="/series" element={<Home type="series" />} />
            <Route exact path="/watch" element={<Watch />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
