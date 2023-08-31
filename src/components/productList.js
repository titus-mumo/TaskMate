import { useState } from "react";
import useFetch from "../hooks/useFetch";
import styles from './TaskList.module.css';

const ProductList = () => {
    const [url, setUrl] = useState("http://localhost:8000/tasks")
    const { data: products } = useFetch(url)
    console.log(products)

    return (
        <section className={styles.section}>
            <button className="btn btn-primary" onClick={() => setUrl("http://localhost:8000/tasks")}>All</button>
            <button className="btn btn-primary" onClick={() => setUrl("http://localhost:8000/tasks?completed=true")}>Completed</button>
            <button className="btn btn-primary" onClick={() => setUrl("http://localhost:8000/tasks?completed=false")}>Incomplete</button>
            <ul>
                {products && products.map((product) => (
                    <li key={product.id} className={product.completed ? 'completed' : 'incompleted'}>
                        <span className="span">
                            {product.id} - {product.name}
                        </span>
                    </li>
                ))}
            </ul>
        </section>
    )
};

export default ProductList;