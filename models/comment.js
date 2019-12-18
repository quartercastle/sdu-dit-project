const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema(
  {
    toId: { type: String },
    author: { type: String },
    comment: { type: String },
    vote: { type: Number }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Comment", commentSchema);
