const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const { createList ,deleteList,getList} = require("../controllers/listController");

// const { protect } = require("../middleware/authMiddleware");

router.route("/").post(protect, createList).get(protect,getList);
router.route("/:id").delete(protect, deleteList);


module.exports = router;
