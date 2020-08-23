const mongoose = require('mongoose');

mongoose.connect('mongodb://database/videos');
const { Schema } = mongoose;

const videoSchema = new Schema({
  title: String,
  author: String,
  duration: String,
  url: String,
  thumbnail: String,
  likes: Number,
  dislikes: Number,
  productId: Number,
  category: String,
});

const Video = mongoose.model('Video', videoSchema);

module.exports.Video = Video;
