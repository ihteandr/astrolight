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
import { set } from "lodash";
import { SynthesisDescription } from "./components/SynthesisDescription/SynthesisDescription";
export default function NatalCard () {
    const [showSynthesis, setShowSynthesis] = useState(false)
    const [synthesisEnabled, setSynthesisEnabled] = useState(false)
    const [synthesisSigns, setSynthesisSigns] = useState<ISign[]>([])
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
        if (synthesisEnabled) {
        } else {
            resetSelected()
            setSelectedZodiac(zodiac)    
        }
    }, [resetSelected, setSelectedZodiac, synthesisEnabled])

    const selectSign = useCallback((sign: ISign) => {
        if (synthesisEnabled) {
            setSynthesisSigns(signs => signs.length <= 2 ? [...signs, sign] : signs)
        } else {
            resetSelected()
            setSelectedSign(sign)    
        }
    }, [resetSelected, setSelectedSign, synthesisEnabled])

    const selectHouse = useCallback((house: IHouse) => {
        if (synthesisEnabled) {

        } else {
            resetSelected()
            setSelectedHouse(house)    
        }
    }, [resetSelected, setSelectedHouse, synthesisEnabled])
    const displaySynthesis = useCallback(() => {
        setShowSynthesis(true)
    }, []);
    const disableSynthesis = useCallback(() => {
        setShowSynthesis(false)
        setSynthesisEnabled(false)
        setSynthesisSigns([])
    }, [])
    const enableSysthesis = useCallback(() => {
        setSynthesisEnabled(true)
        setSynthesisSigns([])
        setSelectedHouse(undefined);
        setSelectedSign(undefined);
        setSelectedZodiac(undefined);
    }, [setSynthesisEnabled, setSynthesisSigns, setSelectedHouse, setSelectedSign, setSelectedZodiac])
    return (
        <div>
            <h1>Натальная карта</h1>
            <div className={styles.NatalCardContent}>
                <div>
                    <button onClick={enableSysthesis}>Синтезировать</button>
                    <ShouldRender should={synthesisEnabled}>
                        <div>
                            <button onClick={disableSynthesis}>Отменить синтез</button>
                            <button onClick={displaySynthesis}>Результат синтеза</button>
                        </div>
                    </ShouldRender>
                </div>
                 <ShouldRender should={!!parsedNatalCardData}>
                    <div className={styles.NatalCardDetails}>
                        <div className={styles.NatalCardContent}>
                            <PersonDetails data={parsedNatalCardData} />
                            <NatalChart
                                selectedSigns={synthesisSigns}
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
                <ShouldRender should={showSynthesis}>
                    <SynthesisDescription signs={synthesisSigns} onClose={disableSynthesis} />
                </ShouldRender>
            </div>
        </div>
    )
}
