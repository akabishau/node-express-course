const http = require('http')
const server = http.createServer()

// Using Event Emitter API - doc http.Server for full list
server.on('request', (req, res) => {
    res.end('welcome')
})

server.listen(3000)
