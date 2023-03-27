const express = require('express')
const path = require('path')
const app = express()

// setup static resources
app.use(express.static('./public'))

app.get('/', (req, res) => {
    console.log('user hit the resource')
    res.sendFile(path.resolve(__dirname, './navbar-app.html'))

})


app.all('*', (req, res) => {
    res.status(404).send('<h1>resource not found</h1>')
})


app.listen(8000, () => {
    console.log('server is listening on port 8000...')
})