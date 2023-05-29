const express = require('express')
const app = express()

// configuration
require('dotenv').config()
const port = process.env.PORT || 3000
app.use(express.json())


// routes
const mainRouter = require('./routes/main')
app.use('/api/v1', mainRouter)



app.listen(port, () => {
    console.log(`Running on port ${port}`)
})