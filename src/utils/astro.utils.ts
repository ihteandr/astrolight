import { ZODIAC_ORDER } from "../data/zodiac/ZodiacData"

export function parseNatalCardData (data: any) {
    if (!data) return undefined
    return {
        ...data,
        signs: data.signs.map((sign: any) => {
            return {
                ...sign,
                zodiac: ZODIAC_ORDER[sign.zodiac]
            }
        })
    }
}