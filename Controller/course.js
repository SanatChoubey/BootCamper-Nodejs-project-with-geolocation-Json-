const Course = require('../Models/Courses')
exports.getCourses = (req, res, next)=> {
    Course
        .find()
        .populate('bootcamp', 'name careers')
        .then((data)=>{res.status(200).send(data)})
        .catch((e)=>{next(new Error(e))})
}
exports.createCourse = (req,res, next) => {
    Course
        .create(req.body)
        
        .then(data=>res.status(200).send(data))
        .catch(e=>{next(new Error( e,400))})
}