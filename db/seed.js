const db = require('./index.js');

const videoData = [
  {
    url: 'https://www.youtube.com/embed/EELg2YeUdyQ',
    title: 'Fall Guys: Ultimate Knockout Review',
    duration: '6:03',
    author: 'IGN',
    thumbnail: 'https://video-carousel-thumbnails.s3-us-west-1.amazonaws.com/fallguys_thumbnail.webp',
  }, {
    url: 'https://www.youtube.com/embed/kXZItE5v5Bk',
    title: 'Skater XL Review',
    duration: '6:14',
    author: 'IGN',
    thumbnail: 'https://video-carousel-thumbnails.s3-us-west-1.amazonaws.com/skater_thumbnail.webp',
  }, {
    url: 'https://www.youtube.com/embed/zNDhCyF0T_A',
    title: 'Hellpoint Review',
    duration: '5:01',
    author: 'IGN',
    thumbnail: 'https://video-carousel-thumbnails.s3-us-west-1.amazonaws.com/hellpoint_thumbnail.webp',
  }, {
    url: 'https://www.youtube.com/embed/XElTCPgVSNo',
    title: 'Death Stranding Review',
    duration: '12:47',
    author: 'GameSpot',
    thumbnail: 'https://video-carousel-thumbnails.s3-us-west-1.amazonaws.com/deathstranding_thumbnail.webp',
  }, {
    url: 'https://www.youtube.com/embed/4B6t9U1pRok',
    title: 'The Outer Worlds Review',
    duration: '7:39',
    author: 'GameSpot',
    thumbnail: 'https://video-carousel-thumbnails.s3-us-west-1.amazonaws.com/outerworlds_thumbnail.webp',
  }, {
    url: 'https://www.youtube.com/embed/kIJ0kfjhuws',
    title: 'Star Wars Jedi: Fallen Order Review',
    duration: '5:15',
    author: 'GameSpot',
    thumbnail: 'https://video-carousel-thumbnails.s3-us-west-1.amazonaws.com/fallenorder_thumbnail.webp',
  }, {
    url: 'https://www.youtube.com/embed/vKXUQKkx7mo',
    title: 'Destroy All Humans Review "Buy, Wait for Sale, Rent, Never Touch?"',
    duration: '16:40',
    author: 'ACG',
    thumbnail: 'https://video-carousel-thumbnails.s3-us-west-1.amazonaws.com/destroyhumans_thumbnail.webp',
  }, {
    url: 'https://www.youtube.com/embed/TEpCzZyvN54',
    title: 'Ghost of Tsushima Give It Your Review - Your Voice',
    duration: '3:39',
    author: 'ACG',
    thumbnail: 'https://video-carousel-thumbnails.s3-us-west-1.amazonaws.com/tsushima_thumbnail.webp',
  }, {
    url: 'https://www.youtube.com/embed/JnYsIMugk1I',
    title: 'Snowrunner - The Most Zen of Games - Mini Review',
    duration: '10:07',
    author: 'ACG',
    thumbnail: 'https://video-carousel-thumbnails.s3-us-west-1.amazonaws.com/snowrunner_thumbnail.webp',
  }, {
    url: 'https://www.youtube.com/embed/uyhuamBnrkc',
    title: 'Bugs Bunny: Lost In Time (PS1) - Undue Review',
    duration: '14:03',
    author: 'SuperDuck Videos',
    thumbnail: 'https://video-carousel-thumbnails.s3-us-west-1.amazonaws.com/bugsbunny_thumbnail.webp',
  }, {
    url: 'https://www.youtube.com/embed/Vfb7HcbsfBM',
    title: 'Star Wars: The Phantom Menace Video Game (PS1) - Undue Review',
    duration: '16:54',
    author: 'SuperDuck Videos',
    thumbnail: 'https://video-carousel-thumbnails.s3-us-west-1.amazonaws.com/phantommenace_thumbnail.webp',
  }, {
    url: 'https://www.youtube.com/embed/vJQ8peMgAjg',
    title: 'Goosebumps: Escape From Horrorland (PC) - Undue Review Halloween Special',
    duration: '14:55',
    author: 'SuperDuck Videos',
    thumbnail: 'https://video-carousel-thumbnails.s3-us-west-1.amazonaws.com/goosebumps_thumbnail.webp',
  }, {
    url: 'https://www.youtube.com/embed/BszrgVr7w-w',
    title: 'LittleBigPlanet Karting Review',
    duration: '2:36',
    author: 'TGX',
    thumbnail: 'https://video-carousel-thumbnails.s3-us-west-1.amazonaws.com/lbpkarting_thumbnail.webp',
  }, {
    url: 'https://www.youtube.com/embed/7n6Eb_CRq8',
    title: 'BIOSHOCK INFINITE REVIEW',
    duration: '9:24',
    author: 'TGX',
    thumbnail: 'https://video-carousel-thumbnails.s3-us-west-1.amazonaws.com/bioshock_thumbnail.webp',
  },
];

const categories = ['FPS', 'RPG', 'Racing', 'Platformer', 'Strategy', 'RTS', 'Adventure', 'Puzzle', 'Party', 'Fighting'];

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function seedDB() {
  db.Video.remove({}, (removeErr) => {
    if (removeErr) {
      console.error('error on create', removeErr);
    } else {
      // for each product id:
      const seedVideos = [];
      for (let i = 1; i <= 100; i += 1) {
        // choose a category
        const categoryIndex = getRandomInt(categories.length);
        // choose 0-4 videos
        for (let j = 0; j <= getRandomInt(5) + 1; j += 1) {
          const randomIndex = getRandomInt(videoData.length);
          // add random number of likes to video data
          // add random number of dislikes to video data
          const assignedVideo = {
            ...videoData[randomIndex],
            productId: i,
            likes: getRandomInt(100),
            dislikes: getRandomInt(100),
            category: categories[categoryIndex],
          };
          // add to array
          console.log(assignedVideo);
          seedVideos.push(assignedVideo);
        }
      }
      // add array to db
      db.Video.create(seedVideos, (createErr) => {
        if (createErr) {
          console.error('error on create', createErr);
        } else {
          db.Video.find({}, (findErr, videos) => {
            if (findErr) {
              console.error('error with find', findErr);
            } else {
              console.log('Videos added to database', videos.length);
            }
          });
        }
      });
    }
  });
}

seedDB();
