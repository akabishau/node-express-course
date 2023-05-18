const express = require('express')
const app = express()


const logger = require('./middleware/logger')
const authorize = require('./middleware/authentication')

app.use([logger]) // for all routes
app.use('/api', [authorize]) // only for /api

app.get('/', (req, res) => {
    res.send('Home Page')
})

app.get('/about', (req, res) => {
    res.send('About')
})

app.get('/api/products', (req, res) => {
    console.log(req.user)
    res.send('Products to display')
})


app.get('/api/items', (req, res) => {
    console.log(req.user)
    res.send('Items to display')
})

const port = 8000
app.listen(port, () => {
    console.log(`Server is listening on port ${port}....`)
})
