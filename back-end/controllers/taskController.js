const taskService = require('../services/taskService');

const getAllTasks = async (_req, res) => {
  const tasks = await taskService.getAllTasks();
  return res.status(200).json(tasks);
};

const addTask = async (req, res) => {
  const { task, assignee } = req.body;

  const response = await taskService.addTask(task, assignee);

  const { err } = response;

  if (err) {
    return res.status(400).json(err);
  }
  return res.status(201).json(response);
};

const editTask = async (req, res, _next) => {
  const { id } = req.params;
  const { task, assignee, status } = req.body;
  const newData = {
    task,
    assignee,
    status,
  };
  const data = await taskService.editTask(id, newData);
  return res.status(200).json(data);
};

const deleteTask = async (req, res, _next) => {
  const { id } = req.params;
  await taskService.deleteTask(id);
  return res.status(204).json();
};

module.exports = { getAllTasks, addTask, editTask, deleteTask };