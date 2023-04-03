//console.log('Task Manager App')
const express = require('express')
const app = express()

// middleware
app.use(express.static('./public'))
app.use(express.json())

// routes
const tasksRouter = require('./routes/tasks')
app.use('/api/v1/tasks', tasksRouter)


let port = 3000
app.listen(port, () => {
    console.log('Server is up on port ' + port)
})