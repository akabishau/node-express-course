const express = require('express')
const router = express.Router()
const { people } = require('../data')

// GET route handler
router.get('/', (req, res) => {
    res.status(200).json({ success: true, data: people }) // response for the fetch request
})


// javascript.html (static file) sends post request to this endpoint
// endpoint returns "error" object or person object
router.post('/', (req, res) => {
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
router.put('/:id', (req, res) => {

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
router.delete('/:id', (req, res) => {
    const id = Number(req.params.id)
    
    const person = people.find(person => person.id === id)

    // (no deletion) the idea is to return filtered array without the person
    if (!person) {
        return res.status(404).json({ success: false, msg: `no person with id ${id}` })
    }

    const newPeople = people.filter(person => person.id !== id)
    res.status(200).json({ success: true, data: newPeople })
})


module.exports = router