import { EAstroElements } from "../elements/main";

export enum EAstroZodiacSign {
    ARIES = 'aries',
    TAURUS = 'taurus',
    GEMINI = 'gemini',
    CANCER = 'cancer',
    LEO = 'leo',
    VIRGO = 'virgo',
    LIBRA = 'libra',
    SCORPIO = 'scorpio',
    SAGITTARIUS = 'sagittarius',
    CAPRICORN = 'capricorn',
    AQUARIUS = 'aquarius',
    PISCES = 'pisces'
}

export type ZodiacSymbolDataType = {
    sign: EAstroZodiacSign,
    label: string,
    element: EAstroElements,
    order: number
}

export const ZODIAC_SYMBOL_DATA: {[k: string]: ZodiacSymbolDataType}  = {
    aries: {
        sign: EAstroZodiacSign.ARIES,
        label: 'Овен',
        element: EAstroElements.FIRE,
        order: 1
    },
    taurus: {
        sign: EAstroZodiacSign.TAURUS,
        label: 'Телец',
        element: EAstroElements.EARTH,
        order: 2
    },
    gemini: {
        sign: EAstroZodiacSign.GEMINI,
        label: 'Близницы',
        element: EAstroElements.WIND,
        order: 3
    },
    cancer: {
        sign: EAstroZodiacSign.CANCER,
        label: 'Рак',
        element: EAstroElements.WATER,
        order: 4
    },
    leo: {
        sign: EAstroZodiacSign.LEO,
        label: 'Лев',
        element: EAstroElements.FIRE,
        order: 5
    },
    virgo: {
        sign: EAstroZodiacSign.VIRGO,
        label: 'Дева',
        element: EAstroElements.EARTH,
        order: 6
    },
    libra: {
        sign: EAstroZodiacSign.LIBRA,
        label: 'Весы',
        element: EAstroElements.WIND,
        order: 7
    },
    scorpio: {
        sign: EAstroZodiacSign.SCORPIO,
        label: 'Скорпион',
        element: EAstroElements.WATER,
        order: 8
    },
    sagitarius: {
        sign: EAstroZodiacSign.SAGITTARIUS,
        label: 'Стрелец',
        element: EAstroElements.FIRE,
        order: 9
    },
    capricorn: {
        sign: EAstroZodiacSign.CAPRICORN,
        label: 'Козерог',
        element: EAstroElements.EARTH,
        order: 10
    },
    aquarius: {
        sign: EAstroZodiacSign.AQUARIUS,
        label: 'Водолей',
        element: EAstroElements.WIND,
        order: 11
    },
    pisces: {
        sign: EAstroZodiacSign.PISCES,
        label: 'Рыбы',
        element: EAstroElements.WATER,
        order: 12
    }
}