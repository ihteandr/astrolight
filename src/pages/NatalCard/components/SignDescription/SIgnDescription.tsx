import { useMemo } from "react"
import { SideModal } from "../../../../components/SideModal/SideModal"
import { SIGNS_SYMBOL_DATA } from "../../../../data/sings-data/SignsData"
import { ISign } from "../../../../types/signs"
import { INatalChartVisibilityOptions, NatalChart } from "../NatalChart/NatalChart"
import { SignInfo } from "../SignInfo/SignInfo"
import styles from './SignDescription.module.css'
import { Aspect } from "../NatalChart/components/Aspect/Aspect"
import { IAstroAspect, IHouse } from "../../../../types/astro"
import { InfoItem } from "../../../../components/InfoItem/InfoItem"
import ShouldRender from "../../../../atoms/functional/ShouldRender"
import { EOpenAiType } from "../../../../types/openai"

export type SignDescriptionProps = {
    data?: any;
    sign: ISign,
    onClose: () => void
}

export function SignDescription ({ sign, data, onClose }: SignDescriptionProps) {
    const signSymbolData = SIGNS_SYMBOL_DATA[sign.name]
    const visibilityOptions = useMemo<INatalChartVisibilityOptions>(() => {
        return {
            houses: sign.house ? [sign.house.number] : [],
            highlightSigns: [sign.name],
            aspects: data.aspects.filter((aspect: IAstroAspect) => {
                return aspect.isContainsSign(sign.name)
            })
        }
    }, [sign, data])
    const leftBar = <div className={styles.SignDescriptionLeftBar}>
        <NatalChart data={data} hoverHightlight={false} size={500} visibilityOptions={visibilityOptions} />
    </div>
    return (
        <SideModal onClose={onClose} leftBar={leftBar}>
            <h2>{signSymbolData?.label}</h2>
            <SignInfo sign={sign} withAspects={true} withHouse={true} />  
            <h5>Интерпретации</h5>
            <div>
                <InfoItem
                    openAiType={EOpenAiType.INTERPRETATION}
                    explanation={signSymbolData.zodiacMatchDictionary[sign.zodiac]}
                    type='modal'/>
            </div>
            <ShouldRender should={!!sign.house}>
                {() => (
                    <div>
                        <InfoItem
                            openAiType={EOpenAiType.INTERPRETATION}
                            explanation={signSymbolData.houseMatchDictionary[(sign.house as IHouse).number]}
                            type='modal'/>      
                    </div>
                )}
            </ShouldRender>
        </SideModal>
    )
}