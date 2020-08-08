const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/videos');
const Schema = mongoose.Schema;

const videoSchema = new Schema({
  title: String,
  author: String,
  duration: String,
  url: String,
  thumbnail: String,
  likes: Number,
  dislikes: Number,
  productId: Number,
  category: String
});

const Video = mongoose.model('Video', videoSchema);

module.exports.Video = Video;