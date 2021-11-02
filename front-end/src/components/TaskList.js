import React, { useState, useEffect } from 'react';

function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/tasks')
    .then((data) => data.json())
    .then((tasks) => setTasks(tasks))
    .catch((e) => {
      console.log('API FETCH ERROR')
    })
  })

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