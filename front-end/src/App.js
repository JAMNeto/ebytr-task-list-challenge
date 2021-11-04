import TaskList from './components/TaskList'
import './App.css';
import TaskForm from './components/TaskForm';

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
