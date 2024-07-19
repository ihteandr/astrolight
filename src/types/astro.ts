import { EAstroSigns, EAstroZodiacSign, IZone } from "./signs"

export interface IAstroPlace {
    latitude: number,
    longitude: number
}

export interface IAstroSign {
    astroSign: EAstroSigns,
    isRetro: boolean
}

export interface IHouse {
    number: number,
    start: number,
    end: number,
    zodiac: EAstroZodiacSign,
    zodiacIndex: number,
    zodicSignDegree: number,
    zodiacZone: IZone,
}
