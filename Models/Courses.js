const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please Add Title'],
        unique: true,
    },
    description: {
        type: String,
        required: true,

    },
    weeks: {
        type: String,
        required: true,

    },
    tuition: {
        type: String,
        required: true,

    },
    minimumSkill: {
        type: String,
        required: true,
        enum : ['begineer', 'Intermediate', 'Advance']
    },
    scholarShipAvalable: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    bootcamp: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'BootCamp',
        required: true
    }

})
module.exports = mongoose.model('Courses', CourseSchema)