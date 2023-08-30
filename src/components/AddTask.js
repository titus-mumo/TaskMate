import React from "react"; 
import { useState } from "react";


const AddTask = ({ tasks, setTasks }) => {
    const [taskValue, setTaskValue] = useState("")
    const [completed, setCompleted] = useState(false)
    function handleChange(event){
        setTaskValue(event.target.value)
    };
    const handleReset = () => {
        setTaskValue("");
        setCompleted(false);
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        if (taskValue.length > 0) {
            event.preventDefault();
            const task = {
                id: Math.floor(Math.random() * 1000000),
                name: taskValue,
                completed: Boolean(completed)
            }
            setTasks([...tasks, task])
        
            handleReset();
        }
    }

    return (
        <section className='addtask' style={{height:'15vh'}}>
            <form onSubmit={handleSubmit}>
                <input style={{border:"1px solid black", borderRadius:"5px", margin:"1vh"} } onChange={handleChange} id='task' name="task" placeholder="Task Name" autoComplete="off" value={taskValue}/>
                <select onChange={(event) => setCompleted(event.target.value)} value={completed} style={{borderRadius:"0.5vh"}}>
                    <option value="false">Pending</option>
                    <option value="true">Completed</option>
                </select>
                <button type='submit' className="btn btn-success">Add Task</button>
                <span onClick={ handleReset} type="button" className="btn btn-warning">Reset</span>
            </form>
        </section>
    )
}

export default AddTask;