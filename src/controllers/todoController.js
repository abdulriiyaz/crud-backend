// app/controllers/todoController.js

const Todo = require('../models/Todo');

// Create a new Todo
async function createTodo(req, res) {
    try {
        const { title, description, completed } = req.body;
        const todo = await Todo.create({ title, description, completed });
        res.status(201).json(todo);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server Error' });
    }
}

async function deleteTodo(req, res) {
    try {
        const { id } = req.params;

        const todo = await Todo.findByPk(id);
        if (!todo) {
            return res.status(404).json({ error: 'Todo not found' });
        }

        await Todo.destroy({ where: { id } });
        res.status(204).json({ message: 'Deleted successfully!' });
    } catch (error) {
        console.error(error);
        res.status(404).json({ error: 'Todo not found' });
    }
}

async function updateTodo(req, res) {
    try {
        const { id } = req.params;
        const { title, description, completed } = req.body;
        const todo = await Todo.findByPk(id);
        if (!todo) {
            return res.status(404).json({ error: 'Todo not found' });
        }
        todo.title = title;
        todo.description = description;
        todo.completed = completed;
        await todo.save();
        res.status(200).json(todo);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server Error' });
    }
}

async function getTodoById(req, res) {
    try {
        const { id } = req.params;
        const todo = await Todo.findByPk(id);
        if (!todo) {
            return res.status(404).json({ error: 'Todo not found' });
        }
        res.status(200).json(todo);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server Error' });
    }
}

async function getAllTodos(req, res) {
    try {
        const todos = await Todo.findAll();
        res.status(200).json(todos);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server Error' });
    }
}

module.exports = {
    createTodo,
    deleteTodo,
    updateTodo,
    getTodoById,
    getAllTodos,
};
