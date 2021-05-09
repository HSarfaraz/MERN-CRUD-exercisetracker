const router = require('express').Router();
let Exercise = require('../models/exercise.model');

//Route for getting all the exercises
router.route('/').get((req, res) => {
  Exercise.find()
    .then(exercises => res.json(exercises))
    .catch(err => res.status(400).json('Error:'+ err))
})

// Route for adding the Exercise
router.route('/add').post((req, res) => {
  
  const username    = req.body.username;
  const description = req.body.description;
  const duration    = req.body.duration;
  const date        = req.body.date;

  const newExercise = new Exercise({
    username,   
    description,
    duration,   
    date       
  })

  newExercise.save()
    .then(()=> res.json('Exercise Added!'))
    .catch(err => res.status(400).json('Error'+err));
});


// Route for getting the specific Exercise using Id
router.route('/:id').get((req, res) => {
  Exercise.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json('Error:'+err))
});


//Route for deleting the specific Exercise using Id
router.route('/:id').delete((req, res) => {
  Exercise.findByIdAndDelete(req.params.id)
    .then(exercise => res.json('Exercise Deleted'))
    .catch(err => res.status(400).json('Error:'+ err))
});

// Route for Updating the specific Exercise using Id
router.route('/update/:id').post((req, res) => {
  Exercise.findById(req.params.id)
    .then(exercise => {
      exercise.username     = req.body.username;
      exercise.description  = req.body.description;
      exercise.duration     = Number(req.body.duration);
      exercise.date         = Date.parse(req.body.date);

      exercise.save()
        .then(()=> res.json('Exercise updated!'))
        .catch(err => res.status(400).json('Error:'+err));
    })
    .catch(err => res.status(400).json('Error:'+err))
});

module.exports = router;