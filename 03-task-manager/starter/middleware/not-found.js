const notFound = (req, res) => {
    res.status(404).json({ msg: `Requested route ${req.originalUrl} doesn't exist` })
}


module.exports = notFound