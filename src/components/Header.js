import logo from '../assets/download.png'
import styles from './Header.module.css'

const Header = () => {
    return (
        <div className={styles.header}>
            <img
                src={logo}
                alt='logo'
                height='80vh'
                width='auto'
            ></img>
            <h1>TaskMate</h1>
        </div>
    )
}

export default Header;