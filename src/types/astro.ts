import { EAstroSigns, EAstroZodiacSign, ISign, IZone } from "./signs"

export enum EAstroDirection {
    POSITIVE = 'Positive',
    NEGATIVE = 'Negative',
    NETRAL = 'Netral'
}
export enum EAstroAspectSpecification {
    APPLIQUE = 'APPLIQUE',
    SEPARATION = 'SEPARATION',
    EXACT = 'EXACT'
}

export enum EAstroAspectClassification {
    COMPLETED = 'COMPLETED',
    INCOMPLETED = 'INCOMPLITED'
}
export enum EAstroAspectType {
    CONJUNCTION = 'CONJUNCTION',
    SEXTILE = 'SEXTILE',
    QUADRATURE = 'QUADRATURE',
    TRINE = 'TRINE',
    OPPOSITION = 'OPPOSITION',
    VIGINTILE = 'VIGINTILE',
    SEMI_NONAGON = 'SEMI_NONAGON',
    SEMI_SEXTILE = 'SEMI_SEXTILE',
    DECILE = 'DECILE',
    NONAGON = 'NONAGON',
    SEMI_QUADRAT = 'SEMI_QUADRAT',
    QUINTILE = 'QUINTILE',
    BI_NONAGON = 'BI_NONAGON',
    SINTAGON = 'SINTAGON',
    TRI_DECILE = 'TRI_DECILE',
    SESQUIQUADRAT = 'SESQUIQUADRAT',
    BIQUINTILE = 'BIQUINTILE',
    QUINOX = 'QUINOX'
}

export enum EAstroAspectAction {
    DEPENDS_PLANETS = 'DEPENDS_PLANETS',
    HARMONIC = 'HARMONIC',
    TENSE = 'TENSE',
    CREATIVE = 'CREATIVE',
    KARMIC = 'KARMIC'
}

export enum EAspectMajority {
    MAJOR = 'MAJOR',
    MINNOR = 'MINNOR'
}
export interface IAstroPlace {
    latitude: number,
    longitude: number
}
export interface IAstroSign {
    astroSign: EAstroSigns,
    isRetro: boolean
}

export enum EHouseBelonging {
    NIGTH = 'NIGHT',
    DAY = 'DAY',
    WEST = 'WEST',
    EST = 'EST'
}
export enum EHouseAxie {
    I_VII = 'I_VII',
    II_VIII = 'II_VIII',
    III_IX = 'III_IX',
    IV_X = 'IV_X',
    V_XI = 'V_XI',
    VI_XII = 'VI_XII',
}

export enum EHouseCross {
    CARDINAL = 'CARDINAL',
    SUCCEDENTAL = 'SUCCEDENTAL',
    CADETS = 'CADETS'
}

export interface IHouse {
    number: number,
    start: number,
    end: number,
    zodiac: EAstroZodiacSign,
    zodiacIndex: number,
    zodicSignDegree: number,
    zodiacZone: IZone,
    label: string,
    dominants: Array<{ isRetro: boolean, astroSign: EAstroSigns }>,
    oppositeHouseNumber: number,
    isContainsSign: (sign: ISign) => boolean
}

export enum EHouseSquare {
    FIRST = 'FIRST',
    SECOND = 'SECOND',
    THIRD = 'THIRD',
    FOURTH = 'FOURTH'
}

export type IAstroAspect = {
    originOrb: number,
    distance: number,
    isAspect: boolean,
    fastSign: ISign,
    specification: EAstroAspectSpecification,
    classification: EAstroAspectClassification,
    type: EAstroAspectType,
    majority: EAspectMajority,
    sign1: ISign,
    sign1Degree: number,
    sign2: ISign,
    sign2Degree: number,
    action: EAstroAspectAction,
    distanceZone: IZone,
    isMutual: boolean,
    isSame: (aspect: IAstroAspect) => boolean,
    isContainsSign: (signName: EAstroSigns) => boolean
}
