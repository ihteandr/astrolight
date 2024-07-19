import { ZODIAC_ORDER } from "../data/zodiac/ZodiacData"

export function parseNatalCardData (data: any) {
    if (!data) return undefined
    return {
        ...data,
        signs: data.signs.map((sign: any) => {
            const zodiacIndex = sign.zodiac - 1
            return {
                ...sign,
                zodiac: ZODIAC_ORDER[zodiacIndex],
                zodiacIndex
            }
        }),
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
        }
    }
}