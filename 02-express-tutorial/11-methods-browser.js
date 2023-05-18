const express = require('express')
const app = express()

app.use(express.static('./methods-public')) // access to the static files
app.use(express.urlencoded({ extended: false })) // parse the data from post request body


// browse can only send get request and post as form data
// js can send any type of request (get, post, put, delete, patch)

// POST request from Browser
app.post('/form', (req, res) => {
    // console.log(req.body) // info from the form
    const name = req.body.name
    if (name) {
        return res.status(200).send(`Welcome ${name}`)
    }
    res.status(401).send('Please provide credentials')
})


app.listen(8000, () => {
    console.log('Server is listening on port 8000....')
})


// reading submitted data from the form
// welcome the user with the name