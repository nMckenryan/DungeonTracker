const router = require('express').Router();
let Session = require('../models/session.model');

router.route('/').get((req, res) => {
  Session.find()
    .then(sessions => res.json(sessions))
    .catch(err => res.status(400).json('Error: ' + err));
});

//HANDLE POST REQUESTS
router.route('/add').post((req, res) => {
    const adventure = req.body.adventure;
    const character = req.body.character;
    const sesLog = req.body.sesLog;
    const date = Date.parse(req.body.date);
  
    const newSession = new Session({
      adventure,
      character,
      sesLog,
      date,
    });
  
    newSession.save()
    .then(() => res.json('Session added!'))
    .catch(err => res.status(400).json('Error: ' + err));
  });
  

module.exports = router;
