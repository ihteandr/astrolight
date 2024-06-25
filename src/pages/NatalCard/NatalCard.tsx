import { useState } from "react";
import { DateTime, DateTimeValue } from "../../components/DateTime/DateTime";
import { NatalChart } from "./components/NatalChart/NatalChart";
import styles from './NatalCard.module.css';
export default function NatalCard () {
    const [selectedDate, setSelectedDate] = useState<DateTimeValue>()
    const [enabled, setEnabled] = useState<boolean>(false)
    return (
        <div>
            <h1>Natal Card &#9791</h1>
            <div className={styles.NatalCardContent}>
                <div>
                    <DateTime onChange={setSelectedDate}/>
                    <button onClick={() => setEnabled(true)}>Посчитать</button>
                </div>
                <NatalChart size={500} date={selectedDate} enabled={enabled} onClickSign={console.log}></NatalChart>
            </div>
        </div>
    )
}
