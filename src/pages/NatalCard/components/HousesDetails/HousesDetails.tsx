import { useCallback, useMemo } from "react";
import styles from './HousesDetails.module.css'
import { ISign } from "../../../../types/signs";
import { SIGNS_SYMBOL_DATA } from "../../../../data/sings-data/SignsData";
import { SvgIcon } from "../../../../atoms/Icon/SvgIcon";
import clsx from "clsx";
import { ZODIAC_ORDER, ZODIAC_SYMBOL_DATA } from "../../../../data/zodiac/ZodiacData";
import { sortBy } from "lodash";
import { setZeros } from "../../../../utils/format.utils";
import { IHouse } from "../../../../types/astro";
import { ZoneInfo } from "../ZoneInfo/ZoneInfo";
export type HousesDetailsType = {
    data?: any;
    onClickHouse?: (house: IHouse) => void
}

export function HousesDetails ({ data, onClickHouse }: HousesDetailsType) {
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
                return (
                    <div className={styles.HouseRow} key={house.number} onClick={() => { onClickHouse?.(house) }}>
                        <div className={styles.HouseSymbol}>
                            <span className={clsx('house-label', `house${house.number}`)}>Дом {house.number}</span>
                        </div>
                        <div className={styles.HouseInfo}>
                            <ZoneInfo zone={house.zodiacZone} zodiac={house.zodiac}/>
                        </div>
                    </div>
                )    
            })}
        </div>
    )
}