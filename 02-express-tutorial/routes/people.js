const express = require('express')
const router = express.Router()
const { people } = require('../data')
const peopleController = require('../controllers/people')

// GET route handler
router.get('/', peopleController.getPeople)


// javascript.html (static file) sends post request to this endpoint
// endpoint returns "error" object or person object
router.post('/', peopleController.createPerson)


// PUT route handler
//api/people/1 - url pattern for the route
// id is a parameter that can be accessed in the request object
router.put('/:id', peopleController.updatePerson)


// DELETE route handler
router.delete('/:id', peopleController.deletePerson)

// alt syntax
//router.route('/').get(peopleController.getPeople).post(peopleController.createPerson)


module.exports = router