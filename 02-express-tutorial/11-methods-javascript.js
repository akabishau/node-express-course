const express = require('express')
const app = express()

app.use(express.static('./methods-public')) // access to the static files
// js can send any type of request (get, post, put, delete, patch)

const { people } = require('./data') // people is an array of objects


// javascript.html (static file) fetches from this endpoint when page loads
app.get('/api/people', (req, res) => {
    res.status(200).json({ success: true, data: people }) // response for the fetch request
})


app.use(express.json()) // parse the data from post request body (can read body below)
// javascript.html (static file) sends post request to this endpoint
// endpoint returns "error" object or person object
app.post('/api/people', (req, res) => {
    console.log(req.body)
    const name = req.body.name
    if (!name) {
        return res.status(400).json({ success: false, msg: 'please provide name value' })
    }
    res.status(201).json({ success: true, person: name })
})


// PUT route handler
//api/people/1 - url pattern for the route
// id is a parameter that can be accessed in the request object
app.put('/api/people/:id', (req, res) => {

    const id = Number(req.params.id)
    const newName = req.body.name

    const person = people.find((person) => person.id === id)
    
    // response if there is no person with the id
    if (!person) {
        // exit early if there is no person with the id
        return res.status(404).json({ success: false, msg: `no person with id ${id}` })
    }

    // update the name and return the updated array
    const newPeople = people.map((person) => {
        if (person.id === id) {
            person.name = newName
        }
        return person
    })

    res.status(200).json({ success: true, data: newPeople })
})


// DELETE route handler
app.delete('/api/people/:id', (req, res) => {
    const id = Number(req.params.id)
    
    const person = people.find(person => person.id === id)

    // (no deletion) the idea is to return filtered array without the person
    if (!person) {
        return res.status(404).json({ success: false, msg: `no person with id ${id}` })
    }

    const newPeople = people.filter(person => person.id !== id)
    res.status(200).json({ success: true, data: newPeople })
})


app.listen(8000, () => {
    console.log('Server is listening on port 8000....')
})