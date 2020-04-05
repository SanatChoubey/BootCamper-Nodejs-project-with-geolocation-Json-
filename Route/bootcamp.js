const express = require('express')
const {
    getBootcamp,
    getBootcamps,
    createBootCamp,
    deleteBootCamp,
    updateBootCamp
} = require('../Controller/bootcamp')
const router = express.Router()

router
    .route('/')
    .get(getBootcamps)
    .post(createBootCamp)

router
    .route('/:id')
    .get(getBootcamp)
    .put(updateBootCamp)
    .delete(deleteBootCamp)    

module.exports = router;
    