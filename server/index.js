const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('../database/index');
const port = process.env.PORT || 8000;

const server = express();
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

var allowCORS = (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
};

server.use(allowCORS);

// server.use(express.static(path.join(__dirname, '/../client/dist')));
server.use('/', express.static('./client/dist/'));
server.use(/\/\d+\//, express.static('./client/dist/'));

server.listen(port, () => { console.log(`listening to ${port}`); });

// GET request to fetch a new song data from db
server.get('/api/jane/player/:id', (req, res) => {
  const { id } = req.params;
  db.songs.findByPk(id)
    .then((data) => { res.send(data).status(200); })
    .catch((error) => { res.send(error).status(500); });
});

module.exports = server;
