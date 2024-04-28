const Todo = require('../model/todo');

exports.createTodo = async (req, res) => {
  try {
    const todo = await Todo.create(req.body);
    res.status(201).json({ status: 'success', data: todo });
  } catch (err) {
    res.status(400).json({ status: 'error', message: err.message });
  }
};

exports.getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json({ status: 'success', data: todos });
  } catch (err) {
    res.status(500).json({ status: 'error', message: err.message });
  }
};

exports.getTodoById = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) {
      return res.status(404).json({ status: 'error', message: 'Todo not found' });
    }
    res.status(200).json({ status: 'success', data: todo });
  } catch (err) {
    res.status(500).json({ status: 'error', message: err.message });
  }
};

exports.updateTodo = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!todo) {
      return res.status(404).json({ status: 'error', message: 'Todo not found' });
    }
    res.status(200).json({ status: 'success', data: todo });
  } catch (err) {
    res.status(400).json({ status: 'error', message: err.message });
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id);
    if (!todo) {
      return res.status(404).json({ status: 'error', message: 'Todo not found' });
    }
    res.status(204).json({ status: 'success',  message: 'Todo Delete Successfully' });

  } catch (err) {
    res.status(500).json({ status: 'error', message: err.message });
  }
};
