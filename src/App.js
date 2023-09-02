import { useState } from 'react';
import './App.css';
//import Count from './components/Count';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import Header from './components/Header';


function App() {
  const [tasks, setTasks] = useState([]);
  const [update, setUpdate] = useState(false)
  const [updateString, setUpdateString] = useState(null)
  const [change, setChange] = useState('')
  return (
    <>
      <Header />
      <main>
        <AddTask tasks={tasks} setTasks={setTasks} update={update} setUpdate={setUpdate} updateString={updateString} setUpdateString={setUpdateString} change={ change } setChange={ setChange } />
        <TaskList tasks={tasks} setTasks={setTasks} update={update} setUpdate={setUpdate} updateString={updateString} setUpdateString={setUpdateString} change={ change } setChange={ setChange }/>
      </main>
      </>
  );
}

export default App;
