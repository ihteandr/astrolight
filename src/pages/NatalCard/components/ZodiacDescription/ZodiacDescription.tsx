import { useMemo } from 'react';
import { SideModal } from '../../../../components/SideModal/SideModal'
import { EAstroSigns, EAstroZodiacSign, ISign } from '../../../../types/signs'
import styles from './ZodiacDescription.module.css'
import { ZODIAC_SYMBOL_DATA } from '../../../../data/zodiac/ZodiacData';
import { SignInfo } from '../SignInfo/SignInfo';
import { INatalChartVisibilityOptions, NatalChart } from '../NatalChart/NatalChart';
import { EAspectMajority, IAstroAspect, IHouse } from '../../../../types/astro';

export type ZodiacDescriptionProps = {
    zodiac: EAstroZodiacSign,
    onClose: () => void,
    data: any;
    onClickZodiac?: (zodiac: EAstroZodiacSign) => void,
    onClickHouse?: (house: IHouse) => void,
    onClickSign?: (sign: ISign) => void,
}

export function ZodiacDescription ({ zodiac, data, onClickZodiac, onClickHouse, onClickSign, onClose }: ZodiacDescriptionProps) {
    const zodiacSigns = useMemo<ISign[]>(() => {
        return data.signs.filter((sign: ISign) => {
            return sign.zodiac === zodiac
        })
    }, [data, zodiac])
    
    const zodiacData = ZODIAC_SYMBOL_DATA[zodiac];
    const executives = useMemo<ISign[]>(() => {
        return zodiacData.executive.map((info) => {
            return data.signs.map((sign: ISign) => {
                if (sign.name === info.astroSign) {
                    return {
                        ...sign,
                        isRetro: info.isRetro
                    }
                }
                return null
            }).filter(Boolean)
        }).flat()
    }, [data])

    const exaltations = useMemo<ISign[]>(() => {
        return zodiacData.exaltation.map((info) => {
            return data.signs.map((sign: ISign) => {
                if (sign.name === info.astroSign) {
                    return {
                        ...sign,
                        isRetro: info.isRetro
                    }
                }
                return null
            }).filter(Boolean)
        }).flat()
    }, [data])

    const exils = useMemo<ISign[]>(() => {
        return zodiacData.exil.map((info) => {
            return data.signs.map((sign: ISign) => {
                if (sign.name === info.astroSign) {
                    return {
                        ...sign,
                        isRetro: info.isRetro
                    }
                }
                return null
            }).filter(Boolean)
        }).flat()
    }, [data])


    const phalluses = useMemo<ISign[]>(() => {
        return zodiacData.phallus.map((info) => {
            return data.signs.map((sign: ISign) => {
                if (sign.name === info.astroSign) {
                    return {
                        ...sign,
                        isRetro: info.isRetro
                    }
                }
                return null
            }).filter(Boolean)
        }).flat()
    }, [data])

    const visibilityOptions = useMemo<INatalChartVisibilityOptions>(() => {
        const signs = [...executives, ...exaltations, ...exils, ...phalluses].map((sign) => sign.name)
        return {
            // houses: [],
            aspects: data.aspects.filter((aspect: IAstroAspect) => {
                return signs.find((signName: EAstroSigns) => {
                    return aspect.isContainsSign(signName) && aspect.majority === EAspectMajority.MAJOR
                })
            }),
            highlightZodiac: [zodiac]
            //highlightSigns: signs
        }
    }, [executives, exaltations, exils, phalluses, data])
    const leftBar = <div className={styles.ZodiacDescriptionLeftBar}>
        <NatalChart
            onClickHouse={onClickHouse}
            onClickSign={onClickSign}
            onClickZodiac={onClickZodiac}
            data={data}
            size={500}
            visibilityOptions={visibilityOptions} />
    </div>
    return (
        <SideModal onClose={onClose} leftBar={leftBar}>
            <h2>Задиак {zodiacData.label}</h2>
            <h5>Управители Знака</h5>
            {executives.map((sign) => (
                <SignInfo sign={sign} withAspects={true} withHouse={true} key={sign.name}/>
            ))}

            <h5>Экзальтации Знака</h5>
            {exaltations.map((sign) => (
                <SignInfo sign={sign} withAspects={true} withHouse={true} key={sign.name}/>
            ))}

            <h5>Экскилы Знака</h5>
            {exils.map((sign) => (
                <SignInfo sign={sign} withAspects={true} withHouse={true} key={sign.name}/>
            ))}
            <h5>Фаллы Знака</h5>
            {phalluses.map((sign) => (
                <SignInfo sign={sign} withAspects={true} withHouse={true} key={sign.name}/>
            ))}
            <h5>Символы В Знаке</h5>
            {zodiacSigns.map((sign) => (
                <SignInfo sign={sign} withAspects={true} withHouse={true} key={sign.name}/>
            ))}
        </SideModal>
    )
}