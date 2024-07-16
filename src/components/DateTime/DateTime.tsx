import { ChangeEvent, useEffect, useMemo, useState } from "react";
import { MONTHS, MONTHS_DAYS } from "../../data/date/DateData";
import { range } from 'lodash'
import styles from './DateTime.module.css'

export type DateTimeValue = {
    day: number,
    month: number,
    year: number,
    hour: number,
    minute: number
}
export type DateTimeTypes = {
    onChange: (v: DateTimeValue) => void
}


export function DateTime ({ onChange }: DateTimeTypes) {
    const [selectedDate, setSelectedDate]= useState<DateTimeValue>({
        day: 8,
        month: 12,
        year: 1988,
        hour: 16,
        minute: 50
    })
    const months = useMemo<{name: string, value: number}[]>(() => {
        return MONTHS.map((month, index) => {
            return {
                name: month,
                value: index + 1
            }
        })
    }, []);
    const days = useMemo<number[]>(() => {
        let monthDays = MONTHS_DAYS[selectedDate.month - 1]
        if (selectedDate.year % 4 === 0 && selectedDate.month === 1) {
            monthDays++
        }
        return range(1, monthDays, 1)
    }, [selectedDate]);
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
        return (e: React.ChangeEvent<HTMLSelectElement>) => {
            const value = parseInt(e.target.value)
            setSelectedDate({
                ...selectedDate,
                [fieldName]: value
            })
        }
    }
    useEffect(() => {
        onChange(selectedDate)
    }, [selectedDate])
    return (
        <div className={styles.DateTime}>
            <div>
                <div>День</div>
                <select defaultValue={selectedDate.day} onChange={updateSelectedDate('day')}>
                    {days.map((day) => {
                        return <option value={day} key={day}>{day}</option>
                    })}
                </select>
            </div>

            <div>
                <div>Месяц</div>
                <select defaultValue={selectedDate.month} onChange={updateSelectedDate('month')}>
                    {months.map((month) => {
                        return <option value={month.value} key={month.value}>{month.name}</option>
                    })}
                </select>
            </div>

            <div>
                <div>Год</div>
                <select defaultValue={selectedDate.year} onChange={updateSelectedDate('year')}>
                    {years.map((year) => {
                        return <option value={year} key={year}>{year}</option>
                    })}
                </select>
            </div>

            <div>
                <div>Час</div>
                <select defaultValue={selectedDate.hour} onChange={updateSelectedDate('hour')}>
                    {hours.map((hour) => {
                        return <option value={hour} key={hour}>{hour}</option>
                    })}
                </select>
            </div>

            <div>
                <div>Минута</div>
                <select defaultValue={selectedDate.minute} onChange={updateSelectedDate('minute')}>
                    {minutes.map((minute) => {
                        return <option value={minute} key={minute}>{minute}</option>
                    })}
                </select>
            </div>
        </div>
    )
} 