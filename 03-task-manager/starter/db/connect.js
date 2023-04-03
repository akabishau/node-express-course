const mongoose = require('mongoose');

const connectDB = (url) => {
    mongoose.connect(url, { // second argument is an object with options
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
    console.log('Connected to DB')
}

module.exports = connectDB