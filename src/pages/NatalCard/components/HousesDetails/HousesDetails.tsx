import { useMemo } from "react";
import styles from './HousesDetails.module.css'
import { ISign } from "../../../../types/signs";
import { SIGNS_SYMBOL_DATA } from "../../../../data/sings-data/SignsData";
import { SvgIcon } from "../../../../atoms/Icon/SvgIcon";
import clsx from "clsx";
import { ZODIAC_ORDER, ZODIAC_SYMBOL_DATA } from "../../../../data/zodiac/ZodiacData";
import { sortBy } from "lodash";
import { setZeros } from "../../../../utils/format.utils";
import { IHouse } from "../../../../types/astro";
export type HousesDetailsType = {
    data?: any;
}

export function HousesDetails ({ data }: HousesDetailsType) {
    const houses = useMemo<IHouse[]>(() => {
        if (data) {
            return sortBy(data.houses.positions, (house) => {
                return house.number
            })
        }
        return []
    }, [data])
    return (
        <div className={styles.HousesDetails}>
            {houses.map((house) => {
                const zodiacSymbol = ZODIAC_SYMBOL_DATA[house.zodiac]
                
                return (
                    <div className={styles.HouseRow} key={house.number}>
                        <div className={styles.HouseSymbol}>
                            <span className={clsx('house-label', `house${house.number}`)}>Дом {house.number}</span>
                        </div>
                        <div className={styles.HouseInfo}>
                            <SvgIcon
                                name={zodiacSymbol.sign}
                                size={16}
                                className={clsx('element', zodiacSymbol.element)}/>
                            <span>{house.zodiacZone.hour}°</span>
                            <span>{setZeros(house.zodiacZone.minute, 2)}’</span>
                            <span>{setZeros(house.zodiacZone.second, 2)}’’</span>
                        </div>
                    </div>
                )    
            })}
        </div>
    )
}