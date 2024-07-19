import moment from "moment-timezone";
import { DateTimeValue } from "../components/DateTime/DateTime";

export function parseDateTimeValue (value: DateTimeValue) {
    console.log('date format', `${value.year}-${value.month}-${value.day} ${value.hour}:${value.minute}:00`)
    return moment(`${value.year}-${value.month}-${value.day} ${value.hour}:${value.minute}:00`)
}
export function momentDateToDateTimeValue (momentDate: moment.Moment) {
    return {
        year: momentDate.year(),
        month: momentDate.month() + 1,
        day: momentDate.date(),
        hour: momentDate.hours(),
        minute: momentDate.minute()
    }
}