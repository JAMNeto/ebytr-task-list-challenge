import React, { useState, useEffect } from 'react';
import { fetchTasks, deleteTask, updateTask } from '../api/Api';

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [update, setUpdate] = useState();
  const [showTaskEditor, setShowTaskEditor] = useState(false);
  const [updatedTask, setUpdatedTask] = useState({ task: '', assignee: '', status: '' });

  useEffect(() => {
    async function fetchApi() {
      const { data } = await fetchTasks();
      return setTasks(data);
    }
    fetchApi();
  }, [update, showTaskEditor, updatedTask, tasks]);

  const removeTask = async (id) => {
    setUpdate(id);
    await deleteTask(id);
    return id;
  };

  const sendTaskUpdate = async (id) => {
    setUpdate(id);
    await updateTask(id, updatedTask);
    return updatedTask;
  };

  const showTaskEditorFunction = () => {
    if (showTaskEditor) {
      return setShowTaskEditor(false);
    }
    return setShowTaskEditor(true);
  };

  if (tasks) {
    return (
      <div className="App">
        <header className="App-header">
          <ul>
            { tasks.map(({ _id, task, assignee, status, createdIn }) => (
              <li key={ _id }>
                <div>
                  Task:
                  {task}
                </div>
                <div>
                  Assignee:
                  {assignee}
                </div>
                <div>
                  Status:
                  {status}
                </div>
                <div>
                  Created in:
                  {createdIn}
                </div>
                <button
                  type="submit"
                  onClick={ () => removeTask(_id) }
                >
                  Delete task
                </button>
                <button
                  type="submit"
                  onClick={ () => showTaskEditorFunction() }
                >
                  Edit task
                </button>
                {showTaskEditor ? (
                  <form>
                    <label htmlFor="task">
                      Edit task:
                      <textarea
                        name="task"
                        type="text"
                        onChange={ (e) => setUpdatedTask({ status,
                          assignee,
                          task: e.target.value }) }
                      />
                    </label>
                    <label htmlFor="assignee">
                      Change assignee:
                      <input
                        name="assignee"
                        type="text"
                        onChange={ (e) => setUpdatedTask({ status,
                          task,
                          assignee: e.target.value }) }
                      />
                    </label>
                    <label htmlFor="status">
                      Change status:
                      <input
                        name="status"
                        type="text"
                        onChange={ (e) => setUpdatedTask({ task,
                          assignee,
                          status: e.target.value }) }
                      />
                    </label>
                    <button type="button" onClick={ () => sendTaskUpdate(_id) }>
                      Save changes
                    </button>
                  </form>) : ''}
              </li>
            )) }
          </ul>
        </header>
      </div>
    );
  }
  return (<h1> Loading </h1>);
}

export default TaskList;
