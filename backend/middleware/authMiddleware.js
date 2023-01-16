const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../models/User");
let token;

const protect = asyncHandler(async (req, res, next) => {
  const itemToBeValidated = req.headers.authorization;
  if (itemToBeValidated && itemToBeValidated.startsWith("Bearer")) {
    try {
      //Get token from header
      //convert into array using split('')
      token = itemToBeValidated.split(" ")[1];
      //decode the token
      //jwt returns an id corresponding to a token and jwtkey
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      //get user from the decoded
      req.user = await User.findById(decoded.id).select("-password");
      next();
    } catch (error) {
      res.status(401);
      throw new Error("Not authorized");
    }
  } else {
    res.status(401);
    throw new Error("Not authorized");
  }
  
  
});

module.exports = { protect };
