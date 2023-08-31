import { useState } from 'react';
import './App.css';
//import Count from './components/Count';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import Header from './components/Header';


function App() {
  const [tasks, setTasks] = useState([
    // { id: 543, name: "Record React Lectures", completed: true },
    // { id: 544, name: "Edit React Lectures", completed: false },
    // { id: 545, name: "Watch React Lectures", completed: true }
  ]);
  return (
    <>
      <Header />
      <main>
        <AddTask tasks={tasks} setTasks={setTasks}/>
        <TaskList tasks={tasks} setTasks={setTasks} />
      </main>
      </>
  );
}

export default App;
