const { Schema } = require("@mui/icons-material");
const mongoose = require("mongoose");
const UserSchema = mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profilePic: { type: String, default: "" },
    isAdmin: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);
// Model name:User and reference point: UserSchema
module.exports=mongoose.model('User',UserSchema);
