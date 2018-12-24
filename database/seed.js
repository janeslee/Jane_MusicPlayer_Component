const faker = require('faker');
const db = require('./index');

// alternate between 5 songs to be played for each data, but each data will have diff. wave form
const randomSongs = [
  'https://s3-us-west-1.amazonaws.com/democrituscloud/Despacito.mp3',
  'https://s3-us-west-1.amazonaws.com/democrituscloud/Pokemon_Theme_Song.mp3',
  'https://s3-us-west-1.amazonaws.com/democrituscloud/RASPUTIN_-_Funk_Overload.mp3',
  'https://s3-us-west-1.amazonaws.com/democrituscloud/bensound-dubstep.mp3',
  'https://s3-us-west-1.amazonaws.com/democrituscloud/bensound-jazzyfrenchy.mp3',
];

// create a function to generate random wave data in string form, later to be split into an array
const waveGenerator = () => {
  let waves = '';
  for (let i = 0; i <= 1000; i += 1) {
    const wave = Math.floor((Math.random() * 120));
    waves += `${wave},`;
  }
  return waves;
};

// create an entry for each item in the db
for (let i = 0; i <= 100; i += 1) {
  db.songs.create({
    title: faker.lorem.word(),
    artist: faker.name.findName(),
    album: faker.lorem.word(),
    released: faker.date.past(),
    duration: faker.random.number({ min: 100, max: 300 }),
    wave: waveGenerator(),
    image: faker.image.abstract(),
    song_url: randomSongs[Math.floor(Math.random() * 5)],
  });
}
