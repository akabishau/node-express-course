const express = require('express')
const mainRouter = express.Router()

const { loginController, helloController } = require('../controllers/main')
const { authMiddleware } = require('../middleware/auth')

mainRouter.route('/logon').post(loginController)
mainRouter.route('/hello').get(authMiddleware, helloController)

module.exports = mainRouter