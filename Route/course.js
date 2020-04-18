const express = require('express');
const { getCourses, createCourse} = require('../Controller/course')
const router = express.Router();

router
    .route('/')
    .get(getCourses)
    .post(createCourse)

module.exports= router;
