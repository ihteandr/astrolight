import { useCallback, useEffect, useRef, useState } from "react";
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
import { EAstroZodiacSign, ISign } from "../../types/signs";
import { SignDescription } from "./components/SignDescription/SIgnDescription";
import { ZodiacDescription } from "./components/ZodiacDescription/ZodiacDescription";
import { PersonDetails } from "./components/PersonDetails/PersonDetails";
export default function NatalCard () {
    const [selectedHouse, setSelectedHouse] = useState<IHouse>()
    const [selectedSign, setSelectedSign] = useState<ISign>()
    const { request } = useParams()
    const [selectedZodiac, setSelectedZodiac] = useState<EAstroZodiacSign>()
    const [parsedNatalCardData, setParsedNatalCardData] = useState<any>()
    const { data } = useNatalCardData(JSON.parse(decode(request as string)))

    useEffect(() => {
        if (data) {
            setParsedNatalCardData(parseNatalCardData(data))
        }
    }, [data, setParsedNatalCardData])
    const resetSelected = useCallback(() => {
        setSelectedHouse(undefined);
        setSelectedSign(undefined);
        setSelectedZodiac(undefined);
    }, [setSelectedHouse, setSelectedSign, setSelectedZodiac])
    const selectZodiac = useCallback((zodiac: EAstroZodiacSign) => {
        resetSelected()
        setSelectedZodiac(zodiac)
    }, [resetSelected, setSelectedZodiac])

    const selectSign = useCallback((sign: ISign) => {
        resetSelected()
        setSelectedSign(sign)
    }, [resetSelected, setSelectedSign])

    const selectHouse = useCallback((house: IHouse) => {
        resetSelected()
        setSelectedHouse(house)
    }, [resetSelected, setSelectedHouse])
    return (
        <div>
            <h1>Натальная карта</h1>
            <div className={styles.NatalCardContent}>    
                 <ShouldRender should={!!parsedNatalCardData}>
                    <div className={styles.NatalCardDetails}>
                        <div className={styles.NatalCardContent}>
                            <PersonDetails data={parsedNatalCardData} />
                            <NatalChart
                                data={parsedNatalCardData}
                                size={500}
                                onClickZodiac={selectZodiac}
                                onClickHouse={selectHouse}
                                onClickSign={selectSign}></NatalChart>
                        </div>
                        <SignsDetails
                            onClickSign={setSelectedSign}
                            data={parsedNatalCardData}/>
                        <ShouldRender should={parsedNatalCardData?.houses?.positions.length > 0}>
                            <HousesDetails
                                onClickHouse={setSelectedHouse}
                                data={parsedNatalCardData}
                            />
                        </ShouldRender>
                        <AspectsDetails data={parsedNatalCardData}/>
                    </div>
                </ShouldRender>
                <ShouldRender should={!!selectedHouse}>
                    <HouseDescription
                        key={selectedHouse?.number}
                        data={parsedNatalCardData}
                        onClickZodiac={selectZodiac}
                        onClickHouse={selectHouse}
                        onClickSign={selectSign}
                        onClose={() => setSelectedHouse(undefined)}
                        house={selectedHouse as IHouse}/>
                </ShouldRender>

                <ShouldRender should={!!selectedSign}>
                    <SignDescription
                        key={selectedSign?.name}
                        onClickZodiac={selectZodiac}
                        onClickHouse={selectHouse}
                        onClickSign={selectSign}
                        data={parsedNatalCardData}
                        onClose={() => setSelectedSign(undefined)}
                        sign={selectedSign as ISign}/>
                </ShouldRender>
                <ShouldRender should={!!selectedZodiac}>
                    <ZodiacDescription
                        key={selectedZodiac}
                        onClickZodiac={selectZodiac}
                        onClickHouse={selectHouse}
                        onClickSign={selectSign}
                        data={parsedNatalCardData}
                        onClose={() => setSelectedZodiac(undefined)}
                        zodiac={selectedZodiac as EAstroZodiacSign}/>
                </ShouldRender>
            </div>
        </div>
    )
}
