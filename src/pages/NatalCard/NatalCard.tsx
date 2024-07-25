import { useCallback, useEffect, useState } from "react";
import { DateTime, DateTimeValue } from "../../components/DateTime/DateTime";
import { NatalChart } from "./components/NatalChart/NatalChart";
import styles from './NatalCard.module.css';
import { findPlace } from "../../utils/apis/google-geocoder";
import { IAstroPlace, IHouse } from "../../types/astro";
import { googleTimezoneApi } from "../../utils/apis/google-timezone";
import { momentDateToDateTimeValue, parseDateTimeValue } from "../../utils/date.utils";
import moment from "moment";
import { NatalCardDataParams, useNatalCardData } from "../../api/natal-card/natal-card.api";
import { parseNatalCardData } from "../../utils/astro.utils";
import ShouldRender from "../../atoms/functional/ShouldRender";
import { SignsDetails } from "./components/SignsDetails/SingsDetails";
import { HousesDetails } from "./components/HousesDetails/HousesDetails";
import { AspectsDetails } from "./components/AspectsDetails/AspectsDetails";
import { HouseDescription } from "./components/HouseDescription/HouseDescription";
import { useParams } from "react-router-dom";
import { decode, encode } from "js-base64";
import { ISign } from "../../types/signs";
import { SignDescription } from "./components/SignDescription/SIgnDescription";
export default function NatalCard () {
    const [selectedHouse, setSelectedHouse] = useState<IHouse>()
    const [selectedSign, setSelectedSign] = useState<ISign>()
    const { request } = useParams()
    const [parsedNatalCardData, setParsedNatalCardData] = useState<any>()
    
    const { mutate: fetchData, data } = useNatalCardData()
    useEffect(() => {
        if (request) {
            const requestData = JSON.parse(decode(request as string))
            fetchData(requestData)
        }
    }, [request])
    useEffect(() => {
        if (data) {
            setParsedNatalCardData(parseNatalCardData(data))
        }
    }, [data, setParsedNatalCardData])
    return (
        <div>
            <h1>Natal Card</h1>
            <div className={styles.NatalCardContent}>    
                 <ShouldRender should={!!parsedNatalCardData}>
                    <div className={styles.NatalCardDetails}>
                        <NatalChart
                            data={parsedNatalCardData}
                            size={500}
                            onClickHouse={setSelectedHouse}
                            onClickSign={setSelectedSign}></NatalChart>
                        <SignsDetails
                            onClickSign={setSelectedSign}
                            data={parsedNatalCardData}/>
                        <HousesDetails
                            onClickHouse={setSelectedHouse}
                            data={parsedNatalCardData}
                        />
                        <AspectsDetails data={parsedNatalCardData}/>
                    </div>
                </ShouldRender>
                <ShouldRender should={!!selectedHouse}>
                    <HouseDescription
                        data={parsedNatalCardData}
                        onClose={() => setSelectedHouse(undefined)}
                        house={selectedHouse as IHouse}/>
                </ShouldRender>

                <ShouldRender should={!!selectedSign}>
                    <SignDescription
                        data={parsedNatalCardData}
                        onClose={() => setSelectedSign(undefined)}
                        sign={selectedSign as ISign}/>
                </ShouldRender>
            </div>
        </div>
    )
}
