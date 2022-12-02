const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  message: String,
  time: Number,
  posterUserId: String,
  likes: Array
});

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;
