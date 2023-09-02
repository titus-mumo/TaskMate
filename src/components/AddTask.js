import React from "react"; 
import { useState } from "react";


const AddTask = ({ tasks, setTasks, update, setUpdate, updateString, change, setChange }) => {
    const [taskValue, setTaskValue] = useState("")
    const [completed, setCompleted] = useState(false)
    function handleChange(event) {
        if (update) {
            setChange(event.target.value)
        }else{
            setTaskValue(event.target.value)
        }     
    };
    const handleReset = () => {
        setTaskValue("");
        setCompleted(false);
        setUpdate(false)
    }


    const handleSubmit = (event) => {
        if (!update) {
            event.preventDefault();
            if (taskValue.length > 0) {
                event.preventDefault();
                const task = {
                    id: Math.floor(Math.random() * 1000000),
                    name: taskValue,
                    completed: Boolean(completed)
                }
                setTasks([...tasks, task]);
                handleReset();
            }
        } else {
            event.preventDefault();
            if (change.length > 0) {
                const updateTaskList = tasks.map((task) => (
                    task.id === updateString.id ? { id: task.id, name: change, completed: Boolean(updateString.completed) } : task
                ))
                setTasks(updateTaskList);
                handleReset();
            }
        }  
    }

    return (
        <section className='addtask' style={{height:'15vh'}}>
            <form onSubmit={handleSubmit}>
                <input style={{border:"1px solid black", borderRadius:"5px", margin:"1vh"} } onChange={handleChange} id='task' name="task" placeholder={update? 'Write sth to update task': 'Task Name'} autoComplete="off" value={update? change:taskValue}/>
                <select onChange={(event) => setCompleted(event.target.value)} value={completed} style={{borderRadius:"0.5vh"}}>
                    <option value="false">Pending</option>
                    <option value="true">Completed</option>
                </select>
                <button type='submit' className="btn btn-success">{ update? 'Update': 'Add Task'}</button>
                <span onClick={ handleReset} type="button" className="btn btn-warning">Reset</span>
            </form>
        </section>
    )
}

export default AddTask;