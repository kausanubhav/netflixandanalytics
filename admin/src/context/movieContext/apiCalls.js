import axios from "axios"
import {
  getMoviesStart,
  getMoviesFailure,
  getMoviesSuccess,
  deleteMovieSuccess,
  deleteMovieStart,
  deleteMovieFailure,
  createMovieSuccess,
  createMovieStart,
  createMovieFailure,
  updateMovieSuccess,
  updateMovieStart,
  updateMovieFailure,
} from "./MovieActions"
//Get movies
export const getMovies = async (dispatch) => {
  dispatch(getMoviesStart())
  try {
    const res = await axios.get("/movies", {
      headers: {
        Authorization: "Bearer " + JSON.parse(localStorage.getItem("user")).token,
      },
    })
    dispatch(getMoviesSuccess(res.data))
  } catch (error) {
    dispatch(getMoviesFailure())
  }
}

// create movies
export const createMovie = async (movie, dispatch) => {
  dispatch(createMovieStart())
  try {
    const res = await axios.post("api/movies", movie, {
      headers: {
        Authorization: "Bearer " + JSON.parse(localStorage.getItem("user")).token,
      },
    })
    dispatch(createMovieSuccess(res.data))
  } catch (error) {
    dispatch(createMovieFailure())
  }
}

//Delete movies
export const deleteMovie = async (id, dispatch) => {
  dispatch(deleteMovieStart())
  try {
    await axios.delete("/movies/" + id, {
      headers: {
        Authorization: "Bearer " + JSON.parse(localStorage.getItem("user")).token,
      },
    })
    dispatch(deleteMovieSuccess(id))
  } catch (error) {
    dispatch(deleteMovieFailure())
  }
}
//Update movies
export const updateMovie = async (movie, dispatch) => {
  dispatch(updateMovieStart())
  try {
    console.log(movie.movie._id)
    const res = await axios.put("/movies/" + movie.movie._id, movie, {
      headers: {
        Authorization: "Bearer " + JSON.parse(localStorage.getItem("user")).token,
      },
    })
    console.log("updated movie", res)
    dispatch(updateMovieSuccess(res.data))
  } catch (error) {
    dispatch(updateMovieFailure())
  }
}
