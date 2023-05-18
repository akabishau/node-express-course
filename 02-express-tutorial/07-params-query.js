const express = require('express')
const app = express()
app.listen(8000, () => {
    console.log('Server is listening on port 8000....')
})

const { products } = require('./data')

app.get('/', (req, res) => {
    res.send('<h1>Home Page</h1><a href="/api/products">products</a>')
    //   res.json(products)
})


// all products
app.get('/api/products', (req, res) => {
    const shortVersionProducts = products.map((product) => {
        const { id, name, image } = product
        return { id, name, image }
    })
    res.json(shortVersionProducts)
})


// product by id
app.get('/api/products/:productId', (req, res) => {
    // req.params returns an object with the key/value pair of the parameter
    const { productId } = req.params // get value of productId from req.params (short version)
    console.log(productId)
    console.log(typeof productId)

    const singleProduct = products.find((product) => {
        return product.id === Number(productId)
    })


    if (!singleProduct) {
        return res.status(404).send('Product Does Not Exist')
    }

    res.json(singleProduct)
})

// example of a query string 
app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
    console.log(req.params) // returns an object with the key/value pair of the parameter
    res.send('hello world')
})


// query string parameters aka url parameters
// ?search=foo&limit=20

app.get('/api/v1/query', (req, res) => {
    console.log(req.query) // returns an object with the key/value pair of the whole query string
    // res.send(req.query)
    const { search, limit } = req.query
    let sortedProducts = [...products] // copy of products array

    if (search) {
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search)
        })
    }

    if (limit) {
        sortedProducts = sortedProducts.slice(0, Number(limit))
    }

    // explicit return
    if (sortedProducts.length < 1) {
        // return res.status(200).send('no products matched your search')
        return res.status(200).json({ sucess: true, data: [] }) // common approach
    } else {
        res.status(200).json(sortedProducts)
    }
})