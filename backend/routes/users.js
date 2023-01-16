const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const {
  registerUser,loginUser,updateUser,deleteUser,getUser,getAllUsers,getUserStats
  
} = require("../controllers/userController");

// const { protect } = require("../middleware/authMiddleware");

//registerUser and loginUser are the controllers for '/' and '/login' resp..
router.get('/stats',protect,getUserStats);
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get('/',protect,getAllUsers);
router.route("/:id").put(protect, updateUser).delete(protect,deleteUser).get(protect, getUser);

module.exports = router;
