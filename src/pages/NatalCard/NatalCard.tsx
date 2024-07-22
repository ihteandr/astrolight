import { useCallback, useEffect, useState } from "react";
import { DateTime, DateTimeValue } from "../../components/DateTime/DateTime";
import { NatalChart } from "./components/NatalChart/NatalChart";
import styles from './NatalCard.module.css';
import { findPlace } from "../../utils/apis/google-geocoder";
import { IAstroPlace, IHouse } from "../../types/astro";
import { googleTimezoneApi } from "../../utils/apis/google-timezone";
import { momentDateToDateTimeValue, parseDateTimeValue } from "../../utils/date.utils";
import moment from "moment";
import { useNatalCardData } from "../../api/natal-card/natal-card.api";
import { parseNatalCardData } from "../../utils/astro.utils";
import ShouldRender from "../../atoms/functional/ShouldRender";
import { SignsDetails } from "./components/SignsDetails/SintsDetails";
import { HousesDetails } from "./components/HousesDetails/HousesDetails";
import { AspectsDetails } from "./components/AspectsDetails/AspectsDetails";
import { HouseDescription } from "./components/HouseDescription/HouseDescription";
export default function NatalCard () {
    const [selectedHouse, setSelectedHouse] = useState<IHouse>()
    const [selectedDate, setSelectedDate] = useState<DateTimeValue>({
        day: 8,
        month: 12,
        year: 1988,
        hour: 16,
        minute: 50
    })
    const [realDate, setRealDate] = useState<DateTimeValue>()
    const [enabled, setEnabled] = useState<boolean>(false)
    const [place, setPlace] = useState('')
    const [astroPlace, setAstroPlace] = useState<IAstroPlace>()
    const [realPlace, setRealPlace] = useState('')
    const { mutate: fetchData, data } = useNatalCardData()
    const [parsedNatalCardData, setParsedNatalCardData] = useState<any>()
    
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
                    fetchData({
                        ...dateTimeValue,
                        ...astroPlace
                    })    
                })    
        }
    }, [selectedDate, astroPlace, setRealDate, setEnabled])

    useEffect(() => {
        if (data) {
            setParsedNatalCardData(parseNatalCardData(data))
            setEnabled(true)
        }
    }, [data, setParsedNatalCardData, setEnabled])
    return (
        <div>
            <h1>Natal Card</h1>
            <div className={styles.NatalCardContent}>
                <div className={styles.NatalCardForm}>
                    <DateTime onChange={setSelectedDate} value={selectedDate}/>
                    <div className={styles.NatalCardFormPlace}>
                        <input onInput={(e) => setPlace(e.currentTarget.value)}/>
                        <button onClick={checkPlace}>Check</button>
                        <span>{realPlace}</span>
                    </div>
                    <button onClick={submitRequest}>Посчитать</button>
                </div>
                <ShouldRender should={!!parsedNatalCardData}>
                    <div className={styles.NatalCardDetails}>
                        <NatalChart
                            data={parsedNatalCardData}
                            astroPlace={astroPlace}
                            size={500}
                            date={realDate}
                            enabled={enabled}
                            onClickHouse={setSelectedHouse}
                            onClickSign={console.log}></NatalChart>
                        <SignsDetails data={parsedNatalCardData}/>
                        <HousesDetails data={parsedNatalCardData}/>
                        <AspectsDetails data={parsedNatalCardData}/>
                    </div>
                </ShouldRender>
                <ShouldRender should={!!selectedHouse}>
                    <HouseDescription
                        data={parsedNatalCardData}
                        onClose={() => setSelectedHouse(undefined)}
                        house={selectedHouse as IHouse}/>
                </ShouldRender>
            </div>
        </div>
    )
}
