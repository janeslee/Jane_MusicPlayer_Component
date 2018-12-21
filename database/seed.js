const faker = require('faker');
const db = require('./index');

//alternate between 5 songs to be played for each data, but each data will have diff. wave form
var randomSongs = [
  'https://s3-us-west-1.amazonaws.com/democrituscloud/Despacito.mp3',
  'https://s3-us-west-1.amazonaws.com/democrituscloud/Pokemon_Theme_Song.mp3',
  'https://s3-us-west-1.amazonaws.com/democrituscloud/RASPUTIN_-_Funk_Overload.mp3',
  'https://s3-us-west-1.amazonaws.com/democrituscloud/bensound-dubstep.mp3',
  'https://s3-us-west-1.amazonaws.com/democrituscloud/bensound-jazzyfrenchy.mp3'
];

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
        'max': 300
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

//create a function to generate random wave data in string form, later to be split into an array
waveGenerator = () => {
  var waves = '';
  for (var i = 0; i <= 1000; i++) {
    var wave = Math.floor((Math.random() * 120));
    waves += `${wave},`;
  }
  return waves;
};

//create an entry for each item in the db
for (var i = 0; i <= 100; i++) {    
  db.songs.create({
    title: randomTitles[i],
    artist: randomArtists[i],
    album: randomAlbums[i],
    released: randomReleased[i],
    duration: randomDuration[i],
    wave: waveGenerator(),
    image: randomImage[i],
    song_url: randomSongs[Math.floor(Math.random() * 5)]
  });
}