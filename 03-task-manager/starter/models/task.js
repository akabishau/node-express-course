const mongoose = require('mongoose');

// define the schema
// only schema items will be saved to the database
const taskSchema = new mongoose.Schema({
    name: String,
    completed: Boolean
})

// export created model to the controller
module.exports = mongoose.model('Task', taskSchema)