const express = require('express')
const app = express()

// configuration
require('express-async-errors')
app.use(express.json())


// routes
app.get('/', (req, res) => {
    res.send('<h1>Store API</h1><a href="/api/v1/products">products route</a>')
})

const productsRouter = require('./routes/products')
app.use('/api/v1/products', productsRouter)


// errors
const notFound = require('./middleware/not-found')
app.use(notFound)

const errorHandler = require('./middleware/error-handler')
app.use(errorHandler)


// database connection/configuration
require('dotenv').config()
const connectDB = require('./db/connect')
let port = process.env.PORT || 3000
const start = async () => {
    try {
        await connectDB(process.env.MONGODB_URI)
        app.listen(port, () => {
            console.log('Server is up on port ' + port)
        })
    } catch (error) {
        console.log(error)
    }
}

start()