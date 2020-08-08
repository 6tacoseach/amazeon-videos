const db = require('./index.js');

const videoData = [
  {
    url: "https://www.youtube.com/embed/EELg2YeUdyQ",
    title: "Fall Guys: Ultimate Knockout Review",
    duration: "6:03",
    author: "IGN",
    thumbnail: "https://i.ytimg.com/vi/EELg2YeUdyQ/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLCA7R7gP2wWqFQfyupt4T61tvJcdg"
  }, {
    url: "https://www.youtube.com/embed/kXZItE5v5Bk",
    title: "Skater XL Review",
    duration: "6:14",
    author: "IGN",
    thumbnail: "https://i.ytimg.com/vi/kXZItE5v5Bk/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLDx2uvTf-CQGLLB0wHeQUP3bAAAAQ"
  }, {
    url: "https://www.youtube.com/embed/zNDhCyF0T_A",
    title: "Hellpoint Review",
    duration: "5:01",
    author: "IGN",
    thumbnail: "https://i.ytimg.com/vi/zNDhCyF0T_A/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBT3J7JZxBYBoNnDr397VqaLtvxDw"
  }, {
    url: "https://www.youtube.com/embed/zNDhCyF0T_A",
    title: "Hellpoint Review",
    duration: "5:01",
    author: "IGN",
    thumbnail: "https://i.ytimg.com/vi/zNDhCyF0T_A/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBT3J7JZxBYBoNnDr397VqaLtvxDw"
  }, {
    url: "https://www.youtube.com/embed/XElTCPgVSNo",
    title: "Death Stranding Review",
    duration: "12:47",
    author: "GameSpot",
    thumbnail: "https://i.ytimg.com/vi/XElTCPgVSNo/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLA-BhIO1i3bFogHALXF-keIso7rNw"
  }, {
    url: "https://www.youtube.com/embed/4B6t9U1pRok",
    title: "The Outer Worlds Review",
    duration: "7:39",
    author: "GameSpot",
    thumbnail: "https://i.ytimg.com/vi/4B6t9U1pRok/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLCuNc48Ly0dtsV38qS5RA05S6wfVg"
  }, {
    url: "https://www.youtube.com/embed/kIJ0kfjhuws",
    title: "Star Wars Jedi: Fallen Order Review",
    duration: "5:15",
    author: "GameSpot",
    thumbnail: "https://i.ytimg.com/vi/kIJ0kfjhuws/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLAa6dTQNu0NVTFbOFadWDbZyKMmTA"
  }, {
    url: "https://www.youtube.com/embed/vKXUQKkx7mo",
    title: "Destroy All Humans Review 'Buy, Wait for Sale, Rent, Never Touch?'",
    duration: "16:40",
    author: "ACG",
    thumbnail: "https://i.ytimg.com/vi/vKXUQKkx7mo/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBrOOwJfBc1ad71Adn59k-txSEt4g"
  }, {
    url: "https://www.youtube.com/embed/TEpCzZyvN54",
    title: "Ghost of Tsushima Give It Your Review - Your Voice",
    duration: "3:39",
    author: "ACG",
    thumbnail: "https://i.ytimg.com/vi/TEpCzZyvN54/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLCt2h4zmJv6OAUtPBaUvRwz-ww5uQ"
  }, {
    url: "https://www.youtube.com/embed/JnYsIMugk1I",
    title: "Snowrunner - The Most Zen of Games - Mini Review",
    duration: "10:07",
    author: "ACG",
    thumbnail: "https://i.ytimg.com/vi/JnYsIMugk1I/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBXJZkEtZPlkFmOwLwabWTsPCd21g"
  }, {
    url: "https://www.youtube.com/embed/uyhuamBnrkc",
    title: "Bugs Bunny: Lost In Time (PS1) - Undue Review",
    duration: "14:03",
    author: "SuperDuck Videos",
    thumbnail: "https://i.ytimg.com/vi/uyhuamBnrkc/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLAU9wbDxd5vuMDRqOuwFuX89Z6tGw"
  }, {
    url: "https://www.youtube.com/embed/Vfb7HcbsfBM",
    title: "Star Wars: The Phantom Menace Video Game (PS1) - Undue Review",
    duration: "16:54",
    author: "SuperDuck Videos",
    thumbnail: "https://i.ytimg.com/vi/Vfb7HcbsfBM/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLDikrbgCLlaM45HqaGAizZlIWGcaQ"
  }, {
    url: "https://www.youtube.com/embed/vJQ8peMgAjg",
    title: "Goosebumps: Escape From Horrorland (PC) - Undue Review Halloween Special",
    duration: "14:55",
    author: "SuperDuck Videos",
    thumbnail: "https://i.ytimg.com/vi/vJQ8peMgAjg/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLCppWeu3J_jQeiOcb5Nxcqlgv3rCQ"
  }, {
    url: "https://www.youtube.com/embed/BszrgVr7w-w",
    title: "LittleBigPlanet Karting Review",
    duration: "2:36",
    author: "TGX",
    thumbnail: "https://i.ytimg.com/vi/BszrgVr7w-w/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLCfuKJBE-PEBOrTeI_MfmuZ7cpyRQ"
  }, {
    url: "https://www.youtube.com/embed/7n6Eb_CRq8",
    title: "BIOSHOCK INFINITE REVIEW",
    duration: "9:24",
    author: "TGX",
    thumbnail: "https://i.ytimg.com/vi/7n6Eb_CRq8M/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLCvtEA62_ee59ddXxQ_Vafl8VrwVA"
  }
];

const categories = ['FPS', 'RPG', 'Racing', 'Platformer', 'Strategy', 'RTS', 'Adventure', 'Puzzle', 'Party', 'Fighting']

db.Video.remove({}, (err, data) => {
  if (err) {
    console.error('error on create', err);
  } else {
    // for each product id:
    let seedVideos = [];
    for (var i = 1; i <= 100; i++) {
      function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
      }
      // choose a category
      let categoryIndex = getRandomInt(categories.length);
      // choose 0-4 videos
      for (var j = 0; j <= getRandomInt(5); j++) {
        let randomIndex = getRandomInt(videoData.length);
        // add random number of likes to video data
        // add random number of dislikes to video data
        let assignedVideo = Object.assign({}, videoData[randomIndex], { productId: i, likes: getRandomInt(100), dislikes: getRandomInt(100), category: categories[categoryIndex] });
        // add to array
        seedVideos.push(assignedVideo);
      }
    }
    // add array to db
    db.Video.create(seedVideos, (err, data) => {
      if (err) {
        console.error('error on create', err);
      } else {
        db.Video.find({}, (err, videos) => {
          if (err) {
            console.error('error with find', err);
          } else {
            console.log('Videos added to database', videos.length);
          }
        });
      }
    });
  }
});