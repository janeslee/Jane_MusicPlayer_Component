const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('../database/index');

const server = express();
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

// server.use(express.static(path.join(__dirname, '/../client/dist')));
server.use('/', express.static('./client/dist/'));
server.use(/\/\d+\//, express.static('./client/dist/'));

server.listen(5000, () => { console.log('listening to port 5000'); });

// GET request to fetch a new song data from db
// let id;
server.get('/api/jane/player/:id', (req, res) => {
  const { id } = req.params;
  // res.sendFile(path.join(__dirname, '/../client/dist/index.html'));
  db.songs.findByPk(id)
    .then((data) => { res.send(data).status(200); })
    .catch((error) => { res.send(error).status(500); });
});

module.exports = server;
