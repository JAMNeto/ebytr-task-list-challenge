import axios from 'axios';

const url = 'http://localhost:3001/tasks';

export const fetchTasks = () => axios.get(url);
export const createTask = (newTask) => axios.post(url, newTask);

