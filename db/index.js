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

let addVideo = (videoObj) => {
  let { title, author, duration, url, thumbnail, likes, dislikes, productId, category } = videoObj;

  let newVideo = new Video({
    title: title,
    author: author,
    duration: duration,
    url: url,
    thumbnail: thumbnail,
    likes: likes,
    dislikes: dislikes,
    productId: productId,
    category: category
  });
  newVideo.save();
};

module.exports.addVideo = addVideo;