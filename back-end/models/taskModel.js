// const { ObjectId } = require('mongodb');
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

module.exports = { getAllTasks, addTask };
