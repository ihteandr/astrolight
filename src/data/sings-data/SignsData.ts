import { EAstroSigns } from "../../types/signs";
import { EAstroElements } from "../elements/ElementsData";

export type SignSymbolDataType = {
    sign: EAstroSigns,
    label: string,
    elements: EAstroElements[]
}

export const SIGNS_SYMBOL_DATA:SignSymbolDataType[] = [
    {
        sign: EAstroSigns.SUN,
        label: 'Солнце',
        elements: [EAstroElements.FIRE]
    }, 
    {
        sign: EAstroSigns.MOON,
        label: 'Луна',
        elements: [EAstroElements.WATER]
    },
    {
        sign: EAstroSigns.MERCURY,
        label: 'Меркурий',
        elements: [EAstroElements.WIND, EAstroElements.EARTH]
    },
    {
        sign: EAstroSigns.VENUS,
        label: 'Венера',
        elements: [EAstroElements.WIND, EAstroElements.EARTH]
    },
    {
        sign: EAstroSigns.MARS,
        label: 'Марс',
        elements: [EAstroElements.FIRE]
    },
    {
        sign: EAstroSigns.JUPITER,
        label: 'Юпитер',
        elements: [EAstroElements.FIRE]
    },
    {
        sign: EAstroSigns.SATURN,
        label: 'Сатурн',
        elements: [EAstroElements.EARTH]
    },
    {
        sign: EAstroSigns.URANUS,
        label: 'Уран',
        elements: [EAstroElements.WIND]
    },
    {
        sign: EAstroSigns.NEPTUNE,
        label: 'Нептун',
        elements: [EAstroElements.WATER]
    },
    {
        sign: EAstroSigns.PLUTO,
        label: 'Плутон',
        elements: [EAstroElements.WATER]
    },
    {
        sign: EAstroSigns.PROSERPINA,
        label: 'Прозерпина',
        elements: []
    },
    {
        sign: EAstroSigns.UP_NODE,
        label: 'Узел',
        elements: []
    },
    {
        sign: EAstroSigns.CHIRON,
        label: 'Хирон',
        elements: []
    },
    {
        sign: EAstroSigns.LILITH,
        label: 'Лилит',
        elements: []
    },
    {
        sign: EAstroSigns.SELENA,
        label: 'Селена',
        elements: []
    },
    {
        sign: EAstroSigns.CERES,
        label: 'Церес',
        elements: []
    },
    {
        sign: EAstroSigns.JUNO,
        label: 'Юнона',
        elements: []
    }
]