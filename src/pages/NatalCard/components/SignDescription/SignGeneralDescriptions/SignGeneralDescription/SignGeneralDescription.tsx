import { useEffect, useMemo } from 'react'
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
    
    const aspectsDictionaries = generalSing.house ? SIGNS_SYMBOL_DATA[generalSing.name].houseMatchAndAspectMatch?.[(generalSing.house as IHouse).number] : [];

    const aspectsExplanations = useMemo<IExplanation[]>(() => {
        const aspects = generalSing.aspects.filter((aspect) => {
            return aspectsDictionaries?.find((matchItem) => {
                return matchItem.aspects.includes(aspect.type)
            })
        })
        return aspects.map((aspect) => {
            const dictionary = aspectsDictionaries?.find((matchItem) => {
                return matchItem.aspects.includes(aspect.type)
            })
            const secondSign = aspect.sign1.name === generalSing.name ? aspect.sign2 : aspect.sign1;
            return dictionary?.dictionary[secondSign.name]
        }).filter(Boolean) as IExplanation[]
    }, [generalSing, aspectsDictionaries])
    
    const signCrossDictionary = generalSignData.crossMatchDictinonary?.[zodiacData.cross];
    const signElementDictionary = generalSignData.elementMatchDictionary?.[zodiacData.element]
    const signSexDictionary = generalSignData.zodiacSexMatchDictionary?.[zodiacData.sex];
    const descriptions = [signCrossDictionary, signElementDictionary, signSexDictionary].filter(Boolean)
    return (
        <div className={styles.SignGeneralDescription}>
            <div className={styles.SignGeneralDescriptionItems}>
            <div>
                <InfoItem
                    withElaboration={true}
                    openAiType={EOpenAiType.INTERPRETATION}
                    explanation={generalSignData.zodiacMatchDictionary[sign.zodiac]}
                    type='modal'/>
            </div>
            <ShouldRender should={sign.isRetro}>
                    {() => (
                        <div>
                            <InfoItem
                                withElaboration={true}
                                openAiType={EOpenAiType.INTERPRETATION}
                                explanation={generalSignData.retro?.zodiacMatchDictionary[sign.zodiac]}
                                type='modal'/>
                        </div>
                    )}
                </ShouldRender>
            <ShouldRender should={!!sign.house}>
                {() => (
                    <>
                        <div>
                            <InfoItem
                                withElaboration={true}
                                openAiType={EOpenAiType.INTERPRETATION}
                                explanation={generalSignData.houseMatchDictionary[(sign.house as IHouse).number]}
                                type='modal'/>      
                        </div>
                        <ShouldRender should={sign.isRetro}>
                            {() => (
                                <div>
                                    <InfoItem
                                        withElaboration={true}
                                        openAiType={EOpenAiType.INTERPRETATION}
                                        explanation={generalSignData.retro?.houseMatchDictionary[(sign.house as IHouse).number]}
                                        type='modal'/>      
                                </div>
                            )}
                        </ShouldRender>
                        
                    </>
                )}
            </ShouldRender>
                {aspectsExplanations.map((dictionary, index) => (
                    <InfoItem type='modal' explanation={dictionary as IExplanation} key={index} openAiType={EOpenAiType.INTERPRETATION} />
                ))}
                {descriptions.map((description, index) => (
                    <InfoItem type='modal' explanation={description as IExplanation} key={index} openAiType={EOpenAiType.INTERPRETATION}/>
                ))}
            </div>
        </div>
    )
}