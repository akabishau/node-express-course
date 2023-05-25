const Product = require('../models/product')

const getAllProductsStatic = async (req, res) => {
    // just throw an error, no need to use try-catch
    // throw new Error('testing async erros for static products')

    //const products = await Product.find( { featured: true, company: 'ikea' })

    // using regex as search
    const products = await Product.find({
        price: { $gt: 30 }
    }).sort('-price').select('name price').skip(1).limit(15)
    res.status(200).json({ total: products.length, items: products })
}


const getAllProducts = async (req, res) => {

    // all values come from the query parameters
    const { featured, company, name, sort, fields, numericFilters } = req.query
    const queryObject = {} // empty object returns all products

    if (featured) {
        queryObject.featured = featured === 'true' ? true : false
    }

    if (company) {
        queryObject.company = company
    }

    if (name) {
        queryObject.name = { $regex: 'table', $options: 'i' } // 'i' for case insensetive
    }

    
    if (numericFilters) {
        console.log('query filters: ' + numericFilters)
        const operatorMap = {
          '>': '$gt',
          '>=': '$gte',
          '=': '$eq',
          '<': '$lt',
          '<=': '$lte',
        }

        const regEx = /\b(<|>|>=|=|<|<=)\b/g
        let filters = numericFilters.replace(
          regEx,
          (match) => `-${operatorMap[match]}-`
        )

        console.log('numeric filters: ' + filters)
        const options = ['price', 'rating']
        filters = filters.split(',').forEach((item) => {
          const [field, operator, value] = item.split('-')
          if (options.includes(field)) {
            queryObject[field] = { [operator]: Number(value) }
          }
        })
    }

    // to chain sort to the filtering conditions, can't do await
    let result = Product.find(queryObject)

    // sort functionality
    if (sort) {
        const sortList = sort.split(',').join(' ')
        result.sort(sortList)
    } else {
        result.sort('createdAt') //default sorting if not available in query params
    }

    // selected fields
    if (fields) {
        console.log('fields:' + fields)
        const fieldsList = fields.split(',').join(' ')
        result.select(fieldsList)
    }

    // pagination using limit and skip
    const page = Number(req.query.page) || 1
    const limit = Number(req.query.limit) || 10
    const skip = (page - 1) * limit
    result = result.skip(skip).limit(limit)


    const products = await result
    res.status(200).json({ total: products.length, items: products })
}


module.exports = { getAllProducts, getAllProductsStatic }