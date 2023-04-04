const Task = require('../models/task')

const getAllTasks = async (req, res) => {
    try {
        let tasks = await Task.find()
        res.status(200).json({ tasks })
    } catch (err) {
        res.status(500).json({ msg: err })
    }

}

const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body)
        res.status(201).json({ task })
    } catch (err) {
        res.status(500).json({ msg: err })
    }


}

const getTask = async (req, res) => {
    try {
        const id = req.params.id
        const task = await Task.findOne({ _id: id })
        if (!task) {
            return res.status(404).json({ msg: `No task with id : ${id}` })
        }
        res.status(200).json({ task })
    } catch (err) {
        console.log(err)
        res.status(500).json({ msg: err })
    }
}

const updateTask = async (req, res) => {
    try {
        const id = req.params.id
        // params: id, data, options (by default it returns the old data)
        const task = await Task.findOneAndUpdate(
            { _id: id },
            req.body,
            { new: true, runValidators: true }
        )
        if (!task) {
            return res.status(404).json({ msg: `No task with id : ${id}` })
        }

        res.status(200).json({ task })
    } catch (err) {
        res.status(500).json({ msg: err })
    }
}

const deleteTask = async (req, res) => {
    try {
        const id = req.params.id
        const task = await Task.findOneAndDelete({ _id: id })
        if (!task) {
            return res.status(404).json({ msg: `No task with id : ${id}` })
        }
        res.status(200).json({ task })
    } catch (err) {
        res.status(500).json({ msg: err })
    }
}


module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}