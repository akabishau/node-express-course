console.log('04 Store API')
const express = require('express')
const app = express()

require('express-async-errors')


const connectDB = require('./db/connect')
require('dotenv').config()


app.use(express.json())


// routes
app.get('/', (req, res) => {
    res.send('<h1>Store API</h1><a href="/api/v1/products">products route</a>')
})

const productsRouter = require('./routes/products')
app.use('/api/v1/products', productsRouter)


// not found
const notFound = require('./middleware/not-found')
app.use(notFound)

const errorHandler = require('./middleware/error-handler')
app.use(errorHandler)


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