const express = require('express');
const router = express.Router();
const Workout  = require("../Models/WorkoutModel")
const { createWorkout } = require('../Controllers/workoutController');
const { getWorkouts, singleWorkout } = require('../Controllers/workoutController');
router.get('/', getWorkouts)
router.get('/:id', singleWorkout)

router.post('/',createWorkout)


router.delete('/:id', (req, res) => {
    res.json({
        message: "Delete a workout",
        id: req.params.id
    });
}
)

router.patch('/:id', (req, res) => {
    res.json({
        message: "Update a workout",
        id: req.params.id
    });
}
)

module.exports = router;