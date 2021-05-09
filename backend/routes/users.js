const router = require('express').Router();
let User = require('../models/user.model');

//Router for getting users lists
router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err  => res.status(400).json('Error:'+err))
})

//Router for Adding a new User
router.route('/add').post((req, res) => {
  const username = req.body.username;
  const newUser = new User({username});

  newUser.save()
    .then( ()  => ers.json('User Added'))
    .catch(err => res.status(400).json('Error:'+err));
})

module.exports = router;