const authorize = (req, res, next) => {
    console.log('authorizing...')
    console.log(req.query)
    const { user } = req.query

    // logic to authorize user to see speific routes
    if (user === 'aleksey') {
        req.user = { name: 'aleksey', id: 1 } // middleware can modify the request object
        next() // if don't call next, the request will hang
    } else {
        console.log('Unauthorized')
        res.status(401).send('Unauthorized')
    }
}

module.exports = authorize