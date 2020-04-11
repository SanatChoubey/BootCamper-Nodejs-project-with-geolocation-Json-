const bootCamp = require('../Models/BootCamp');
const ErrorHandler = require('../utils/errorClass')
exports.getBootcamps = (req, res, next) => {
    bootCamp
        .find()
        .then((data) => {
            res.status(200).send({ BootCampsList: data })
        }).catch(e => res.satus(400).send({ error: e }))
        // res.status(200).send({ Success: true, data: { process: 'processing...' } })
};
exports.getBootcamp = (req, res, next) => {
    const id = req.params.id;
    bootCamp
        .findById(id)
        .then(result => res.status(200).send({ success: true, data: result }))
        .catch(e => next(new ErrorHandler('new BOOtCamp ID not found',404)));
    // res.status(200).send({ Success: true, data: { course: id } })

};
exports.createBootCamp = (req, res, next) => {
    // console.log('hello', req.body);
    bootCamp
        .create(req.body)
        .then((result) => { res.status(201).send({ Success: true, response: result }); })
        .catch((e) => { next(new ErrorHandler(e,404)) })
};

exports.updateBootCamp = (req, res, next) => {
    console.log(req.params.id, req.body)
    bootCamp
    .findByIdAndUpdate(req.params.id, req.body,{
        new:true,
    })
    .then((data)=>{res.status(200).json({data:data})})
    .catch(e=>{next(ErrorHandler(e,404))})
    // res.status(200).send({ Success: true, response: 'updated successfully.' });
};
exports.deleteBootCamp = (req, res, next) => {
    bootCamp
    .findByIdAndDelete(req.params.id, req.body)
    .then((data)=>{res.status(200).json({data:data})})
    .catch(e=>{next(ErrorHandler(e,404))})
};