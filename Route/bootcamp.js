const express = require('express')
const {
    getBootcamp,
    getBootcamps,
    createBootCamp,
    deleteBootCamp,
    updateBootCamp
} = require('../Controller/bootcamp');
const { protect } = require('../Middleware/auth')
const router = express.Router();

router
    .route('/')
    .get(protect,getBootcamps)
    .post(createBootCamp);

router
    .route('/:id')
    .get(getBootcamp)
    .put(updateBootCamp)
    .delete(deleteBootCamp);

module.exports = router;