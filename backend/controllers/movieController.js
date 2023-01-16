const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const Movie = require("../models/Movie");

//@desc Create new movie
//@route /api/movies/
//@access Public
const createMovie = asyncHandler(async (req, res) => {
  if (req.user.isAdmin) {
    const movie = await Movie.create(req.body);
    res.status(200).json(movie);
  } else {
    res.status(403).json("You are not authorized!");
  }
});

//@desc Update a movie
//@route /api/movies/:id
//@access Public
const updateMovie = asyncHandler(async (req, res) => {
  if (req.user.isAdmin) {
    const updatedMovie = await Movie.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updatedMovie);
  } else {
    res.status(403).json("You are not authorized!");
  }
});
//@desc Delete a movie
//@route /api/movies/:id
//@access Public
const deleteMovie = asyncHandler(async (req, res) => {
  if (req.user.isAdmin) {
    await Movie.findByIdAndDelete(req.params.id);
    res.status(200).json("Deleted Successfully");
  } else {
    res.status(403).json("You are not authorized!");
  }
});
//@desc Get a movie
//@route /api/movies/find/:id
//@access Public
const getMovie = asyncHandler(async (req, res) => {
  const movie = await Movie.findById(req.params.id);
  res.status(200).json(movie);
});

//@desc Get a random movie
//@route /api/movies/random
//@access Public
//TODO: LEARN MONGODB AGGREGATE
const getRandomMovie = asyncHandler(async (req, res) => {
  const type = req.query.type;
  let movie;
  if (type === "series") {
    movie = await Movie.aggregate([
        // $match is stage and stuff inside the braces is query
        //$sample randomly selects the specified number of docs

      { $match: { isSeries: true } },
      { $sample: { size: 1 } },
    ]);
  } else {
    movie = await Movie.aggregate([
      { $match: { isSeries: false } },
      { $sample: { size: 1 } },
    ]);
  }

  res.status(200).json(movie);
});

//@desc Get all movies
//@route /api/movies/
//@access Public
const getAllMovies = asyncHandler(async (req, res) => {
  if (req.user.isAdmin) {
   const movies =await Movie.find();
    res.status(200).json(movies.reverse());
  } else {
    res.status(403);
    throw new Error("Not authorized");
  }
});


module.exports = {
  createMovie,
  updateMovie,
  deleteMovie,
  getMovie,
  getAllMovies,
  getRandomMovie,
};
