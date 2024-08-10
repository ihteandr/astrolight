import { EAstroAspectType, EAstroDirection } from "../../../types/astro";
import { EDictinaryType } from "../../../types/dicrionary";
import { EAstroSigns, EAstroZodiacSign, ECrossSign } from "../../../types/signs";
import { EAstroElements } from "../../elements/ElementsData";
import { SignSymbolDataType } from "../SignsData";

const MOON: SignSymbolDataType = {
    sign: EAstroSigns.MOON,
    label: 'Луна',
    elements: [EAstroElements.WATER],
    direction: EAstroDirection.POSITIVE,
    zodiacMatchDictionary: {
        [EAstroZodiacSign.ARIES]: {
            label: 'Луна в знаке Овна',
            description: {}
        },
        [EAstroZodiacSign.TAURUS]: {
            label: 'Луна в знаке Тельца',
            description: {}
        },
        [EAstroZodiacSign.GEMINI]: {
            label: 'Луна в знаке Близнацов',
            description: {}
        },
        [EAstroZodiacSign.CANCER]: {
            label: 'Луна в знаке Рака',
            description: {}
        },
        [EAstroZodiacSign.LEO]: {
            label: 'Луна в знаке Льва',
            description: {}
        },
        [EAstroZodiacSign.VIRGO]: {
            label: 'Луна в знаке Девы',
            description: {}
        },
        [EAstroZodiacSign.LIBRA]: {
            label: 'Луна в знаке Весов',
            description: {}
        },
        [EAstroZodiacSign.SCORPIO]: {
            label: 'Луна в знаке Скорпеона',
            description: {}
        },
        [EAstroZodiacSign.SAGITTARIUS]: {
            label: 'Луна в знаке Стрельца',
            description: {}
        },
        [EAstroZodiacSign.CAPRICORN]: {
            label: 'Луна в знаке Козерога',
            description: {}
        },
        [EAstroZodiacSign.AQUARIUS]: {
            label: 'Луна в знаке Водолея',
            description: {}
        },
        [EAstroZodiacSign.PISCES]: {
            label: 'Луна в знаке Рыб',
            description: {}
        },
    },
    houseMatchDictionary: {
        1: {
            label: 'Луна в I доме',
            description: {}
        },
        2: {
            label: 'Луна в II доме',
            description: {}
        },
        3: {
            label: 'Луна в III доме',
            description: {}
        },
        4: {
            label: 'Луна в IV доме',
            description: {}
        },
        5: {
            label: 'Луна в V доме',
            description: {}
        },
        6: {
            label: 'Луна в VI доме',
            description: {}
        },
        7: {
            label: 'Луна в VII доме',
            description: {}
        },
        8: {
            label: 'Луна в VIII доме',
            description: {}
        },
        9: {
            label: 'Луна в IX доме',
            description: {}
        },
        10: {
            label: 'Луна в X доме',
            description: {}
        },
        11: {
            label: 'Луна в XI доме',
            description: {}
        },
        12: {
            label: 'Луна в XII доме',
            description: {}
        }
    },
    crossMatchDictinonary: {
        [ECrossSign.CARDINAL]: {
            label: 'Луна в кардинальных знаках',
            description: {
                [EDictinaryType.VRONSKY]: `
                    Луна в Кардинальных знаках указывает на сильное внутреннее беспокойство, неутомимую активность как духовную, так и телесную.
                `
            }
        },
        [ECrossSign.FIXED]: {
            label: 'Луна в фиксированных знаках',
            description: {
                [EDictinaryType.VRONSKY]: `
                    Луна в Фиксированных знаках указывает на духовную и телесную малоподвижность, самомнение, своенравие, упрямство, невнимательность, приступы лени и сонливости, апатию.
                `
            }
        },
        [ECrossSign.MUTABLE]: {
            label: 'Луна в мутабельных знаках',
            description: {
                [EDictinaryType.VRONSKY]: `
                    Луна в Мутабелъных знаках указывает на рассеянность, бессвязность, душевную неуравновешенность, внутреннюю дисгармонию, невозможность концентрироваться на чём-то одном, беспорядочность, бессистемность.
                `
            }
        }
    },
}


export default MOON;