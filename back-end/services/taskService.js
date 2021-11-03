const taskModel = require('../models/taskModel');

const getAllTasks = async () => {
  const response = await taskModel.getAllTasks();
  return response;
};

const addTask = async (task, assignee) => {
  if (!task) {
    return { err: { message: 'Please, inform a task' } };
  }
  if (!assignee) {
    return { err: { message: 'Please, inform an assignee' } };
  }
  const response = await taskModel.addTask({ task,
     assignee, 
     status: 'Pending', 
     createdIn: new Date() });
  return response;
};

module.exports = { getAllTasks, addTask };