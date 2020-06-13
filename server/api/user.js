const express = require('express');
const router = express.Router();

const UserController = require('../controller/user');

router.post('/', UserController.postUser);

router.post('/verification', UserController.verifyUser);


module.exports = router;