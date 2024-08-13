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
    const [selectedDate, setSelectedDate] = useState<DateTimeValue>({
        day: 8,
        month: 12,
        year: 1988,
        hour: 16,
        minute: 50,
        timezone: '4'
    })
    const navigate = useNavigate()
    const [system, setSystem] = useState('P')
    const avaialbelSystems = useMemo(() => {
        return [{
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
        }
    }, [place, setAstroPlace, setRealPlace])
    const submitRequest = useCallback(() => {
        if (astroPlace && selectedDate) {
            const request = encode(JSON.stringify({
                ...selectedDate,
                ...astroPlace,
                timezone: parseFloat(selectedDate.timezone.toString()) * 60 * 60,
                system
            }))
            navigate(`/natal-card/${request}`)
            const pdate = parseDateTimeValue(selectedDate as DateTimeValue) 
            // googleTimezoneApi.data(
            //     astroPlace?.latitude,
            //     astroPlace?.longitude,
            //     pdate.valueOf() / 1000,
            //      (err: any, res:any) => {
            //         const request = encode(JSON.stringify({
            //             ...selectedDate,
            //             ...astroPlace,
            //             timezone: res.raw_response.rawOffset,
            //             system
            //         }))
                        
            //         navigate(`/natal-card/${request}`)
            //     })    
        }
    }, [selectedDate, astroPlace, navigate, setRealDate, system])

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