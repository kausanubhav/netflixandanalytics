const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const {
  createMovie,
  updateMovie,
  deleteMovie,
  getMovie,
  getAllMovies,
  getRandomMovie,
} = require("../controllers/movieController");

// const { protect } = require("../middleware/authMiddleware");

router.route("/").post(protect, createMovie).get(protect,getAllMovies);
router.route("/:id").put(protect, updateMovie).delete(protect, deleteMovie);
router.get("/find/:id",protect, getMovie);
router.get("/random",protect, getRandomMovie);
module.exports = router;
