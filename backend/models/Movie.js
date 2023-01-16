const mongoose = require("mongoose");

const MovieSchema = mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    desc: { type: String },
    img: { type: String },
    imgTitle: { type: String },
    imgThumb: { type: String },
    trailer: { type: String },
    video: { type: String },
    year: { type: String },
    limit: { type: String },
    genre: { type: String },
    isSeries: { type: Boolean },
    duration:{type:String}
  },
  {
    timestamps: true,
  }
);
// Model name:User and reference point: UserSchema
module.exports = mongoose.model("Movie", MovieSchema);
