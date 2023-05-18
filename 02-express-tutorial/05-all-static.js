const express = require('express')

const app = express()

// setup static and middleware
// index.html is the default file to serve - no need to specify it
app.use(express.static('./public'))

app.all('*', (req, res) => {
  res.status(404).send('resource not found')
})

app.listen(8000, () => {
  console.log('server is listening on port 8000....')
})