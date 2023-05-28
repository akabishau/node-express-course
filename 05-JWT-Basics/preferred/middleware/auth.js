const jwt = require('jsonwebtoken')

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization

    if (!authHeader || !authHeader.startsWith('Bearer')) {
        res.status(401).json({
            status: 'failed',
            message: 'unauthorized'
        })
        // no next() to stop here
    }
    
    // get the token value
    const token = authHeader.split(' ')[1]
    
    // validate token
    try {
        const decoded = jwt.verify(token, process.env.SECRET)
        const { username } = decoded
        req.user = username
        next() // to go to the hello controller
    } catch (error) {
        res.status(500).json({
            status: 'failed',
            message: 'Invalid JWT'
        })
    }
}


module.exports = { authMiddleware }