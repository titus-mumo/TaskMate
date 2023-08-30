import { useState } from "react";
import styles from './TaskList.module.css';

function TaskList({ tasks, setTasks }) {
    const [show, setShow] = useState(true);

    function handleDelete(id) {
        setTasks(tasks.filter(task => id !== task.id));
    };

    function handleShow(){
        setShow(!show)
    };
    return (
        <section className={styles.section}>
            <div className={styles.header}>
                <h1 className={styles.title} >Task List</h1>
                <button onClick={handleShow} type='button' className="btn btn-primary">{ show? 'Hide':'Show'}</button>
            </div>
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