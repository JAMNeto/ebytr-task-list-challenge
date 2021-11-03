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

module.exports = { getAllTasks, addTask };