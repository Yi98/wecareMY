const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cloudinary = require('cloudinary');
const cors = require('cors');
const app = express();
const port = 3000;

// internal import
const centerApi = require('./api/center');

// read environment variables
const envResult = dotenv.config();
if (envResult.error) {
  throw result.error;
}

// connect to database
mongoose.connect(process.env.DB_CRIDENTIALS, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: process.env.DB_NAME
});

// configure cors for trusted domain only
var whitelist = [process.env.WHITELIST_DOMAIN_1, process.env.WHITELIST_DOMAIN_2, process.env.WHITELIST_DOMAIN_3];

var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

// project middleware
app.use(cors());
app.use(express.static(path.join(__dirname, '/dist')));
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// api middleware
app.use('/api/centers', centerApi);

// server index.html
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// redirect all paths to index.html;
app.use('*', (req, res) => {
  res.redirect('/');
});

// listen to port
app.listen((process.env.PORT || port), _ => {
  console.log('Server running on ' + port);
});
