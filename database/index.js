const Sequelize = require('sequelize');

const db = new Sequelize('soundcloud', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

db.authenticate()
  .then(() => { console.log('connected to database'); })
  .catch((error) => { console.error(error); });

const songs = db.define(
  'songs',
  {
    title: { type: Sequelize.STRING },
    artist: { type: Sequelize.STRING },
    album: { type: Sequelize.STRING },
    released: { type: Sequelize.DATE },
    duration: { type: Sequelize.INTEGER },
    wave: { type: Sequelize.TEXT },
    image: { type: Sequelize.STRING },
    song_url: { type: Sequelize.STRING },
  },
  {
    timestamps: false,
  },
);

db.sync()
  .then(() => { console.log('synced with mysql database'); })
  .catch((error) => { console.error(error); });

module.exports = { db, songs };
