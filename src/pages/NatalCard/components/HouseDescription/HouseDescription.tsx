import { useMemo } from "react"
import { SideModal } from "../../../../components/SideModal/SideModal"
import { EAspectMajority, EAstroAspectType, IAstroAspect, IAstroSign, IHouse } from "../../../../types/astro"
import { SignInfo } from "../SignInfo/SignInfo"
import styles from './HouseDescription.module.css'
import { EAstroSigns, ISign } from "../../../../types/signs"
import { ZODIAC_SYMBOL_DATA } from "../../../../data/zodiac/ZodiacData"
import { ZoneInfo } from "../ZoneInfo/ZoneInfo"
import { HOUSES_BELONGS_DICTIONARY, HOUSES_DATA, HOUSES_AXIE_DICTIONARY, HOUSES_CROSS_DICTIONARY, HOUSE_SQUARE_DICTIONARY, HUOSES_ELEMENT_DICTIONARY } from "../../../../data/houses/HousesData"
import { InfoItem } from "../../../../components/InfoItem/InfoItem"
import { INatalChartVisibilityOptions, NatalChart } from "../NatalChart/NatalChart"
import ShouldRender from "../../../../atoms/functional/ShouldRender"
import { AspectInfo } from "../AspectInfo/AspectInfo"
export type HouseDescriptionProps = {
    house: IHouse,
    data: any,
    onClose: () => void
}

export function HouseDescription ({ onClose, data, house }: HouseDescriptionProps) {
    const dominants = useMemo<ISign[]>(() => {
        const houseDominantsInfo = house.dominants;
        return houseDominantsInfo.map((dominantInfo) => {
            return data.signs.map((sign: ISign) => {
                if (sign.name === dominantInfo.astroSign) {
                    return {
                        ...sign,
                        isRetro: dominantInfo.isRetro
                    }
                }
                return null
            }).filter(Boolean)
        }).flat()
    }, [house, data])
    const houseData = HOUSES_DATA[house.number - 1]
    const configurationsWithDIffrentHouseDominants = useMemo(() => (
        data.houses.positions.map((oHouse: IHouse) => {
            return oHouse.dominants.map((oDominant) => ({
                house: oHouse,
                initialDominants: oHouse.dominants,
                aspects: data.aspects.filter((aspect: IAstroAspect) => {
                    const found = house.dominants.find((dominant) => 
                        dominant.astroSign !== oDominant.astroSign &&
                        aspect.isContainsSign(oDominant.astroSign) &&
                        aspect.isContainsSign(dominant.astroSign)
                    )
                    return !!found
                }),
                dominant: {
                    ...data.signs.find((sign: ISign) => {
                        return sign.name === oDominant.astroSign;
                    }),
                    house: oHouse
                }
            }))
        }).flat().filter((config: any) => {
            return config.house.number !== house.number && config.aspects.length > 0
        })
    ), [house, data]);
    const cwdhdDescription = useMemo(() => houseData ? (
        <div>
            <h3>Аспекты доминанта {house.label} дома с доминантами других домов</h3>
            {configurationsWithDIffrentHouseDominants.map((config: any, index: number) => (
                <div key={index}>
                    <p>{houseData.currentDominantConfigurationsWithOtherDominants[config.house.number]}</p>
                    <SignInfo sign={config.dominant} withHouse={true} />
                    {config.aspects.map((aspect: IAstroAspect, index: number) => (
                        <AspectInfo aspect={aspect} key={index} perspective={config.dominant.name === aspect.sign1.name ? aspect.sign2.name : aspect.sign1.name}/>
                    ))}
                </div>
            ))}    
        </div>
    ) : null, [houseData, configurationsWithDIffrentHouseDominants])
    
    const houseSigns = useMemo<ISign[]>(() => {
        return data.signs.filter((sign: ISign) => {
            return house.isContainsSign(sign)
        })
    }, [house, data])
    const visibilityOptions = useMemo<INatalChartVisibilityOptions>(() => {
        const signs = [...dominants.map((sign) => sign.name), ...houseSigns.map((sign) => sign.name)]
        const signsHouses: number[] = [...dominants.map((sign) => sign.house?.number || 0), ...houseSigns.map((sign) => sign.house?.number || 0)]
        return {
            houses: [house.number, house.oppositeHouseNumber, ...signsHouses.filter(Boolean)],
            aspects: data.aspects.filter((aspect: IAstroAspect) => {
                return signs.find((signName: EAstroSigns) => {
                    return aspect.isContainsSign(signName) && aspect.majority === EAspectMajority.MAJOR
                })
            }),
            hightlightHouses: [house.number]
        }
    }, [houseSigns, dominants, house, data])
    const leftBar = <div className={styles.HouseDescriptionLeftBar}>
        <NatalChart data={data} size={500} visibilityOptions={visibilityOptions} />
    </div>
    return (
        <SideModal onClose={onClose} leftBar={leftBar}>
            <div className={styles.HouseDescription}>
                <h2 style={{ textAlign: 'center' }} >Дом {house.label}</h2>
                <div className={styles.HouseDescriptionGeneral}>
                    <p>{houseData.description}</p>
                    <h5 style={{ textAlign: 'left' }}>Пренадлежнасть</h5>
                    <div className={'flex gap'}>
                        {houseData.belongs.map((belongs) => (
                            <InfoItem key={belongs} explanation={HOUSES_BELONGS_DICTIONARY[belongs]}/>
                        ))}
                    </div>
                    <h5 style={{ textAlign: 'left' }}>Квадрат</h5>
                    <InfoItem explanation={HOUSE_SQUARE_DICTIONARY[houseData.square]}/>
                    <h5 style={{ textAlign: 'left' }}>Oсь</h5>
                    <InfoItem explanation={HOUSES_AXIE_DICTIONARY[houseData.axie]}/>
                    <h5 style={{ textAlign: 'left' }}>Крест</h5>
                    <InfoItem explanation={HOUSES_CROSS_DICTIONARY[houseData.cross]}/>
                    <h5 style={{ textAlign: 'left' }}>Стихия</h5>
                    <InfoItem explanation={HUOSES_ELEMENT_DICTIONARY[houseData.element]}/>
                    <h5 style={{ textAlign: 'left' }}>Куспид</h5>
                    <ZoneInfo zodiac={house.zodiac} zone={house.zodiacZone}/>
                    <h5 style={{ textAlign: 'left' }}>Интерпретации</h5>
                    <div className={'flex gap flex-column'}>
                        <InfoItem explanation={houseData.zodiacMatchDictionary[house.zodiac]} type='modal' />
                        {dominants.map((dominant) => (
                            <ShouldRender should={!!dominant.house} key={dominant.name}>
                                <InfoItem
                                    additionalDescription={<SignInfo sign={dominant} withAspects={false} withHouse={true} />}
                                    explanation={houseData.dominantPlaceDictionary[(dominant.house as IHouse).number]}
                                    type='modal' />
                            </ShouldRender>
                        ))}
                    </div>
                    <h5 style={{ textAlign: 'left' }}>Исторические Названия</h5>
                    <p>{houseData.historicalNames.join(', ')}</p>
                    <h5 style={{ textAlign: 'left' }}>Доминанты</h5>
                    {dominants.map((sign) => (
                        <SignInfo key={sign.name} sign={sign} withAspects={true} withHouse={true} />
                    ))}
                    <h5 style={{ textAlign: 'left' }}>Символы в доме</h5>
                    {houseSigns.map((sign) => (
                        <SignInfo key={sign.name} sign={sign} withAspects={true} withHouse={true}/>
                    ))}
                    <ShouldRender should={houseSigns.length === 0}>
                        <span>Доме нет планет</span>
                    </ShouldRender>
                    <InfoItem
                        explanation={{ label: `<b>Аспекты доминанта ${house.label} дома с доминантами других домов</b>`, description: {} }}
                        type='modal'
                        additionalDescription={cwdhdDescription}
                    />
                </div>
            </div>
        </SideModal>
    )
}