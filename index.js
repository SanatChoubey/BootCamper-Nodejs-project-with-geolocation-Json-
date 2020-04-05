const express = require('express');
const cors = require('cors')
const dotenv = require('dotenv')
const morgan = require('morgan')
const app = express();
const bootCampRoute = require('./Route/bootcamp')

    dotenv.config('./.env')
app.use(cors())
app.use(morgan('dev'))

app.use('/api/v1/bootcamp',bootCampRoute);

const PORT = process.env.PORT

app.listen(PORT)