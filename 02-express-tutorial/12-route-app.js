const express = require('express')
const app = express()

const peopleRouter = require('./routes/people')
const authRouter = require('./routes/auth')

// static assets
app.use(express.static('./methods-public'))
// parse form data
app.use(express.urlencoded({ extended: false }))
// parse json
app.use(express.json())

app.use('/api/people', peopleRouter) // only routes that start with /api/people will be handled by peopleRouter
app.use('/form', authRouter)


app.listen(8000, () => {
    console.log('Server is listening on port 8000....')
})