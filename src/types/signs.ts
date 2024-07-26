import { IAstroAspect, IHouse } from "./astro"

export enum EAstroSigns {
    SUN = 'Sun',
    MOON = 'Moon',
    MERCURY = 'Mercury',
    VENUS = 'Venus',
    MARS = 'Mars',
    JUPITER = 'Jupiter',
    SATURN = 'Saturn',
    URANUS = 'Uranus',
    NEPTUNE = 'Neptune',
    PLUTO = 'Pluto',
    CHIRON = 'Chiron',
    SELENA = 'Selena',
    LILITH = 'Lilith',
    UP_NODE = 'UpNode',
    PROSERPINA = 'Proserpina',
    CERES = 'Ceres',
    JUNO = 'Juno',
    DOWN_NODE = 'DownNode',
    PARS_FORTUNE = 'ParsFortune'
}

export enum EAstroZodiacSign {
    ARIES = 'Aries',
    TAURUS = 'Taurus',
    GEMINI = 'Gemini',
    CANCER = 'Cancer',
    LEO = 'Leo',
    VIRGO = 'Virgo',
    LIBRA = 'Libra',
    SCORPIO = 'Scorpio',
    SAGITTARIUS = 'Sagittarius',
    CAPRICORN = 'Capricorn',
    AQUARIUS = 'Aquarius',
    PISCES = 'Pisces'
}

export interface IZone {
    hour: number,
    minute: number,
    second: number
}

export enum ESexSign {
    MALE = 'male',
    FEMALE = 'female'   
}
export enum ECrossSign {
    CARDINAL = 'cardinal',
    MUTABLE = 'mutable',
    FIXED = 'fixed'
}

export enum ESingType {
    GENERAL = 'GENERAL',
    PARS = 'PARS'
}

export interface ISign {
    isRetro: boolean,
    name: EAstroSigns,
    zodiac: EAstroZodiacSign,
    zodiacIndex: number,
    zodicSignDegree: number,
    zodiacZone: IZone,
    longitude: number,
    latitude: number,
    distance: number,
    longitudeSpeed: number,
    latitudeSpeed: number,
    distanceSpeed: number,
    rflag: number,
    aspects: IAstroAspect[],
    house?: IHouse,
    type: ESingType
}


