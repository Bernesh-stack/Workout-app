const mongoose = require('mongoose');

const workoutSchema = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    reps:{
        type:Number,
        required: true
    },
    load:{
        type:Number,
        required: true
    }
},{timestamp: true});

module.exports = mongoose.model('Workout', workoutSchema);
