//console.log('Task Manager App')
const express = require('express')
const app = express()

const connectDB = require('./db/connect')
require('dotenv').config()

// middleware
app.use(express.static('./public'))
app.use(express.json())

// routes
const tasksRouter = require('./routes/tasks')
app.use('/api/v1/tasks', tasksRouter)


// only start the server if connection to DB is successful
let port = 3000
const start = async () => {
    try {
        await connectDB(process.env.MONGODB_URL)
        app.listen(port, () => {
            console.log('Server is up on port ' + port)
        })
    } catch (error) {
        console.log(error)
    }
}

start()