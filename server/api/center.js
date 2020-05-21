const express = require('express');
const router = express.Router();

const CenterController = require('../controller/center');


router.get('/', CenterController.getCenters);

router.get('/:centerId', CenterController.getCenter);

router.post('/', CenterController.postCenter);


module.exports = router;