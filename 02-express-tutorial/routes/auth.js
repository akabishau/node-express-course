const expres = require('express')
const router = expres.Router()

router.post('/', (req, res) => {
    const name = req.body.name
    if (name) {
        return res.status(200).send(`Welcome, ${name}!`)
    }
    res.status(401).send('Please provide credentials')
})


module.exports = router