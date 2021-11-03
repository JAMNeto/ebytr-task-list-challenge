const { ObjectId } = require('mongodb');
const connection = require('./connection');

const getAllTasks = async () => connection()
    .then((db) => db.collection('tasks').find().toArray());

const addTask = async (data) => {
  const db = await connection();
  const { task, assignee, status, createdIn } = data;
  const newTask = await db.collection('tasks').insertOne(data);
  return { task: { task, 
    assignee, 
    status, 
    _id: newTask.insertedId,
    createdIn,
   } };
};

const getTaskById = async (id) => {
  const db = await connection();
  const response = await db.collection('tasks').findOne(new ObjectId(id));
  return response;
};

const editTask = async (id, task, assignee, status) => {
  const db = await connection();
  const response = await db.collection('tasks')
  .updateOne({ _id: new ObjectId(id) }, { $set: { task, assignee, status } });
  return response;
};


module.exports = { getAllTasks, addTask, getTaskById, editTask };
