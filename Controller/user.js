
const User = require('../Models/User');

exports.register = (req,res,next)=>{
    User
        .create(req.body)
        .then((user)=>{
            const token =user.getSignJwtToken()
            res.send({
            success: true,
            user,
            token
        })})
        .catch((e)=>{
            next(e)
        })
}
exports.login =  (req,res,next) =>{
    const {email,password} = req.body;
    User.findOne({email}).then(async (user) =>{
        const isMatch = await user.checkPasswordMatch(password)
        if(isMatch){
           const token = user.getSignJwtToken()
            res.send({
                success:true,
                token
            })
        }else{
            next('please match crediantial')
        }
    }).catch(e=>{
        next('please match password')
    })
}