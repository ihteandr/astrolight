import { useMemo } from "react";
import styles from './SignsDetails.module.css'
import { ISign } from "../../../../types/signs";
import { SIGNS_SYMBOL_DATA } from "../../../../data/sings-data/SignsData";
import { SvgIcon } from "../../../../atoms/Icon/SvgIcon";
import clsx from "clsx";
import { ZODIAC_ORDER, ZODIAC_SYMBOL_DATA } from "../../../../data/zodiac/ZodiacData";
import { sortBy } from "lodash";
import { setZeros } from "../../../../utils/format.utils";
import { ZoneInfo } from "../ZoneInfo/ZoneInfo";
import { SignInfo } from "../SignInfo/SignInfo";
export type SignsDetailsType = {
    data?: any;
    onClickSign?: (sign: ISign) => void
}

export function SignsDetails ({ data, onClickSign }: SignsDetailsType) {
    const signs = useMemo<ISign[]>(() => {
        if (data) {
            return sortBy(data.signs, (sign) => {
                return Object.keys(SIGNS_SYMBOL_DATA).findIndex((singName) => singName === sign.name)
            })
        }
        return []
    }, [data])
    return (
        <div className={styles.SignsDetails}>
            {signs.map((sign) => {
                return (
                    <SignInfo key={sign.name} selectable={true} onClickSign={onClickSign} sign={sign} withHouse={true} />
                )           
            })}
        </div>
    )
}