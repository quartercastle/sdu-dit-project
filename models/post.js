const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema(
  {
    author: { type: String },
    content: { type: String },
    vote: { type: Number },
    commentCount: { type: Number }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", postSchema);
