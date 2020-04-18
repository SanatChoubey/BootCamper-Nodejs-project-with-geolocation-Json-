module.exports= (error, req, res, next)=> {
    res.status(error.statusCode||500).json({
        success: false,
        taketime: 1,
        error: error.message||'server Error'
    })
}