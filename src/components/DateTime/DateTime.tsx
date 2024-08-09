import { ChangeEvent, useEffect, useMemo, useState } from "react";
import { MONTHS, MONTHS_DAYS } from "../../data/date/DateData";
import { range } from 'lodash'
import styles from './DateTime.module.css'

export type DateTimeValue = {
    day: number,
    month: number,
    year: number,
    hour: number,
    minute: number,
    timezone: string
}
export type DateTimeTypes = {
    onChange: (v: DateTimeValue) => void,
    value: DateTimeValue
}


export function DateTime ({ onChange, value }: DateTimeTypes) {
    const months = useMemo<{name: string, value: number}[]>(() => {
        return MONTHS.map((month, index) => {
            return {
                name: month,
                value: index + 1
            }
        })
    }, []);
    const days = useMemo<number[]>(() => {
        let monthDays = MONTHS_DAYS[value.month - 1]
        if (value.year % 4 === 0 && value.month === 1) {
            monthDays++
        }
        return range(1, monthDays, 1)
    }, [value]);
    const years = useMemo<number[]>(() => {
        return range(1903, 2025, 1)
    }, []);
    const hours = useMemo<number[]>(() => {
        return range(1, 23, 1)
    }, []);
    const minutes = useMemo<number[]>(() => {
        return range(1, 59, 1)
    }, []);
    const updateSelectedDate = (fieldName: string) => {
        return (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
            const fieldValue = fieldName === 'timezone'? e.target.value : parseFloat(e.target.value)
            onChange({
                ...value,
                [fieldName]: fieldValue
            })
        }
    }
    return (
        <div className={styles.DateTime}>
            <div>
                <div>День</div>
                <select defaultValue={value.day} onChange={updateSelectedDate('day')}>
                    {days.map((day) => {
                        return <option value={day} key={day}>{day}</option>
                    })}
                </select>
            </div>

            <div>
                <div>Месяц</div>
                <select defaultValue={value.month} onChange={updateSelectedDate('month')}>
                    {months.map((month) => {
                        return <option value={month.value} key={month.value}>{month.name}</option>
                    })}
                </select>
            </div>

            <div>
                <div>Год</div>
                <select defaultValue={value.year} onChange={updateSelectedDate('year')}>
                    {years.map((year) => {
                        return <option value={year} key={year}>{year}</option>
                    })}
                </select>
            </div>

            <div>
                <div>Час</div>
                <select defaultValue={value.hour} onChange={updateSelectedDate('hour')}>
                    {hours.map((hour) => {
                        return <option value={hour} key={hour}>{hour}</option>
                    })}
                </select>
            </div>

            <div>
                <div>Минута</div>
                <select defaultValue={value.minute} onChange={updateSelectedDate('minute')}>
                    {minutes.map((minute) => {
                        return <option value={minute} key={minute}>{minute}</option>
                    })}
                </select>
            </div>

            <div>
                <div>Часавой пояс</div>
                <input value={value.timezone} style={{ width: 35 }} onChange={updateSelectedDate('timezone')} />
            </div>
        </div>
    )
} 