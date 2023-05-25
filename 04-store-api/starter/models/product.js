const mongoose = require('mongoose')

// define the schema

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, `Can't create a Product without the Name`],
        trim: true, // remove leading and trailing spaces
        maxlength: [50, 'Your Product Name is too long. Please make it fit 50 characters']
    },

    price: {
        type: Number,
        required: [true, `You can't sell the product without the price`]
    },

    featured: {
        type: Boolean,
        default: false
    },

    rating: {
        type: Number,
        default: 4.5
    },

    createdAt: {
        type: Date,
        default: Date.now()
    },

    company: {
        type: String,
        enum: {
            values: ['ikea', 'liddy', 'caressa', 'marcos'],
            message: '{VALUE} is not supported'
        }

        // also valid opiton
        //enum: ['ikea', 'liddy', 'caressa', 'marcos']
    }
})


// export created model to the controller
module.exports = mongoose.model('Product', productSchema)