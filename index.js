const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const morgan = require('morgan');

const mongoDbfunct = require('./config/db');
const app = express();

const bootCampRoute = require('./Route/bootcamp');

dotenv.config('./.env');
mongoDbfunct();
app.use(cors());
app.use(morgan('dev'));
app.use(express.json())

app.use('/api/v1/bootcamp', bootCampRoute);

const PORT = process.env.PORT;

const server = app.listen(PORT);

process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`.red);
    // Close server & exit process
    server.close(() => process.exit(1));
});