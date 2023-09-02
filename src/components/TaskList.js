import { useCallback, useEffect, useState } from "react";
import styles from './TaskList.module.css';

function TaskList({ tasks, setTasks, update, setUpdate, updateString, setUpdateString, change, setChange }) {
    const [show, setShow] = useState(true);
    const [url, setUrl] = useState("http://localhost:3000/tasks")
    const [loading, setLoading] = useState(false)

    function handleDelete(id) {
        setUpdate(false)
        setUpdateString(null)
        setTasks(tasks.filter(task => id !== task.id));
    };

    function handleShow(){
        setShow(!show)
    };

    const fetchTasks = useCallback(async () => {
        setLoading(true)
        try {
            const response = await fetch(url);
            const data = await response.json();
            setLoading(false)
            setTasks(data);
        } catch (error) {
            console.log(error.message)
        }
    }, [url, setTasks])

    const handleUpdate = (id) => {
        setUpdate(true)
        const taskToUpdate = tasks.find(task => id === task.id);
        setChange(taskToUpdate.name)
        setUpdateString(taskToUpdate)
    }

    // useEffect(() => {
    //     fetch(url)
    //     .then(response => response.json())
    //         .then(data => setTasks(data))
    //     console.log('-')
    // }, [url, setTasks])


    //useCallback
    useEffect(() => {
        fetchTasks();
        //console.log("-")
    }, [fetchTasks]);
    return (
        <section className={styles.section}>
            <button className="btn btn-primary" onClick={() => setUrl("http://localhost:3000/tasks")}>All</button>
            <button className="btn btn-primary" onClick={() => setUrl("http://localhost:3000/tasks?completed=true")}>Completed</button>
            <button className="btn btn-primary" onClick={() => setUrl("http://localhost:3000/tasks?completed=false")}>Incomplete</button>
            <div className={styles.header}>
                <p style={loading ? {}:{opacity:'0.8', display:'flex', alignContent:'center', height:'100%'}}>{ loading? '':tasks.length}</p>
                <h1 className={styles.title} >Task List</h1>
                <button onClick={handleShow} type='button' className="btn btn-primary">{ show? 'Hide':'Show'}</button>
            </div>
            {loading && <p>Loading products... </p>}
            <ul>
                { show && tasks.map((task) => (
                    <li key={task.id} className={task.completed? 'completed': 'incompleted'}>
                        <span className="span" style={{width:'60%'}}>
                            {task.id} - {updateString && updateString.id === task.id? change:task.name}
                        </span>
                        <button onClick = { () => handleUpdate(task.id)} type='submit' className="btn btn-dark">Edit</button>
                        <button onClick={() => handleDelete(task.id)} type="button" className="btn btn-danger">Delete</button>
                    </li>
                ))}
            </ul>
        </section>
    ) 
}
 
export default TaskList;