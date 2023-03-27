const express = require('express')
const app = express()

app.listen(3000, () => {
    console.log('Server is listening on port 3000....')
})

app.use(express.static('./new-public'))

app.get('/sample', (req, res) => {
    res.send('This is working')
})


app.all('*', (req, res) => {
    res.status(404).send('resource not found')
})