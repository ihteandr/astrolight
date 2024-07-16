import { IAstroSign } from "../../types/astro";
import { EAstroZodiacSign, ECrossSign, EAstroSigns, ESexSign } from "../../types/signs";
import { EAstroElements } from "../elements/ElementsData";

export const ZODIAC_ORDER = [
    EAstroZodiacSign.ARIES,
    EAstroZodiacSign.TAURUS,
    EAstroZodiacSign.GEMINI,
    EAstroZodiacSign.CANCER,
    EAstroZodiacSign.LEO,
    EAstroZodiacSign.VIRGO,
    EAstroZodiacSign.LIBRA,
    EAstroZodiacSign.SCORPIO,
    EAstroZodiacSign.SAGITTARIUS,
    EAstroZodiacSign.CAPRICORN,
    EAstroZodiacSign.AQUARIUS,
    EAstroZodiacSign.PISCES
]

export type ZodiacSymbolDataType = {
    sign: EAstroZodiacSign,
    label: string,
    element: EAstroElements,
    order: number,
    executive: Array<IAstroSign>,
    exaltation: Array<IAstroSign>,
    exil: Array<IAstroSign>,
    phallus: Array<IAstroSign>,
    sex: ESexSign,
    cross: ECrossSign
}

export const ZODIAC_SYMBOL_DATA: {[k: string]: ZodiacSymbolDataType}  = {
    aries: {
        sign: EAstroZodiacSign.ARIES,
        label: 'Овен',
        element: EAstroElements.FIRE,
        executive: [
            { isRetro: false, astroSign: EAstroSigns.MARS },
            { isRetro: true, astroSign: EAstroSigns.PLUTO }
        ],
        exaltation: [
            { isRetro: false, astroSign: EAstroSigns.SUN }
        ],
        exil: [
            { isRetro: false, astroSign: EAstroSigns.VENUS },
            { isRetro: true, astroSign: EAstroSigns.CHIRON }
        ],
        phallus: [
            { isRetro: false, astroSign: EAstroSigns.SATURN },
            { isRetro: true, astroSign: EAstroSigns.URANUS }
        ],
        sex: ESexSign.MALE,
        cross: ECrossSign.CARDINAL,
        order: 1
    },
    taurus: {
        sign: EAstroZodiacSign.TAURUS,
        label: 'Телец',
        element: EAstroElements.EARTH,
        executive: [
            { isRetro: false, astroSign: EAstroSigns.CHIRON }, 
            { isRetro: true, astroSign: EAstroSigns.VENUS }
        ],
        exaltation: [
            { isRetro: false, astroSign: EAstroSigns.MOON }
        ],
        exil: [
            { isRetro: false, astroSign: EAstroSigns.PLUTO },
            { isRetro: true, astroSign: EAstroSigns.SATURN }
        ],
        phallus: [
            { isRetro: false, astroSign: EAstroSigns.URANUS },
            { isRetro: true, astroSign: EAstroSigns.SATURN }
        ],
        sex: ESexSign.FEMALE,
        cross: ECrossSign.FIXED,
        order: 2
    },
    gemini: {
        sign: EAstroZodiacSign.GEMINI,
        label: 'Близницы',
        element: EAstroElements.WIND,
        executive: [
            { isRetro: true, astroSign: EAstroSigns.MERCURY }, 
            { isRetro: true, astroSign: EAstroSigns.PROSERPINA }
        ],
        exaltation: [
            { isRetro: false, astroSign: EAstroSigns.MERCURY },
            { isRetro: false, astroSign: EAstroSigns.PROSERPINA },
            { isRetro: false,  astroSign: EAstroSigns.UP_NODE }
        ],
        exil: [
            { isRetro: false, astroSign: EAstroSigns.JUPITER },
            { isRetro: true, astroSign: EAstroSigns.NEPTUNE }
        ],
        phallus: [
            { isRetro: false, astroSign: EAstroSigns.DOWN_NODE }
        ],
        sex: ESexSign.MALE,
        cross: ECrossSign.MUTABLE,
        order: 3
    },
    cancer: {
        sign: EAstroZodiacSign.CANCER,
        label: 'Рак',
        element: EAstroElements.WATER,
        executive: [
            { isRetro: false, astroSign: EAstroSigns.MOON }
        ],
        exaltation: [
            { isRetro: false, astroSign: EAstroSigns.JUPITER },
            { isRetro: true, astroSign: EAstroSigns.NEPTUNE }
        ],
        exil: [
            { isRetro: false, astroSign: EAstroSigns.SATURN },
            { isRetro: true, astroSign: EAstroSigns.URANUS } 
        ],
        phallus: [
            { isRetro: false, astroSign: EAstroSigns.MARS },
            { isRetro: true, astroSign: EAstroSigns.PLUTO }
        ],
        sex: ESexSign.FEMALE,
        cross: ECrossSign.CARDINAL,
        order: 4
    },
    leo: {
        sign: EAstroZodiacSign.LEO,
        label: 'Лев',
        element: EAstroElements.FIRE,
        executive: [
            { isRetro: false, astroSign: EAstroSigns.SUN }
        ],
        exaltation: [
            { isRetro: false, astroSign: EAstroSigns.PLUTO },
            { isRetro: true, astroSign: EAstroSigns.MARS }
        ],
        exil: [
            { isRetro: false, astroSign: EAstroSigns.URANUS },
            { isRetro: true, astroSign: EAstroSigns.SATURN }
        ],
        phallus: [
            { isRetro: false, astroSign: EAstroSigns.NEPTUNE },
            { isRetro: true, astroSign: EAstroSigns.JUPITER }
        ],
        sex: ESexSign.MALE,
        cross: ECrossSign.FIXED,
        order: 5
    },
    virgo: {
        sign: EAstroZodiacSign.VIRGO,
        label: 'Дева',
        element: EAstroElements.EARTH,
        executive: [
            { isRetro: false, astroSign: EAstroSigns.MERCURY },
            { isRetro: false, astroSign: EAstroSigns.PROSERPINA }
        ],
        exaltation: [
            { isRetro: true, astroSign: EAstroSigns.MERCURY },
            { isRetro: true, astroSign: EAstroSigns.PROSERPINA }
        ],
        exil: [
            { isRetro: false, astroSign: EAstroSigns.NEPTUNE },
            { isRetro: true, astroSign: EAstroSigns.JUPITER }
        ],
        phallus: [
            { isRetro: false, astroSign: EAstroSigns.VENUS },
            { isRetro: true, astroSign: EAstroSigns.CHIRON }
        ],
        sex: ESexSign.FEMALE,
        cross: ECrossSign.MUTABLE,
        order: 6
    },
    libra: {
        sign: EAstroZodiacSign.LIBRA,
        label: 'Весы',
        element: EAstroElements.WIND,
        executive: [
            { isRetro: false, astroSign: EAstroSigns.VENUS },
            { isRetro: true, astroSign: EAstroSigns.CHIRON }
        ],
        exaltation: [
            { isRetro: false, astroSign: EAstroSigns.SATURN },
            { isRetro: true, astroSign: EAstroSigns.URANUS }
        ],
        exil: [
            { isRetro: false, astroSign: EAstroSigns.MARS },
            { isRetro: true, astroSign: EAstroSigns.PLUTO }
        ],
        phallus: [
            { isRetro: false, astroSign: EAstroSigns.SUN }
        ],
        sex: ESexSign.MALE,
        cross: ECrossSign.CARDINAL,
        order: 7
    },
    scorpio: {
        sign: EAstroZodiacSign.SCORPIO,
        label: 'Скорпион',
        executive: [
            { isRetro: false, astroSign: EAstroSigns.PLUTO },
            { isRetro: true, astroSign: EAstroSigns.MARS }
        ],
        exaltation: [
            { isRetro: false, astroSign: EAstroSigns.URANUS },
            { isRetro: true, astroSign: EAstroSigns.SATURN }
        ],
        exil: [
            { isRetro: false, astroSign: EAstroSigns.CHIRON },
            { isRetro: true, astroSign: EAstroSigns.VENUS }
        ],
        phallus: [
            { isRetro: false, astroSign: EAstroSigns.MOON }
        ],
        sex: ESexSign.FEMALE,
        cross: ECrossSign.FIXED,
        element: EAstroElements.WATER,
        order: 8
    },
    sagitarius: {
        sign: EAstroZodiacSign.SAGITTARIUS,
        label: 'Стрелец',
        element: EAstroElements.FIRE,
        executive: [
            { isRetro: false, astroSign: EAstroSigns.JUPITER },
            { isRetro: true, astroSign: EAstroSigns.NEPTUNE }
        ],
        exaltation: [
            { isRetro: false, astroSign: EAstroSigns.DOWN_NODE }
        ],
        exil: [
            { isRetro: true, astroSign: EAstroSigns.MERCURY },
            { isRetro: true, astroSign: EAstroSigns.PROSERPINA }
        ],
        phallus: [
            { isRetro: false, astroSign: EAstroSigns.MERCURY },
            { isRetro: false, astroSign: EAstroSigns.PROSERPINA },
            { isRetro: false, astroSign: EAstroSigns.UP_NODE }
        ],
        sex: ESexSign.MALE,
        cross: ECrossSign.MUTABLE,
        order: 9
    },
    capricorn: {
        sign: EAstroZodiacSign.CAPRICORN,
        label: 'Козерог',
        element: EAstroElements.EARTH,
        executive: [
            { isRetro: false, astroSign: EAstroSigns.SATURN },
            { isRetro: true, astroSign: EAstroSigns.URANUS }
        ],
        exaltation: [
            { isRetro: false, astroSign: EAstroSigns.MARS },
            { isRetro: true, astroSign: EAstroSigns.PLUTO }
        ],
        exil: [
            { isRetro: false, astroSign: EAstroSigns.MOON }
        ],
        phallus: [
            { isRetro: false, astroSign: EAstroSigns.JUPITER },
            { isRetro: true, astroSign: EAstroSigns.NEPTUNE }
        ],
        sex: ESexSign.FEMALE,
        cross: ECrossSign.CARDINAL,
        order: 10
    },
    aquarius: {
        sign: EAstroZodiacSign.AQUARIUS,
        label: 'Водолей',
        element: EAstroElements.WIND,
        executive: [
            { isRetro: false, astroSign: EAstroSigns.URANUS },
            { isRetro: true, astroSign: EAstroSigns.SATURN }
        ],
        exaltation: [
            { isRetro: false, astroSign: EAstroSigns.NEPTUNE },
            { isRetro: true, astroSign: EAstroSigns.JUPITER }
        ],
        exil: [
            { isRetro: false, astroSign: EAstroSigns.SUN }
        ],
        phallus: [
            { isRetro: false, astroSign: EAstroSigns.PLUTO },
            { isRetro: true, astroSign: EAstroSigns.MARS }
        ],
        sex: ESexSign.MALE,
        cross: ECrossSign.FIXED,
        order: 11
    },
    pisces: {
        sign: EAstroZodiacSign.PISCES,
        label: 'Рыбы',
        element: EAstroElements.WATER,
        executive: [
            { isRetro: false, astroSign: EAstroSigns.NEPTUNE },
            { isRetro: true, astroSign: EAstroSigns.JUPITER }
        ],
        exaltation: [
            { isRetro: false, astroSign: EAstroSigns.VENUS },
            { isRetro: true, astroSign: EAstroSigns.CHIRON }
        ],
        exil: [
            { isRetro: false, astroSign: EAstroSigns.MERCURY },
            { isRetro: false, astroSign: EAstroSigns.PROSERPINA },
        ],
        phallus: [
            { isRetro: true, astroSign: EAstroSigns.MERCURY },
            { isRetro: true, astroSign: EAstroSigns.PROSERPINA }
        ],
        sex: ESexSign.FEMALE,
        cross: ECrossSign.MUTABLE,
        order: 12
    }
}