const express = require('express');
const router = express.Router();
const Workout  = require("../Models/WorkoutModel")
const { createWorkout } = require('../Controllers/workoutController');
const { getWorkouts, singleWorkout,deleteWorkout,updateWorkouts } = require('../Controllers/workoutController');
router.get('/', getWorkouts)
router.get('/:id', singleWorkout)

router.post('/',createWorkout)


router.delete('/:id',deleteWorkout )

router.patch('/:id',updateWorkouts )

module.exports = router;