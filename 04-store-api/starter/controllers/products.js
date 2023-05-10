const Product = require('../models/product')

const getAllProductsStatic = async (req, res) => {
    // just throw an error, no need to use try-catch
    // throw new Error('testing async erros for static products')

    //const products = await Product.find( { featured: true, company: 'ikea' })

    // using regex as search
    const products = await Product.find( { 
        name: { $regex: 'table', $options: 'i'} // 'i' case insensetive
     })
    res.status(200).json({ total: products.length, items: products })
}


const getAllProducts = async (req, res) => {

    const { featured, company, name } = req.query
    const queryObject = {}
    
    if (featured) {
        queryObject.featured = featured === 'true' ? true : false
    }

    if (company) {
        queryObject.company = company
    }

    if (name) {
        queryObject.name = { $regex: 'table', $options: 'i'} // 'i' case insensetive
    }

    console.log(queryObject)
    const products = await Product.find(queryObject) // empty object returns all products

    res.status(200).json({ total: products.length, items: products })
}


module.exports = { getAllProducts, getAllProductsStatic }