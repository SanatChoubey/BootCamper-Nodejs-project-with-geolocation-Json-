exports.getBootcamps = (req, res, next) => {
    res.status(200).send({Success:true, data:{process:'processing...'}})
}
exports.getBootcamp = (req, res, next) => {
    const id = req.params.id
    res.status(200).send({Success: true, data: {course:id}})

}
exports.createBootCamp = (req, res, next) => {
    res.status(200).send({Success:true, response: 'successfuly created.'})
}

exports.updateBootCamp = (req, res, next)=> {
    res.satus(200).send({Success:true, response:'updated successfully.'})
}
exports.deleteBootCamp = (req, res, next) => {
    res.status(200).send('Deleted SuccessFully')
}

