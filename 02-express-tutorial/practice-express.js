const express = require('express')
const app = express()

const consoleLog = require('./middleware/practice-middleware')
app.use(consoleLog)


app.use(express.static('./new-public'))

app.get('/sample', (req, res) => {
    res.send('This is working')
})


app.all('*', (req, res) => {
    res.status(404).send('resource not found')
})


const port = 3000
app.listen(port, () => {
    console.log(`Server is listening on port ${port}....`)
})