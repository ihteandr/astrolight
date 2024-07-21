import { ZODIAC_ORDER } from "../data/zodiac/ZodiacData"
import { IAstroAspect } from "../types/astro"
import { ISign } from "../types/signs"

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
    const aspects: IAstroAspect[] =  data.aspects.map((aspect: any) => {
        return {
            ...aspect,
            sign1: signs.find((sign) => sign.name === aspect.sign1),
            sign2: signs.find((sign) => sign.name === aspect.sign2),
            fastSign: signs.find((sign) => sign.name === aspect.fastSign),
        }
    })
    return {
        ...data,
        houses: {
            ...data.houses,
            positions: data.houses.positions.map((house: any) => {
                const zodiacIndex = house.zodiac - 1
                return {
                    ...house,
                    zodiac: ZODIAC_ORDER[zodiacIndex],
                    zodiacIndex
                }    
            })
        },
        signs,
        aspects
    }
}