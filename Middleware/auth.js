const jwt = require('jsonwebtoken');
const User = require('../Models/User');
const ErrorHandler = require('../utils/errorClass')
exports.protect =  (req,res,next)=>{
    console.log('yo',req.headers.authorization)
        console.log('debug')
        try{
            const decode = jwt.verify(req.headers.authorization, 'shhhhh')
            console.log('hiih',decode)
            User.findById(decode.id).then((user)=>{
                req.user =  user
                console.log('hel',user)
                next()
            }).catch(e=>{
                console.log('bruh')
                next(new ErrorHandler('abc',400))
            })
        }catch(e){
            next(new ErrorHandler('abc',400))
        }
        
        
        
        

   
        
    
}   