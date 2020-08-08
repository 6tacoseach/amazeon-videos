const path = require('path');
const express = require('express');

const app = express();
const port = 3013;
const db = require('../db/index.js');

app.use(express.static(path.join(__dirname, '../public')));

app.use('/:productId', express.static(path.join(__dirname, '../public')));

app.get('/video/:productId', (req, res) => {
  db.Video.find({ productId: req.params.productId }, (err, videoData) => {
    if (err) {
      console.error('Error retrieving video data', err);
    } else {
      res.send(videoData);
    }
  });
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
