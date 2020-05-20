const Center = require('../models/Center');

exports.getCenters = (req, res) => {
  Center.find({})
    .exec()
    .then(centers => {
      if (!centers) {
        return res.status(404).json({ message: 'Centers not found' })
      }

      res.status(200).json({ centers });
    })
    .catch(err => {
      res.status(500).json({
        message: 'Failed to get centers',
        err
      })
    })
};

exports.getCenter = (req, res) => {
  Center.findById({ _id: req.params.id })
    .exec()
    .then(center => {
      if (!center) {
        return res.status(404).json({ message: 'Center not found' })
      }
      res.status(200).json({ center });
    })
    .catch(err => {
      res.status(500).json({
        message: `Failed to get center ${req.params.id}`,
        err
      })
    })
};

exports.postCenter = (req, res) => {
  Center.findOne({ name: req.body.name })
    .then(center => {
      if (center) {
        return res.status(500).json({
          message: 'Center already existed',
          existing: center
        });
      }
      return newCenter.save();
    })
    .then(center => {
      res.status(201).json({
        message: 'New center was created',
        newCenter: center
      })
    })
    .catch(err => {
      res.status(500).json({
        message: 'Failed to add center',
        err
      });
    })
};

