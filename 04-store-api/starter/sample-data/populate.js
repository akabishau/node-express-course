// database connection/configuration
require('dotenv').config()
const connectDB = require('../db/connect')

// need to set a separate connection in order to write data sample to db

const Product = require('../models/product')
const sampleData = require('./products.json')

const writeDataSampleToDB = async () => {
    try {
        await connectDB(process.env.MONGODB_URI)
        await Product.deleteMany()
        await Product.create(sampleData)
        console.log('success')
        process.exit(0)
    } catch (err) {
        console.log(err)
        process.exit(1)
    }
}

writeDataSampleToDB()