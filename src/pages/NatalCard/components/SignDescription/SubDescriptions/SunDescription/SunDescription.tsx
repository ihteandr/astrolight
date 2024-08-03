import { useMemo } from 'react'
import { SIGNS_SYMBOL_DATA } from '../../../../../../data/sings-data/SignsData'
import { EAstroAspectType, IHouse } from '../../../../../../types/astro'
import { EAstroSigns, ISign } from '../../../../../../types/signs'
import styles from './SunDescription.module.css'
import { InfoDescription } from '../../../../../../components/InfoDescription/InfoDescription'
import { IExplanation } from '../../../../../../types/dicrionary'
import { EOpenAiType } from '../../../../../../types/openai'
export type SunDescriptionProps = {
    data: any
}
export function SunDescription ({ data }: SunDescriptionProps) {
    const sunSign: ISign = data.signs.find((sign: ISign) => sign.name === EAstroSigns.SUN)
    
    const conjunctionAspectDictionary = SIGNS_SYMBOL_DATA[EAstroSigns.SUN].houseMatchAndAspectMatch?.[(sunSign.house as IHouse).number]?.find((matchItem) => {
        return matchItem.aspects.includes(EAstroAspectType.CONJUNCTION)
    })?.dictionary
    const conjunctionAspectsMatchDictionary = useMemo<IExplanation[]>(() => {
        if (conjunctionAspectDictionary) {
            const aspects = sunSign.aspects.filter((aspect) => {
                return aspect.type === EAstroAspectType.CONJUNCTION
            })
            return aspects.map((aspect) => {
                const secondSign = aspect.sign1.name === EAstroSigns.SUN ? aspect.sign2 : aspect.sign1;
                return conjunctionAspectDictionary?.[secondSign.name]
            }).filter(Boolean) as IExplanation[]
        } else {
            return []
        }
    }, [sunSign, conjunctionAspectDictionary])
    return (
        <div className={styles.SunDescription}>
            <h4>Спецефичные для Солнца Особености</h4>
            <h5>Интерпретации</h5>
            {conjunctionAspectsMatchDictionary.map((dictionary) => (
                <InfoDescription explanation={dictionary} openAiType={EOpenAiType.INTERPRETATION} />
            ))}
        </div>
    )
}