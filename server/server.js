const path = require('path');
const compression = require('compression');
const express = require('express');

const app = express();
const port = 3013;
const db = require('../db/index.js');

app.use(compression());

app.use(express.static(path.join(__dirname, '../public')));

app.use('/product/:productId', express.static(path.join(__dirname, '../public')));

app.get('/video/product/:productId', (req, res) => {
  const { productId } = req.params;
  const allVideos = [];
  db.Video.find({ productId }, (err, videoData) => {
    if (err) {
      console.error('Error retrieving video data', err);
      res.status(500).send(err);
    } else {
      const { category } = videoData[0];
      allVideos.push(videoData);
      db.Video.find({ category, productId: { $ne: productId } }, (err, relatedVideos) => {
        if (err) {
          console.error('Error retrieving related video data', err);
          res.status(500).send(err);
        } else {
          allVideos.push(relatedVideos);
          res.status(200).send(allVideos);
        }
      });
    }
  });
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
