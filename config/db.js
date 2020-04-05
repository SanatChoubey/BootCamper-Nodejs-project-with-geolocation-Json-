const mongoose = require('mongoose')
const chalk = require('chalk')
const mongoDbfunct = ()=>{
    mongoose
    .connect(
        process.env.MONGDB_URL,
        {useNewUrlParser: true, useUnifiedTopology: true}
        ).then((res)=>{console.log(res)}).catch(e=>{console.log(chalk.pink(e))})
}


module.exports = mongoDbfunct