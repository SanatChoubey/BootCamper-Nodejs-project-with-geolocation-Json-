
const fs = require('fs');
const Bootcamp = require('./Models/BootCamp')
const mongoose = require('mongoose')

mongoose
.connect(
    'mongodb+srv://sanat1:sanatc123@cluster0-alg2n.mongodb.net/Bootcamps?retryWrites=true&w=majority',
    {useNewUrlParser: true, useUnifiedTopology: true}
    ).then((res)=>{console.log(res)}).catch(e=>{console.log(chalk.pink(e))})

const importData = JSON.parse(fs
.readFileSync(`${__dirname}/Data/bootcamps.json`, 'utf-8') )



const importBootCamp = () => {
    // console.log(importData)
    Bootcamp
    .create(importData)
    .then((res)=>{console.log(res)})
    .catch((e)=>{console.log(e)})
    
}
const deleteBootCamp = () => {
    Bootcamp.deleteMany()
}

if(process.argv[2]==='-i'){
    console.log('importing data')
    importBootCamp()
}else if(process.argv[2]==='-d'){
    deleteBootCamp()
}