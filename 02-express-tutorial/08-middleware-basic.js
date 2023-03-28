const express = require('express')
const app = express()

// middleware function - express functionality
const logger = (req, res, next) => {
    const method = req.method
    const url = req.url
    const time = new Date().getFullYear()
    console.log(method, url, time)
    next()
}


app.get('/', logger, (req, res) => {
    res.send('Home Page')
})

app.get('/about', logger, (req, res) => {
    res.send('About')
})


const port = 8000
app.listen(port, () => {
    console.log(`Server is listening on port ${port}....`)
})