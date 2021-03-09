const router = require('express').Router();
let Campaign = require('../models/campaign.model');

router.route('/').get((req, res) => {
  Campaign.find() //Returns Campaigns as JSON
    .then(campName => res.json(campName))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/add').post((req, res) => {
  const cName = req.body.cName;

  const newCamp = new Campaign({cName});

  newCamp.save()
    .then(() => res.json('Campaign added!'))
    .catch(err => res.status(400).json('ERROR: ' + err));
});

module.exports = router;