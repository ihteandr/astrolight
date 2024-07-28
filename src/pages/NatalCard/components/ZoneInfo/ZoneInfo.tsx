import clsx from 'clsx'
import { SvgIcon } from '../../../../atoms/Icon/SvgIcon'
import { ZODIAC_SYMBOL_DATA } from '../../../../data/zodiac/ZodiacData'
import { EAstroZodiacSign, IZone } from '../../../../types/signs'
import { setZeros } from '../../../../utils/format.utils'
import styles from './ZoneInfo.module.css'
import ShouldRender from '../../../../atoms/functional/ShouldRender'

export type ZoneInfoProps = {
    zone: IZone,
    zodiac?: EAstroZodiacSign
}

export function ZoneInfo ({ zone, zodiac }: ZoneInfoProps) {
    const zodiacSymbol = zodiac ? ZODIAC_SYMBOL_DATA[zodiac] : null
        
    return (
        <div className={styles.ZoneInfo}>
            <ShouldRender should={!!zodiac}>
                {() => (
                    <span className={styles.ZoneInfoZodiac}>
                        <SvgIcon
                            name={zodiacSymbol?.sign || 'none'}
                            size={16}
                            className={clsx('element', zodiacSymbol?.element)}/>
                    </span>
                    
                )}
            </ShouldRender>
            <span className={styles.ZoneInfoPlace}>
                <span>{zone.hour}°</span>
                <span>{setZeros(zone.minute, 2)}’</span>
                <span>{setZeros(zone.second, 2)}’’</span>    
            </span>
        </div>
    )
}