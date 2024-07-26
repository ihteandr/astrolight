import clsx from "clsx"
import { SvgIcon } from "../../../../atoms/Icon/SvgIcon"
import ShouldRender from "../../../../atoms/functional/ShouldRender"
import { SIGNS_SYMBOL_DATA } from "../../../../data/sings-data/SignsData"
import { ZODIAC_SYMBOL_DATA } from "../../../../data/zodiac/ZodiacData"
import { ISign } from "../../../../types/signs"
import { ZoneInfo } from "../ZoneInfo/ZoneInfo"
import styles from './SignInfo.module.css'
import { AspectInfo } from "../AspectInfo/AspectInfo"
import { useCallback, useState } from "react"
import { SignIcon } from "../../../../atoms/Icon/SingIcon"
export type SignInfoProps = {
    sign: ISign,
    withAspects?: boolean,
    withHouse?: boolean,
    onClickSign?: (sign: ISign) => void,
    selectable?: boolean
}

export function SignInfo ({ sign, onClickSign, selectable = false, withAspects = false, withHouse = false }: SignInfoProps) {
    const [shouldShowAspects, setShouldShowAspect] = useState(false)
    const signSymbolData = SIGNS_SYMBOL_DATA[sign.name]
    const toggleShowAspects = useCallback(() => {
        setShouldShowAspect((shouldShow) => !shouldShow)
    }, [setShouldShowAspect])
    return (
        <ShouldRender should={!!signSymbolData}>
            <div className={styles.SignInfo}>
                <div className={styles.SignInfoName}>
                    <div className={clsx(styles.SingSymbol, { [styles.SignSelectable]: selectable })} onClick={() => { onClickSign?.(sign) }}>
                        <SignIcon
                            isRetro={sign.isRetro}
                            name={sign.name}
                            size={24}
                            className={clsx('sign', sign.name,  'element', signSymbolData?.elements[0] || 'NoElement')}
                            />
                            <span className={clsx(styles.SingName, 'sign-label', sign.name)}>{signSymbolData?.label}</span>
                    </div>
                    <ZoneInfo zone={sign.zodiacZone} zodiac={sign.zodiac}/>
                    <ShouldRender should={withHouse && !!sign.house}>
                        <span className={styles.SignHouseLabel}>Дом {sign.house?.label}</span>
                    </ShouldRender>
                    <ShouldRender should={withAspects}>
                        <span className={styles.SIgnInfoAspectsButton} onClick={toggleShowAspects}>
                            {shouldShowAspects ? 'Скрыть Аспекты' : 'Показать Аспекты'}
                        </span>
                    </ShouldRender>
                </div>
                <ShouldRender should={shouldShowAspects}>
                    <div className={styles.SignInfoAspects}>
                        {sign.aspects.map((aspect, index) => (
                            <AspectInfo aspect={aspect} key={index} perspective={sign.name}/>
                        ))}
                    </div>
                </ShouldRender>
            </div>
        </ShouldRender>
        
    )
}