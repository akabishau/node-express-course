const jwt = require('jsonwebtoken')

const loginController = (req, res) => {
    // get creds from the request's body
    const { username, password } = req.body

    // error in case if username and password are not provided
    if (!username || !password) {
        return res.status(400).json({
            status: 'failed',
            message: 'Username and password are required',
        })
    }

    // // create and sign token - sync version
    // const token = jwt.sign(
    //     { username },
    //     process.env.SECRET, // secret key
    //     { expiresIn: process.env.LIFETIME }
    // )

    // res.status(200).json({
    //     status: 'success',
    //     message: 'Login completed',
    //     token
    // })

    // sign token - async version
    jwt.sign(
        { username },
        process.env.SECRET,
        { expiresIn: process.env.LIFETIME },
        (err, token) => {
            if (err) {
                res.status(400).json({
                    status: 'failed',
                    message: 'Error of signing JWT'
                })
            } else {
                res.status(200).json({
                    status: 'success',
                    message: 'Login completed',
                    token
                })
            }
        }
    )
}


const helloController = (req, res) => {
    const user = req.user
    res.status(200).json({
        'status': 'success',
        'message': `Hello, ${user}`
    })
}

module.exports = { loginController, helloController }