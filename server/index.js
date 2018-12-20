const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/index');

const server = express();
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

server.use(express.static(__dirname + '/../client/dist'));

server.listen(3000, () => { console.log('listening to port 3000') });

server.post('/api/jane/player/', (req, res) => {
  db.songs.create({ 
    title: req.body.title
  })
  .then(() => { console.log('post success') })
  .catch(error => { console.error(error) });
});

module.exports = server;