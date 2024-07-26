import { EAstroDirection } from "../../types/astro";
import { EAstroSigns } from "../../types/signs";
import { EAstroElements } from "../elements/ElementsData";

export type SignSymbolDataType = {
    sign: EAstroSigns,
    label: string,
    openAiLabel?: string,
    elements: EAstroElements[],
    direction: EAstroDirection;
}

export const SIGNS_SYMBOL_DATA:SignSymbolDataType[] = [
    {
        sign: EAstroSigns.SUN,
        label: 'Солнце',
        elements: [EAstroElements.FIRE],
        direction: EAstroDirection.POSITIVE
    }, 
    {
        sign: EAstroSigns.MOON,
        label: 'Луна',
        elements: [EAstroElements.WATER],
        direction: EAstroDirection.POSITIVE
    },
    {
        sign: EAstroSigns.MERCURY,
        label: 'Меркурий',
        elements: [EAstroElements.WIND, EAstroElements.EARTH],
        direction: EAstroDirection.POSITIVE
    },
    {
        sign: EAstroSigns.VENUS,
        label: 'Венера',
        elements: [EAstroElements.WIND, EAstroElements.EARTH],
        direction: EAstroDirection.POSITIVE
    },
    {
        sign: EAstroSigns.MARS,
        label: 'Марс',
        elements: [EAstroElements.FIRE],
        direction: EAstroDirection.NEGATIVE
    },
    {
        sign: EAstroSigns.JUPITER,
        label: 'Юпитер',
        elements: [EAstroElements.FIRE],
        direction: EAstroDirection.POSITIVE
    },
    {
        sign: EAstroSigns.SATURN,
        label: 'Сатурн',
        elements: [EAstroElements.EARTH],
        direction: EAstroDirection.NEGATIVE
    },
    {
        sign: EAstroSigns.URANUS,
        label: 'Уран',
        elements: [EAstroElements.WIND],
        direction: EAstroDirection.NEGATIVE
    },
    {
        sign: EAstroSigns.NEPTUNE,
        label: 'Нептун',
        elements: [EAstroElements.WATER],
        direction: EAstroDirection.NEGATIVE
    },
    {
        sign: EAstroSigns.PLUTO,
        label: 'Плутон',
        elements: [EAstroElements.WATER],
        direction: EAstroDirection.NETRAL
    },
    {
        sign: EAstroSigns.PROSERPINA,
        label: 'Прозерпина',
        elements: [],
        direction: EAstroDirection.NETRAL
    },
    {
        sign: EAstroSigns.UP_NODE,
        label: 'Узел',
        openAiLabel: 'Восходящий Узел',
        elements: [],
        direction: EAstroDirection.NETRAL
    },
    {
        sign: EAstroSigns.CHIRON,
        label: 'Хирон',
        elements: [],
        direction: EAstroDirection.NETRAL
    },
    {
        sign: EAstroSigns.LILITH,
        label: 'Лилит',
        elements: [],
        direction: EAstroDirection.NETRAL
    },
    {
        sign: EAstroSigns.SELENA,
        label: 'Селена',
        elements: [],
        direction: EAstroDirection.NETRAL
    },
    {
        sign: EAstroSigns.CERES,
        label: 'Церес',
        elements: [],
        direction: EAstroDirection.NETRAL
    },
    {
        sign: EAstroSigns.JUNO,
        label: 'Юнона',
        elements: [],
        direction: EAstroDirection.NETRAL
    },
    {
        sign: EAstroSigns.PARS_FORTUNE,
        label: 'Фортуна',
        elements: [],
        direction: EAstroDirection.NETRAL
    }
]