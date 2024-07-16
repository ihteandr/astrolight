import { EAstroSigns } from "./signs"

export interface IAstroPlace {
    latitude: number,
    longitude: number
}

export interface IAstroSign {
    astroSign: EAstroSigns,
    isRetro: boolean
}
