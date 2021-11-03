const { ObjectId } = require('mongodb');
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

const editTask = async (id, newData) => {
  if (!ObjectId.isValid(id)) return null;
  const { task, assignee, status } = newData;
  const response = await taskModel.editTask(id, task, assignee, status);
  // return {
  //   _id: id,
  //   task,
  //   assignee,
  //   status,
  // };
  return response;
};

const deleteTask = async (id) => {
  if (!ObjectId.isValid(id)) return null;
  const response = await taskModel.deleteTask(id);
  return response;
};

module.exports = { getAllTasks, addTask, editTask, deleteTask };