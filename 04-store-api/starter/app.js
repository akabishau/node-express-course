console.log('04 Store API')
const express = require('express')
const app = express()


// db connection
require('dotenv').config()


app.use(express.json())


// routes
app.get('/', (req, res) => {
    res.send('<h1>Store API</h1><a href="/api/v1/products">products route</a>')
})


// not found
const notFound = require('./middleware/not-found')
app.use(notFound)

const errorHandler = require('./middleware/error-handler')
app.use(errorHandler)


let port = process.env.PORT || 3000
const start = async () => {
    try {
        // connect to db
        app.listen(port, () => {
            console.log('Server is up on port ' + port)
        })
    } catch (error) {
        console.log(error)
    }
}

start()