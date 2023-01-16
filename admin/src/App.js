import Topbar from "./components/topbar/Topbar";
import "./app.css";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import {  Routes, Route } from "react-router-dom";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/movieList/MovieList";
import NewProduct from "./pages/newProduct/NewProduct";
import ListCollection from "./pages/listCollection/ListCollection";
import Login from "./pages/login/Login";
import { useContext } from "react";
import { AuthContext } from "./context/authContext/AuthContext";
import { Navigate } from "react-router-dom";
import { AppLayout } from "./components/appLayout/AppLayout";
import List from "./pages/list/List";
import NewList from "./pages/newList/NewList";
import Movie from "./pages/movie/Movie";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <>
      <Topbar />
      <Routes>
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route element={<AppLayout user={user} />}>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/users/:userId" element={<User />} />
          <Route path="/new-user" element={<NewUser />} />
          <Route path="/movies" element={<ProductList />} />
          <Route path="/movies/:movieId" element={<Movie />} />
          <Route path="/new-product" element={<NewProduct />} />
          <Route path="/lists" element={<ListCollection />} />
          <Route path="/list/:listId" element={<List />} /> 
          <Route path="/new-list" element={<NewList />} /> */
        </Route>
      </Routes>
    </>
  );
}

export default App;
