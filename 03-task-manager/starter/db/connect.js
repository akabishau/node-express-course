const mongoose = require('mongoose');

const connectDB = (url) => {
    // second argument is an object with options
    mongoose.connect(url, { 
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
    console.log('Connected to DB')
}

module.exports = connectDB