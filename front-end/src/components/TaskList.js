import React, { useState, useEffect } from 'react';
import { fetchTasks } from '../api/Api';

function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect( () => {
    async function fetchApi(){
      const { data } = await fetchTasks()
      console.log(data);
      return setTasks(data);
    }
    fetchApi();
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <ul>
          { tasks.map((task) => (
            <li key={ task.id }> 
              <p>Task: {task.task} </p>
              <p>Assignee: {task.assignee}  </p>
              <p>Status: {task.status}</p>
              <p>Created in: {task.createdIn} </p>
            </li>
          )) }
        </ul>
      </header>
    </div>
  );
}

export default TaskList;