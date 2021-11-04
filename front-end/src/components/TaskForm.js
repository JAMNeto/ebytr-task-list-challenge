import React, { useState } from 'react';
import { createTask } from '../api/Api';

export default function TaskForm() {
  const [task, setTask] = useState({ task: '', assignee: '' });

  const sendNewTask = async () => {
    await createTask(task);
    return task;
  };

  return (
    <div data-testid="taskForm">
      <h2> Insert a new task </h2>
      <form>
        <label htmlFor="task">
          Task:
          <textarea
            id="task"
            rows="4"
            onChange={ (e) => setTask({ ...task, task: e.target.value }) }
          />
        </label>
        <label htmlFor="assignee">
          Assignee:
          <input
            id="assignee"
            type="text"
            onChange={ (e) => setTask({ ...task, assignee: e.target.value }) }
          />
        </label>
        <button type="submit" onClick={ () => sendNewTask() }>Create task</button>
      </form>
    </div>
  );
}
