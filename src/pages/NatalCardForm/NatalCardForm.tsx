import { useCallback, useMemo, useState } from 'react'
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
    const [timezone, setTimezone] = useState<string>('4')
    const [selectedDate, setSelectedDate] = useState<DateTimeValue>({
        day: 8,
        month: 12,
        year: 1988,
        hour: 16,
        minute: 50,
        timezone: `${parseFloat(timezone) * 60 * 60}`
    })
    const navigate = useNavigate()
    const [system, setSystem] = useState('P')
    const avaialbelSystems = useMemo(() => {
        return [{
            label: 'Нет',
            value: ''
        },{
            label: 'Кох',
            value: 'K'
        }, {
            label: 'Плацидус',
            value: 'P'
        }]
    }, [])
    const [realDate, setRealDate] = useState<DateTimeValue>()
    const [place, setPlace] = useState('')
    const [astroPlace, setAstroPlace] = useState<IAstroPlace>()
    const [realPlace, setRealPlace] = useState('')
    
    const checkPlace = useCallback(async () => {
        setRealPlace('')
        const placeData: any[] = await findPlace(place)
        if (placeData && placeData[0]) {
            const pos = placeData[0].location
            setAstroPlace({
                latitude: pos.lat,
                longitude: pos.lng,
                place: placeData[0].formatted_address
            })
            setRealPlace(placeData[0].formatted_address)

            const pdate = parseDateTimeValue(selectedDate as DateTimeValue) 
            googleTimezoneApi.data(
                pos.lat,
                pos.lng,
                pdate.valueOf() / 1000,
                (err: any, res:any) => {
                    setSelectedDate((date) => ({
                        ...date,
                        timezone: res.raw_response.rawOffset
                    }))
                    setTimezone(`${res.raw_response.rawOffset / 60 / 60}`)
                })    
        }
    }, [place, setAstroPlace, setRealPlace])
    const submitRequest = useCallback(() => {
        if (astroPlace && selectedDate) {
            const request = encode(JSON.stringify({
                ...selectedDate,
                ...astroPlace,
                timezone: parseFloat(selectedDate.timezone.toString()),
                system
            }))
            navigate(`/natal-card/${request}`)
        }
    }, [selectedDate, astroPlace, navigate, setRealDate, system])
    const updateTimezone = useCallback((e: any) => {
        const timezone = parseFloat(e.target.value) * 60 * 60;
        setSelectedDate((date: any) => ({
            ...date,
            timezone
        }))
    }, [setSelectedDate])
    return (
        <div className={styles.NatalCardForm}>
            <div className={styles.NatalCardFormContent}>
                <DateTime onChange={setSelectedDate} value={selectedDate}/>
                <p>Место</p>
                <div className={styles.NatalCardFormPlace}>
                    <input onInput={(e) => setPlace(e.currentTarget.value)}/>
                    <button onClick={checkPlace}>Check</button>
                    <span>{realPlace}</span>
                </div>

                <div>
                    <div>Часавой пояс</div>
                    <input
                        value={timezone}
                        style={{ width: 35 }}
                        onInput={(e: any) => setTimezone(e.target.value)}
                        onBlur={updateTimezone} />
                </div>
                <div>
                    <div>Система Домов</div>
                    <select defaultValue={system} onChange={(e) => setSystem(e.target.value)}>
                        {avaialbelSystems.map((item) => (
                            <option value={item.value} key={item.value}>{item.label}</option>
                        ))}
                    </select>
                </div>
                <button onClick={submitRequest}>Посчитать</button>
            </div>
        </div>
    )
}