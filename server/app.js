const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

// internal import
const centerApi = require('./api/center');

// read environment variables
const envResult = dotenv.config();
if (envResult.error) {
  throw result.error
}

// connect to database
mongoose.connect(process.env.DB_CRIDENTIALS, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: process.env.DB_NAME
});

// middleware
app.use(express.static(path.join(__dirname, '/dist')));
app.use('/api/centers', centerApi);

// server index.html
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});


// listen to port
app.listen((process.env.PORT || port), _ => {
  console.log('Server running on ' + port);
});