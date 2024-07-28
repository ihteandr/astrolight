import { Link } from 'react-router-dom'
import styles from './Header.module.css'
export function Header () {
    return (
        <div className={styles.Header}>
            <div className={styles.HeaderLeftBar}>
                <Link to="/natal-card-form" target='_blank'>Создать Натальную Карту</Link>
            </div>
            <div className={styles.HeaderRightBar}>
                <Link to="/about">О Проекте</Link>
            </div>
        </div>
    )
}