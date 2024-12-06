
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workoutSchema = new Schema({

    title: {
        type: String, // Correct capitalization of String
        required: true
    },
    reps: {
        type: Number, // Correct capitalization of Number
        required: true
    },
    load: {
        type: Number, // Correct capitalization of Number
        required: true
    }
}, { timestamps: true }); // Proper syntax for timestamps


module.exports = mongoose.model('Workout', workoutSchema);
