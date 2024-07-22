import { useMemo } from "react"
import { SideModal } from "../../../../components/SideModal/SideModal"
import { EAspectMajority, EAstroAspectType, IAstroAspect, IAstroSign, IHouse } from "../../../../types/astro"
import { SignInfo } from "../SignInfo/SignInfo"
import styles from './HouseDescription.module.css'
import { EAstroSigns, ISign } from "../../../../types/signs"
import { ZODIAC_SYMBOL_DATA } from "../../../../data/zodiac/ZodiacData"
import { ZoneInfo } from "../ZoneInfo/ZoneInfo"
import { HOUSES_BELONGS_DICTIONARY, HOUSES_DATA, HOUSE_AXIE_DATA, HOUSE_SQUARE_DICTIONARY } from "../../../../data/houses/HousesData"
import { InfoItem } from "../../../../components/InfoItem/InfoItem"
import { INatalChartVisibilityOptions, NatalChart } from "../NatalChart/NatalChart"
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
    const houseSigns = useMemo<ISign[]>(() => {
        return data.signs.filter((sign: ISign) => {
            return house.isContainsSign(sign)
        })
    }, [house, data])
    const houseData = HOUSES_DATA[house.number - 1]
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
        <NatalChart data={data} enabled={true} size={500} visibilityOptions={visibilityOptions} />
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
                    <InfoItem explanation={HOUSE_AXIE_DATA[houseData.axie]}/>
                    <h5 style={{ textAlign: 'left' }}>Куспид</h5>
                    <ZoneInfo zodiac={house.zodiac} zone={house.zodiacZone}/>
                    <h5 style={{ textAlign: 'left' }}>Исторические Названия</h5>
                    <p>{houseData.historicalNames.join(', ')}</p>
                    <h5 style={{ textAlign: 'left' }}>Управители</h5>
                    {dominants.map((sign) => (
                        <SignInfo key={sign.name} sign={sign} withAspects={true} withHouse={true} />
                    ))}
                    <h5 style={{ textAlign: 'left' }}>Символы в доме</h5>
                    {houseSigns.map((sign) => (
                        <SignInfo key={sign.name} sign={sign} withAspects={true} withHouse={true}/>
                    ))}
                </div>
            </div>
        </SideModal>
    )
}