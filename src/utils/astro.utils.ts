import { sortBy } from "lodash"
import { ZODIAC_ORDER, ZODIAC_SYMBOL_DATA } from "../data/zodiac/ZodiacData"
import { EAspectMajority, EAstroAspectAction, EAstroAspectType, IAstroAspect, IHouse } from "../types/astro"
import { EAstroSigns, ISign } from "../types/signs"

export function parseNatalCardData (data: any) {
    if (!data) return undefined
    const signs: ISign[] = data.signs.map((sign: any) => {
        const zodiacIndex = sign.zodiac - 1
        return {
            ...sign,
            zodiac: ZODIAC_ORDER[zodiacIndex],
            zodiacIndex
        }
    })

    const sortAspects = (aspects: IAstroAspect[]) => {
        const actionOrder: EAstroAspectAction[] = [
            EAstroAspectAction.DEPENDS_PLANETS,
            EAstroAspectAction.TENSE,
            EAstroAspectAction.HARMONIC,
            EAstroAspectAction.KARMIC,
            EAstroAspectAction.CREATIVE
        ]
        const typeOrder: EAstroAspectType[] = [
            EAstroAspectType.OPPOSITION,
            EAstroAspectType.QUADRATURE
        ]
        return sortBy(aspects, (aspect: IAstroAspect) => {
            const boost = aspect.majority === EAspectMajority.MAJOR ? 0 : 100000
            return boost + actionOrder.findIndex((action) => action === aspect.action) * 100 - typeOrder.findIndex((type) => type === aspect.type)
        })
    }
    const aspects: IAstroAspect[] =  sortAspects(data.aspects.map((aspect: any) => {
        const sign1 = aspect.sign1 === 'Ascident' || aspect.sign1 === 'Meridian' ? { name: aspect.sign1 } : {...signs.find((sign) => sign.name === aspect.sign1)};
        const sign2 = {...signs.find((sign) => sign.name === aspect.sign2)};
        const fastSign = {...signs.find((sign) => sign.name === aspect.fastSign)};
        return {
            ...aspect,
            sign1,
            sign2,
            fastSign,
            isSame: (otherAspect: IAstroAspect) => {
                return otherAspect.type === aspect.type
                    && (otherAspect.sign1.name === sign1.name || otherAspect.sign1.name === sign2.name)
                    && (otherAspect.sign2.name === sign1.name || otherAspect.sign2.name === sign2.name)
            },
            isContainsSign: (signName: EAstroSigns) => {
                return sign1.name === signName || sign2.name === signName
            }
        }
    }))
    
    const houses: IHouse[] = data.houses?.positions.map((house: any) => {
        const zodiacIndex = house.zodiac - 1
        const zodiac = ZODIAC_ORDER[zodiacIndex]
        const zodiacData = ZODIAC_SYMBOL_DATA[zodiac]
        const labels = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII']
        const oppositeHouseNumber = house.number > 6 ?  house.number - 6 : house.number + 6;
        return {
            ...house,
            zodiac,
            zodiacIndex,
            label: labels[house.number - 1],
            dominants: zodiacData.executive,
            oppositeHouseNumber,
            isContainsSign: (sign: ISign) => {
                let start = house.start;
                let end = house.end;
                if (start > end) {
                    if (sign.longitude > start) {
                        return sign.longitude < end + 360
                    } 
                    start -= 360;
                }
                
                return start < sign.longitude && end > sign.longitude
            }
        }    
    }) || [];
    signs.forEach((sign) => {
        sign.house = houses.find((house) => house.isContainsSign(sign) )
        sign.aspects = sortAspects(aspects.filter((aspect) => {
            return aspect.sign1.name === sign.name || aspect.sign2.name === sign.name
        }))
        sign.getAspect = (signName: EAstroSigns) => {
            return sign.aspects.find((aspect) => aspect.sign1.name === signName || aspect.sign2.name === signName) || null
        }
    })
    
    return {
        ...data,
        houses: {
            ...data.houses,
            positions: houses
        },
        signs,
        aspects
    }
}