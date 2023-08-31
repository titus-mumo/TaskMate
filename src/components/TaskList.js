import { useCallback, useEffect, useState } from "react";
import styles from './TaskList.module.css';

function TaskList({ tasks, setTasks }) {
    const [show, setShow] = useState(true);
    const [url, setUrl] = useState("http://localhost:8000/tasks")
    const [loading, setLoading] = useState(false)

    function handleDelete(id) {
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

    // useEffect(() => {
    //     fetch(url)
    //     .then(response => response.json())
    //         .then(data => setTasks(data))
    //     console.log('-')
    // }, [url, setTasks])


    //useCallback
    useEffect(() => {
        fetchTasks();
        console.log("-")
    }, [fetchTasks]);
    return (
        <section className={styles.section}>
            <button className="btn btn-primary" onClick={() => setUrl("http://localhost:8000/tasks")}>All</button>
            <button className="btn btn-primary" onClick={() => setUrl("http://localhost:8000/tasks?completed=true")}>Completed</button>
            <button className="btn btn-primary" onClick={() => setUrl("http://localhost:8000/tasks?completed=false")}>Incomplete</button>
            <div className={styles.header}>
                <h1 className={styles.title} >Task List</h1>
                <button onClick={handleShow} type='button' className="btn btn-primary">{ show? 'Hide':'Show'}</button>
            </div>
            {loading && <p>Loading products... </p>}
            <ul>
                { show && tasks.map((task) => (
                    <li key={task.id} className={task.completed? 'completed': 'incompleted'}>
                        <span className="span">
                            {task.id} - {task.name}
                        </span>
                        <button onClick={() => handleDelete(task.id)} type="button" className="btn btn-danger">Delete</button>
                    </li>
                ))}
            </ul>
        </section>
    ) 
}
 
export default TaskList;