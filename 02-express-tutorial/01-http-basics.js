const http = require('http')

const server = http.createServer((req, res) => {
    console.log(req.url)
    // res.writeHead(200, { 'Content-Type': 'text/html' })
    // res.write('<h1>Home Page</h1>')
    // res.end() // always end the response


    const url = req.url

    if (url === '/') {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write('<h1>home page</h1>')
        res.end()
      } else if (url === '/about') {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write('<h1>about page</h1>')
        res.end()
      } else {
        res.writeHead(404, { 'content-type': 'text/html' })
        res.write('<h1>page not found</h1>')
        res.end()
      }
    
})

server.listen(8000)