const faker = require('faker');
const db = require('./index');

//have one song to be played for every song ID but every song ID will have different wave form



//seed db with randomly generated data
var randomTitles = [];
var randomArtists = [];
var randomAlbums = [];
var randomReleased = [];
var randomDuration = [];
var randomImage = [];

//function to randomize data for each column in db
dataGenerator = (type, array) => {
  var randomData;

  for (var i = 0; i <= 100; i++) {
    if (type === 'titles' || type === 'albums') {
      randomData = faker.lorem.word();
    }
    if (type === 'artists') {
      randomData = faker.name.findName();
    }
    if (type === 'released') {
      randomData = faker.date.past();
    }
    if (type === 'duration') {
      randomData = faker.random.number({
        'min': 100,
        'max': 400
      });
    }
    if (type === 'image') {
      randomData = faker.image.abstract();
    }
    array.push(randomData);
  }
};

dataGenerator('titles', randomTitles);
dataGenerator('albums', randomAlbums);
dataGenerator('artists', randomArtists);
dataGenerator('released', randomReleased);
dataGenerator('duration', randomDuration);
dataGenerator('image', randomImage);

//create a function to generate random wave data



//create an entry for each item in the db
for (var i = 0; i <= 100; i++) {    
  db.songs.create({
    title: randomTitles[i],
    artist: randomArtists[i],
    album: randomAlbums[i],
    released: randomReleased[i],
    duration: randomDuration[i],
    image: randomImage[i]
    //song_url: should point to the same url for every data
  });
}