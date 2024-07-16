import { useCallback, useState } from "react";
import { DateTime, DateTimeValue } from "../../components/DateTime/DateTime";
import { NatalChart } from "./components/NatalChart/NatalChart";
import styles from './NatalCard.module.css';
import { findPlace } from "../../utils/apis/google-geocoder";
import { IAstroPlace } from "../../types/astro";
import { googleTimezoneApi } from "../../utils/apis/google-timezone";
import { momentDateToDateTimeValue, parseDateTimeValue } from "../../utils/date.utils";
import moment from "moment";
import { useNatalCardData } from "../../api/natal-card/natal-card.api";
import { parseNatalCardData } from "../../utils/astro.utils";
export default function NatalCard () {
    const [selectedDate, setSelectedDate] = useState<DateTimeValue>()
    const [realDate, setRealDate] = useState<DateTimeValue>()
    const [enabled, setEnabled] = useState<boolean>(false)
    const [place, setPlace] = useState('')
    const [astroPlace, setAstroPlace] = useState<IAstroPlace>()
    const [realPlace, setRealPlace] = useState('')
    const { mutate: fetchData, data } = useNatalCardData()
    const checkPlace = useCallback(async () => {
        setRealPlace('')
        const placeData: any[] = await findPlace(place)
        console.log('placeData', placeData)
        if (placeData && placeData[0]) {
            const pos = placeData[0].location
            setAstroPlace({
                latitude: pos.lat,
                longitude: pos.lng
            })
            setRealPlace(placeData[0].formatted_address)
        }
    }, [place, setAstroPlace, setRealPlace])
    const submitRequest = useCallback(() => {
        if (astroPlace && selectedDate) {
            const pdate = parseDateTimeValue(selectedDate as DateTimeValue)
            googleTimezoneApi.data(
                astroPlace?.latitude,
                astroPlace?.longitude,
                pdate.valueOf(),
                 (err: any, res:any) => {
                    console.log('res', res)
                    const utcDate = moment(pdate.valueOf()- res.raw_response.rawOffset * 1000)
                    const dateTimeValue = momentDateToDateTimeValue(utcDate)
                    console.log('dateTimevLue', dateTimeValue)
                    setRealDate(dateTimeValue)
                    setEnabled(true)
                    fetchData({
                        ...dateTimeValue,
                        ...astroPlace
                    })    
                })    
        }
    }, [selectedDate, astroPlace, setRealDate, setEnabled])
    return (
        <div>
            <h1>Natal Card</h1>
            <div className={styles.NatalCardContent}>
                <div className={styles.NatalCardForm}>
                    <DateTime onChange={setSelectedDate}/>
                    <div className={styles.NatalCardFormPlace}>
                        <input onInput={(e) => setPlace(e.currentTarget.value)}/>
                        <button onClick={checkPlace}>Check</button>
                        <span>{realPlace}</span>
                    </div>
                    <button onClick={submitRequest}>Посчитать</button>
                </div>
                <NatalChart data={parseNatalCardData(data)} astroPlace={astroPlace} size={500} date={realDate} enabled={enabled} onClickSign={console.log}></NatalChart>
            </div>
        </div>
    )
}
