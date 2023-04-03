const mongoose = require('mongoose');

// define the schema
// only schema items will be saved to the database
const taskSchema = new mongoose.Schema({
    // name: String,
    // completed: Boolean
    name: {
        type: String,
        required: [true, 'Please provide a task name'],
        trim: true, // remove leading and trailing spaces
        maxlength: [20, 'Name cannot be more than 20 characters']
    },
    completed: {
        type: Boolean,
        default: false
    }
})

// export created model to the controller
module.exports = mongoose.model('Task', taskSchema)