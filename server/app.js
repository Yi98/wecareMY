const express = require('express');
const path = require('path');
const app = express();

const port = 3000;

app.use(express.static(path.join(__dirname, '/dist')));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen((process.env.PORT || port), _ => {
  console.log('Server running on ' + port);
});