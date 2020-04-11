const mongoose = require('mongoose');
const fs = require('fs');
const Bootcamp = require('./Models/BootCamp')


const importData = JSON.parse(fs
.readFileSync(`${__dirname}/Data/bootcamps.json`, 'utf-8') )



const importBootCamp = () => {
    Bootcamp.create(importData)
    process.exit();
}
const deleteBootCamp = () => {
    Bootcamp.deleteMany()
}

if(process.argv[2]==='-i'){
    importBootCamp()
}else if(process.argv[2]==='-d'){
    deleteBootCamp()
}