const Task = require('../models/task')
const asyncWrapper = require('../middleware/async')
const { createCustomError } = require('../errors/custom-error')

const getAllTasks = async (req, res) => {
    try {
        let tasks = await Task.find()
        res.status(200).json({ tasks })
    } catch (err) {
        res.status(500).json({ msg: err })
    }
}

const createTask = asyncWrapper(async (req, res) => {
    const task = await Task.create(req.body)
    res.status(201).json({ task })
})


const getTask = asyncWrapper(async (req, res, next) => {
    const id = req.params.id
    const task = await Task.findOne({ _id: id })
    if (!task) {
        return next(createCustomError(`No Task with ID: ${id}`, 404))
    }
    res.status(200).json({ task })
})


// patch: update only the fields that are provided
// put: update all the fields = replace the document
const updateTask = asyncWrapper(async (req, res) => {
    const id = req.params.id
    // params: id, data, options (by default it returns the old data)
    const task = await Task.findOneAndUpdate(
        { _id: id },
        req.body,
        { new: true, runValidators: true }
    )
    if (!task) {
        return next(createCustomError(`No Task with ID: ${id}`, 404))
    }

    res.status(200).json({ task })
})


const deleteTask = asyncWrapper(async (req, res) => {
    const id = req.params.id
    const task = await Task.findOneAndDelete({ _id: id })
    if (!task) {
        return next(createCustomError(`No Task with ID: ${id}`, 404))
    }
    res.status(200).json({ task })
})


module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}