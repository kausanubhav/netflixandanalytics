import { useEffect, useContext, useState } from "react";
import { MovieContext } from "../../context/movieContext/MovieContext";
import { ListContext } from "../../context/listContext/ListContext";
import { getMovies } from "../../context/movieContext/apiCalls";
import "./newList.css";
import { createList } from "../../context/listContext/apiCalls";
import { useNavigate } from "react-router-dom";
//TODO: UPDATE (api calls and client side)
export default function NewList() {
  const [list, setList] = useState(null);

  const { dispatch } = useContext(ListContext);
  const { movies, dispatch: dispatchMovie } = useContext(MovieContext);
  const navigate=useNavigate();
  useEffect(() => {
    getMovies(dispatchMovie);
  }, [dispatchMovie]);

  //handleChange
  function handleChange(e) {
    const value = e.target.value;
    setList({ ...list, [e.target.name]: value });
  }

  //handleSelect
  const handleSelect = (e) => {
    let value = Array.from(e.target.selectedOptions, (option) => option.value);
    setList({ ...list, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createList(list,dispatch);
    navigate('/list');
  };
  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New List</h1>
      <form className="addProductForm">
        <div className="formLeft">
          <div className="addProductItem">
            <label>Title</label>
            <input
              type="text"
              placeholder="Popular movies"
              name="title"
              onChange={handleChange}
            />
          </div>
          <div className="addProductItem">
            <label>Genre</label>
            <input
              type="text"
              placeholder="action"
              name="genre"
              onChange={handleChange}
            />
          </div>
          <div className="addProductItem">
            <label>Type</label>
            <select name="type" onChange={handleChange}>
              <option>Type</option>
              <option value="movie">Movie</option>
              <option value="series">Series</option>
            </select>
          </div>
        </div>
        <div className="formRight">

        <div className="addProductItem">
          <label>Content</label>
          <select
            multiple
            name="content"
            onChange={handleSelect}
            style={{ height: "280px" }}
          >
            {movies.map((movie) => (
              <option key={movie._id} value={movie._id}>
                {movie.title}
              </option>
            ))}
          </select>
        </div>
        </div>

        <button className="addProductButton" onClick={handleSubmit}>
          Create
        </button>
      </form>
    </div>
  );
}
