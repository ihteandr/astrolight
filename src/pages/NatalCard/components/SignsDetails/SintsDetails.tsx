import { useMemo } from "react";
import styles from './SignsDetails.module.css'
import { ISign } from "../../../../types/signs";
import { SIGNS_SYMBOL_DATA } from "../../../../data/sings-data/SignsData";
import { SvgIcon } from "../../../../atoms/Icon/SvgIcon";
import clsx from "clsx";
import { ZODIAC_ORDER, ZODIAC_SYMBOL_DATA } from "../../../../data/zodiac/ZodiacData";
import { sortBy } from "lodash";
import { setZeros } from "../../../../utils/format.utils";
export type SignsDetailsType = {
    data?: any;
}

export function SignsDetails ({ data }: SignsDetailsType) {
    const signs = useMemo<ISign[]>(() => {
        if (data) {
            return sortBy(data.signs, (sign) => {
                return SIGNS_SYMBOL_DATA.findIndex((symbolData) => symbolData.sign === sign.name)
            })
        }
        return []
    }, [data])
    console.log('signs', signs, data)
    return (
        <div className={styles.SignsDetails}>
            {signs.map((sign) => {
                const signSymbolData = SIGNS_SYMBOL_DATA.find((symbolData) => symbolData.sign === sign.name)
                if (signSymbolData) {
                    console.log(ZODIAC_SYMBOL_DATA, ZODIAC_ORDER, sign.zodiac, sign)
                    const zodiacSymbol = ZODIAC_SYMBOL_DATA[sign.zodiac]
                    return (
                        <div className={styles.SingRow}>
                            <div className={styles.SingSymbol}>
                                <SvgIcon
                                    name={sign.name}
                                    size={24}
                                    className={clsx('sign', sign.name,  'element', signSymbolData.elements[0] || 'NoElement')}
                                 />
                                 <span className={clsx('sign-label', sign.name)}>{signSymbolData.label}</span>
                            </div>
                            <div className={styles.SignInfo}>
                                <SvgIcon
                                    name={zodiacSymbol.sign}
                                    size={16}
                                    className={clsx('element', zodiacSymbol.element)}/>
                                <span>{sign.zodiacZone.hour}°</span>
                                <span>{setZeros(sign.zodiacZone.minute, 2)}’</span>
                                <span>{setZeros(sign.zodiacZone.hour, 2)}’’</span>
                            </div>
                        </div>
                    )    
                }
                return null                
            })}
        </div>
    )
}