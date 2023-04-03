const express = require('express')
const router = new express.Router()

const { getAllTasks } = require('../controllers/tasks')

router.route('/').get(getAllTasks)

module.exports = router