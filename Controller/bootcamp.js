const bootCamp = require('../Models/BootCamp');

exports.getBootcamps = (req, res, next) => {
    res.status(200).send({ Success: true, data: { process: 'processing...' } })
};
exports.getBootcamp = (req, res, next) => {
    const id = req.params.id;
    res.status(200).send({ Success: true, data: { course: id } })

};
exports.createBootCamp = (req, res, next) => {
    // console.log('hello', req.body);
    bootCamp.create(req.body)
        .then((result) => { res.status(201).send({ Success: true, response: result }); })
        .catch((e) => { res.send({ Success: false, error: e }) })
};

exports.updateBootCamp = (req, res, next) => {
    res.satus(200).send({ Success: true, response: 'updated successfully.' });
};
exports.deleteBootCamp = (req, res, next) => {
    res.status(200).send('Deleted SuccessFully');
};