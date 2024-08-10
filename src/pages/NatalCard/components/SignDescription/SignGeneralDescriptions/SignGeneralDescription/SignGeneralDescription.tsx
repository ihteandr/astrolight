import { useMemo } from 'react'
import { SIGNS_SYMBOL_DATA } from '../../../../../../data/sings-data/SignsData'
import { EAstroAspectType, IHouse } from '../../../../../../types/astro'
import { EAstroSigns, ISign } from '../../../../../../types/signs'
import styles from './SignGeneralDescription.module.css'
import { InfoDescription } from '../../../../../../components/InfoDescription/InfoDescription'
import { IExplanation, TDictionary } from '../../../../../../types/dicrionary'
import { EOpenAiType } from '../../../../../../types/openai'
import { InfoItem } from '../../../../../../components/InfoItem/InfoItem'
import { ZODIAC_SYMBOL_DATA } from '../../../../../../data/zodiac/ZodiacData'
import ShouldRender from '../../../../../../atoms/functional/ShouldRender'
export type SunDescriptionProps = {
    data: any,
    sign: ISign
}
export function SignGeneralDescription ({ data, sign }: SunDescriptionProps) {
    const generalSing: ISign = sign
    const generalSignData = SIGNS_SYMBOL_DATA[generalSing.name]
    const zodiacData = ZODIAC_SYMBOL_DATA[generalSing.zodiac]
    const conjunctionAspectDictionary = SIGNS_SYMBOL_DATA[generalSing.name].houseMatchAndAspectMatch?.[(generalSing.house as IHouse).number]?.find((matchItem) => {
        return matchItem.aspects.includes(EAstroAspectType.CONJUNCTION)
    })?.dictionary

    const positiveAspectDictionary = SIGNS_SYMBOL_DATA[generalSing.name].houseMatchAndAspectMatch?.[(generalSing.house as IHouse).number]?.find((matchItem) => {
        return matchItem.aspects.includes(EAstroAspectType.TRINE) || matchItem.aspects.includes(EAstroAspectType.SEXTILE)
    })?.dictionary
    
    const negativeAspectDictionary = SIGNS_SYMBOL_DATA[generalSing.name].houseMatchAndAspectMatch?.[(generalSing.house as IHouse).number]?.find((matchItem) => {
        return matchItem.aspects.includes(EAstroAspectType.QUADRATURE) || matchItem.aspects.includes(EAstroAspectType.OPPOSITION)
    })?.dictionary

    const conjunctionAspectsMatchDictionary = useMemo<IExplanation[]>(() => {
        if (conjunctionAspectDictionary) {
            const aspects = generalSing.aspects.filter((aspect) => {
                return aspect.type === EAstroAspectType.CONJUNCTION
            })
            return aspects.map((aspect) => {
                const secondSign = aspect.sign1.name === EAstroSigns.SUN ? aspect.sign2 : aspect.sign1;
                return conjunctionAspectDictionary?.[secondSign.name]
            }).filter(Boolean) as IExplanation[]
        } else {
            return []
        }
    }, [generalSing, conjunctionAspectDictionary])


    const positiveAspectsMatchDictionary = useMemo<IExplanation[]>(() => {
        if (positiveAspectDictionary) {
            const aspects = generalSing.aspects.filter((aspect) => {
                return aspect.type === EAstroAspectType.TRINE || aspect.type === EAstroAspectType.SEXTILE
            })
            return aspects.map((aspect) => {
                const secondSign = aspect.sign1.name === EAstroSigns.SUN ? aspect.sign2 : aspect.sign1;
                return positiveAspectDictionary?.[secondSign.name]
            }).filter(Boolean) as IExplanation[]
        } else {
            return []
        }
    }, [generalSing, positiveAspectDictionary])


    const negativeAspectsMatchDictionary = useMemo<IExplanation[]>(() => {
        if (negativeAspectDictionary) {
            const aspects = generalSing.aspects.filter((aspect) => {
                return aspect.type === EAstroAspectType.OPPOSITION || aspect.type === EAstroAspectType.QUADRATURE
            })
            return aspects.map((aspect) => {
                const secondSign = aspect.sign1.name === EAstroSigns.SUN ? aspect.sign2 : aspect.sign1;
                return negativeAspectDictionary?.[secondSign.name]
            }).filter(Boolean) as IExplanation[]
        } else {
            return []
        }
    }, [generalSing, negativeAspectDictionary])

    const signCrossDictionary = generalSignData.crossMatchDictinonary?.[zodiacData.cross];
    const signElementDictionary = generalSignData.elementMatchDictionary?.[zodiacData.element]
    
    const descriptions = [signCrossDictionary, signElementDictionary].filter(Boolean)
    return (
        <div className={styles.SignGeneralDescription}>
            <h4>Особености для {generalSignData?.label} </h4>
            <h5>Интерпретации</h5>
            <div className={styles.SignGeneralDescriptionItems}>
                {conjunctionAspectsMatchDictionary.map((dictionary, index) => (
                    <InfoItem type='modal' explanation={dictionary} key={index} openAiType={EOpenAiType.INTERPRETATION} />
                ))}
                {positiveAspectsMatchDictionary.map((dictionary, index) => (
                    <InfoItem type='modal' explanation={dictionary} key={index} openAiType={EOpenAiType.INTERPRETATION} />
                ))}
                {negativeAspectsMatchDictionary.map((dictionary, index) => (
                    <InfoItem type='modal' explanation={dictionary} key={index} openAiType={EOpenAiType.INTERPRETATION} />
                ))}
                {descriptions.map((description) => (
                    <InfoItem type='modal' explanation={description as IExplanation} openAiType={EOpenAiType.INTERPRETATION}/>
                ))}
            </div>
        </div>
    )
}