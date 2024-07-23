import { useCallback, useState } from 'react'
import { DateTime, DateTimeValue } from '../../components/DateTime/DateTime'
import { googleTimezoneApi } from '../../utils/apis/google-timezone'
import styles from './NatalCardForm.module.css'
import { momentDateToDateTimeValue, parseDateTimeValue } from '../../utils/date.utils'
import { IAstroPlace } from '../../types/astro'
import { useNatalCardData } from '../../api/natal-card/natal-card.api'
import { findPlace } from '../../utils/apis/google-geocoder'
import moment from 'moment'
import { encode } from 'js-base64'
import { useNavigate } from 'react-router-dom'
export function NatalCardForm () {
    const [selectedDate, setSelectedDate] = useState<DateTimeValue>({
        day: 8,
        month: 12,
        year: 1988,
        hour: 16,
        minute: 50
    })
    const navigate = useNavigate()
    const [realDate, setRealDate] = useState<DateTimeValue>()
    const [place, setPlace] = useState('')
    const [astroPlace, setAstroPlace] = useState<IAstroPlace>()
    const [realPlace, setRealPlace] = useState('')
    
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
            console.log('pdate', pdate, astroPlace)
            googleTimezoneApi.data(
                astroPlace?.latitude,
                astroPlace?.longitude,
                pdate.valueOf() / 1000,
                 (err: any, res:any) => {
                    console.log('res', res)
                    console.log('valueOf', pdate.valueOf(), res.raw_response, res.raw_response.rawOffset)
                    const utcDate = moment(pdate.valueOf()- res.raw_response.rawOffset * 1000)
                    console.log('utcDate', utcDate)
                    const dateTimeValue = momentDateToDateTimeValue(utcDate)
                    console.log('dateTimevLue', dateTimeValue)
                    setRealDate(dateTimeValue)
                    const request = encode(JSON.stringify({
                        ...dateTimeValue,
                        ...astroPlace
                    }))    
                    navigate(`/natal-card/${request}`)
                })    
        }
    }, [selectedDate, astroPlace, navigate, setRealDate])

    return (
        <div className={styles.NatalCardForm}>
            <div className={styles.NatalCardFormContent}>
                <DateTime onChange={setSelectedDate} value={selectedDate}/>
                <div className={styles.NatalCardFormPlace}>
                    <input onInput={(e) => setPlace(e.currentTarget.value)}/>
                    <button onClick={checkPlace}>Check</button>
                    <span>{realPlace}</span>
                </div>
                <button onClick={submitRequest}>Посчитать</button>
            </div>
        </div>
    )
}