import { MONTHS } from '../../../../data/date/DateData'
import { ZoneInfo } from '../ZoneInfo/ZoneInfo'
import styles from './PersonDetails.module.css'
export type PersonDetailsProps = {
    data?: any
}

export function PersonDetails ({ data }: PersonDetailsProps) {
    if (!data) {
        return null
    }
    return (
        <div className={styles.PersonDetails}>
            <div className={styles.PersonDetailsRow}>
                <div className={styles.RowLabel}>
                    <span>День Рождения:</span>
                </div>
                <div className={styles.RowValue}>
                    <span>{data.utcDate.year} {MONTHS[data.utcDate.month - 1]} {data.utcDate.day} {data.utcDate.hour}:{data.utcDate.minute}</span>
                </div>
            </div>

            <div className={styles.PersonDetailsRow}>
                <div className={styles.RowLabel}>
                    <span>Локальное День Рождения:</span>
                </div>
                <div className={styles.RowValue}>
                    <span>{data.originDate.year} {MONTHS[data.originDate.month - 1]} {data.originDate.day} {data.originDate.hour}:{data.originDate.minute}</span>
               </div>
            </div>

            <div className={styles.PersonDetailsRow}>
                <div className={styles.RowLabel}>
                    <span>Место Рождения:</span>
                </div>
                <div className={styles.RowValue}>
                    <span>{data.place}</span>
                </div>
            </div>

            <div className={styles.PersonDetailsRow}>
                <div className={styles.RowLabel}>
                    <span>Координаты:</span>
                </div>
                <div className={styles.RowValue}>
                    <span>Широта <ZoneInfo zone={data.latitude} />, Долгота <ZoneInfo zone={data.longitude} /></span>
                </div>
            </div>
        </div>
    )
}