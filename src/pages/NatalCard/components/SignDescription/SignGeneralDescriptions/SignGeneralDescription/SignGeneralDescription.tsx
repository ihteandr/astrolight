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
                if (generalSing.name === EAstroSigns.MOON) {
                    return false
                }
                return aspect.type === EAstroAspectType.CONJUNCTION
            })
            return aspects.map((aspect) => {
                const secondSign = aspect.sign1.name === generalSing.name ? aspect.sign2 : aspect.sign1;
                return conjunctionAspectDictionary?.[secondSign.name]
            }).filter(Boolean) as IExplanation[]
        } else {
            return []
        }
    }, [generalSing, conjunctionAspectDictionary])


    const positiveAspectsMatchDictionary = useMemo<IExplanation[]>(() => {
        if (positiveAspectDictionary) {
            const aspects = generalSing.aspects.filter((aspect) => {
                if (generalSing.name === EAstroSigns.MOON) {
                    return aspect.type === EAstroAspectType.TRINE || aspect.type === EAstroAspectType.SEXTILE || aspect.type === EAstroAspectType.CONJUNCTION
                }
                return aspect.type === EAstroAspectType.TRINE || aspect.type === EAstroAspectType.SEXTILE
            })
            return aspects.map((aspect) => {
                const secondSign = aspect.sign1.name === generalSing.name ? aspect.sign2 : aspect.sign1;
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
                const secondSign = aspect.sign1.name === generalSing.name ? aspect.sign2 : aspect.sign1;
                return negativeAspectDictionary?.[secondSign.name]
            }).filter(Boolean) as IExplanation[]
        } else {
            return []
        }
    }, [generalSing, negativeAspectDictionary])

    const signCrossDictionary = generalSignData.crossMatchDictinonary?.[zodiacData.cross];
    const signElementDictionary = generalSignData.elementMatchDictionary?.[zodiacData.element]
    const signSexDictionary = generalSignData.zodiacSexMatchDictionary?.[zodiacData.sex];
    const descriptions = [signCrossDictionary, signElementDictionary, signSexDictionary].filter(Boolean)
    const aspectDescriptions: IExplanation[] = [conjunctionAspectsMatchDictionary, positiveAspectsMatchDictionary, negativeAspectsMatchDictionary].flat().filter(Boolean)
    return (
        <ShouldRender should={aspectDescriptions.length > 0 || descriptions.length > 0}>
            <div className={styles.SignGeneralDescription}>
                <div className={styles.SignGeneralDescriptionItems}>
                <div>
                    <InfoItem
                        withElaboration={true}
                        openAiType={EOpenAiType.INTERPRETATION}
                        explanation={sign.isRetro ? generalSignData.retro?.zodiacMatchDictionary[sign.zodiac] : generalSignData.zodiacMatchDictionary[sign.zodiac]}
                        type='modal'/>
                </div>
                <ShouldRender should={!!sign.house}>
                    {() => (
                        <div>
                            <InfoItem
                                withElaboration={true}
                                openAiType={EOpenAiType.INTERPRETATION}
                                explanation={sign.isRetro ?  generalSignData.retro?.houseMatchDictionary[(sign.house as IHouse).number] : generalSignData.houseMatchDictionary[(sign.house as IHouse).number]}
                                type='modal'/>      
                        </div>
                    )}
                </ShouldRender>
                    {aspectDescriptions.map((dictionary, index) => (
                        <InfoItem type='modal' explanation={dictionary as IExplanation} key={index} openAiType={EOpenAiType.INTERPRETATION} />
                    ))}
                    {descriptions.map((description, index) => (
                        <InfoItem type='modal' explanation={description as IExplanation} key={index} openAiType={EOpenAiType.INTERPRETATION}/>
                    ))}
                </div>
            </div>
        </ShouldRender>
    )
}