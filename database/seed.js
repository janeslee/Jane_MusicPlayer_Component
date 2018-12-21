const faker = require('faker');
const db = require('./index');

//have one song to be played for the first page



//seed db with randomly generated data
var randomTitles = [];
var randomArtists = [];
var randomAlbums = [];
var randomReleased = [];
var randomDuration = [];

//function to randomize data for each column in db
dataGenerator = (type, array) => {
  for (var i = 0; i <= 100; i++) {
    if (type === "titles" || type === "albums") {
      var randomData = faker.lorem.word();
    }
    if (type === "artists") {
      var randomData = faker.name.findName();
    }
    if (type === "released") {
      var randomData = faker.date.past();
    }
    if (type === "duration") {
      var randomData = faker.random.number({
        'min': 100,
        'max': 400
      });
    }
    array.push(randomData);
  }
};

dataGenerator('titles', randomTitles);
dataGenerator('albums', randomAlbums);
dataGenerator('artists', randomArtists);
dataGenerator('released', randomReleased);
dataGenerator('duration', randomDuration);

//create an entry for each item in the db
for (var i = 0; i <= 100; i++) {    
  db.songs.create({
    title: randomTitles[i],
    artist: randomArtists[i],
    album: randomAlbums[i],
    released: randomReleased[i],
    duration: randomDuration[i]
  });
}