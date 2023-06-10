const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');

router.post('/', todoController.createTodo);
router.delete('/:id', todoController.deleteTodo);
router.put('/:id', todoController.updateTodo);
router.get('/:id', todoController.getTodoById);
router.get('/', todoController.getAllTodos);

module.exports = router;
