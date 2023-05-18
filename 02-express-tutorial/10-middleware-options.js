const express = require('express')
const app = express()

// build-in middleware
// express.static - serves static files

// tp example - morgan for logging
const morgan = require('morgan')
app.use(morgan('tiny')) // tiny, dev, combined, etc

app.get('/', (req, res) => {
    res.send('Home')
  })
  app.get('/about', (req, res) => {
    res.send('About')
  })
  app.get('/api/products', (req, res) => {
    res.send('Products')
  })
  app.get('/api/items', (req, res) => {
    res.send('Items')
  })
  
  app.listen(8000, () => {
    console.log('Server is listening on port 8000....')
  })