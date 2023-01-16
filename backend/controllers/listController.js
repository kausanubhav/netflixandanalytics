const asyncHandler = require("express-async-handler");
const List = require("../models/List");

//@desc Create new movie
//@route /api/movies/
//@access Public
const createList = asyncHandler(async (req, res) => {
  if (req.user.isAdmin) {
    const newList = await List.create(req.body);
    res.status(200).json(newList);
  } else {
    res.status(403).json("You are not authorized!");
  }
});
//@desc Delete  movie
//@route /api/movies/:id
//@access Public
const deleteList = asyncHandler(async (req, res) => {
  if (req.user.isAdmin) {
    List.findByIdAndDelete(req.params.id);
    res.status(200).json("List deleted!");
  } else {
    res.status(403).json("You are not authorized!");
  }
});

//@desc Get  movie
//@route /api/movies/
//@access Public
const getList = asyncHandler(async (req, res) => {
  const typeQuery = req.query.type;
  const genreQuery = req.query.genre;
  let list = [];
  if (typeQuery) {
    if (genreQuery) {
      list = await List.aggregate([
        { $sample: { size: 10 } },
        { $match: { type: typeQuery, genre: genreQuery } },
      ]);
    } else {
      list = await List.aggregate([
        { $sample: { size: 10 } },
        { $match: { type: typeQuery } },
      ]);
    }
  } else {
    list = await List.aggregate([{ $sample: { size: 10 } }]);
  }

  res.status(200).json(list);
});

module.exports = {
  createList,
  deleteList,
  getList,
};
