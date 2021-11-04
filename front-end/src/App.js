import React from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TaskForm />
        <TaskList />
      </header>
    </div>
  );
}

export default App;
