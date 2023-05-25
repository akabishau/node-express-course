function consoleLog (req, res, next) {
    console.log('Request: ', req.url, req.method, new Date())
    next()
}

module.exports = consoleLog