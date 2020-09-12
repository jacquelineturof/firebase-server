// Cors
const cors = ((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', 
        'Origin, X-Requested-With, Content-Type, Accept, x-auth')
    res.setHeader('Access-Control-Allow-Methods', 
        'GET, POST, PATCH, DELETE, OPTIONS, PUT')
    next()
})

module.exports = cors