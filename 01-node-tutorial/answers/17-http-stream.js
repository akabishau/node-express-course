const http = require('http')
const fs = require('fs')

http.createServer((req, res) => {
    const fileStream = fs.createReadStream('./content/bigfile.txt', 'utf8')
    fileStream.on('open', () => {
        fileStream.pipe(res)
    })
    fileStream.on('error', (err) => {
        res.end(err)
    })
}).listen(3000)


// example of reading big file by chunks