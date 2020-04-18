const mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please Enter Name'],

    },
    email: {
        type: String,
        require : true,
        unique: true
        
    },
    password: {
        type: String,
        required: true
    }
})
UserSchema.pre('save', async function(next){
    var salt = await bcrypt.genSaltSync(10);
    this.password=await bcrypt.hash(this.password,salt)
    next()
})
UserSchema.methods.getSignJwtToken = function(){
    return  jwt.sign({ id: this._id }, 'shhhhh',{
        expiresIn: "10h"
    });
}
UserSchema.methods.checkPasswordMatch= async function(userPassword){
    return await bcrypt.compare(userPassword, this.password)
}
module.exports = mongoose.model('User', UserSchema);
