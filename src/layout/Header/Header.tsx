import { Link } from 'react-router-dom'
import styles from './Header.module.css'
export function Header () {
    return (
        <div className={styles.Header}>
            <div className={styles.HeaderRightBar}>
                <Link to="/about">О Проекте</Link>
            </div>
        </div>
    )
}