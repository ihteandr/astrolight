import { EAstroDirection } from "../../types/astro";
import { TDictionary } from "../../types/dicrionary";
import { EAstroSigns, EAstroZodiacSign } from "../../types/signs";
import { EAstroElements } from "../elements/ElementsData";

export type SignSymbolDataType = {
    sign: EAstroSigns,
    label: string,
    openAiLabel?: string,
    elements: EAstroElements[],
    direction: EAstroDirection;
    zodiacMatchDictionary: TDictionary;
    houseMatchDictionary: TDictionary;
}

export const SIGNS_SYMBOL_DATA: { [k: string]: SignSymbolDataType } = {
    [EAstroSigns.SUN]: {
        sign: EAstroSigns.SUN,
        label: 'Солнце',
        elements: [EAstroElements.FIRE],
        direction: EAstroDirection.POSITIVE,
        zodiacMatchDictionary: {
            [EAstroZodiacSign.ARIES]: {
                label: 'Солнце в знаке Овна',
                description: {}
            },
            [EAstroZodiacSign.TAURUS]: {
                label: 'Солнце в знаке Тельца',
                description: {}
            },
            [EAstroZodiacSign.GEMINI]: {
                label: 'Солнце в знаке Близнацов',
                description: {}
            },
            [EAstroZodiacSign.CANCER]: {
                label: 'Солнце в знаке Рака',
                description: {}
            },
            [EAstroZodiacSign.LEO]: {
                label: 'Солнце в знаке Льва',
                description: {}
            },
            [EAstroZodiacSign.VIRGO]: {
                label: 'Солнце в знаке Девы',
                description: {}
            },
            [EAstroZodiacSign.LIBRA]: {
                label: 'Солнце в знаке Весов',
                description: {}
            },
            [EAstroZodiacSign.SCORPIO]: {
                label: 'Солнце в знаке Скорпеона',
                description: {}
            },
            [EAstroZodiacSign.SAGITTARIUS]: {
                label: 'Солнце в знаке Стрельца',
                description: {}
            },
            [EAstroZodiacSign.CAPRICORN]: {
                label: 'Солнце в знаке Козерога',
                description: {}
            },
            [EAstroZodiacSign.AQUARIUS]: {
                label: 'Солнце в знаке Водолея',
                description: {}
            },
            [EAstroZodiacSign.PISCES]: {
                label: 'Солнце в знаке Рыб',
                description: {}
            },
        },
        houseMatchDictionary: {
            1: {
                label: 'Солнце в I доме',
                description: {}
            },
            2: {
                label: 'Солнце в II доме',
                description: {}
            },
            3: {
                label: 'Солнце в III доме',
                description: {}
            },
            4: {
                label: 'Солнце в IV доме',
                description: {}
            },
            5: {
                label: 'Солнце в V доме',
                description: {}
            },
            6: {
                label: 'Солнце в VI доме',
                description: {}
            },
            7: {
                label: 'Солнце в VII доме',
                description: {}
            },
            8: {
                label: 'Солнце в VIII доме',
                description: {}
            },
            9: {
                label: 'Солнце в IX доме',
                description: {}
            },
            10: {
                label: 'Солнце в X доме',
                description: {}
            },
            11: {
                label: 'Солнце в XI доме',
                description: {}
            },
            12: {
                label: 'Солнце в XII доме',
                description: {}
            }
        }
    }, 
    [EAstroSigns.MOON]: {
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
        }
    },
    [EAstroSigns.MERCURY]: {
        sign: EAstroSigns.MERCURY,
        label: 'Меркурий',
        elements: [EAstroElements.WIND, EAstroElements.EARTH],
        direction: EAstroDirection.POSITIVE,
        zodiacMatchDictionary: {
            [EAstroZodiacSign.ARIES]: {
                label: 'Меркурий в знаке Овна',
                description: {}
            },
            [EAstroZodiacSign.TAURUS]: {
                label: 'Меркурий в знаке Тельца',
                description: {}
            },
            [EAstroZodiacSign.GEMINI]: {
                label: 'Меркурий в знаке Близнацов',
                description: {}
            },
            [EAstroZodiacSign.CANCER]: {
                label: 'Меркурий в знаке Рака',
                description: {}
            },
            [EAstroZodiacSign.LEO]: {
                label: 'Меркурий в знаке Льва',
                description: {}
            },
            [EAstroZodiacSign.VIRGO]: {
                label: 'Меркурий в знаке Девы',
                description: {}
            },
            [EAstroZodiacSign.LIBRA]: {
                label: 'Меркурий в знаке Весов',
                description: {}
            },
            [EAstroZodiacSign.SCORPIO]: {
                label: 'Меркурий в знаке Скорпеона',
                description: {}
            },
            [EAstroZodiacSign.SAGITTARIUS]: {
                label: 'Меркурий в знаке Стрельца',
                description: {}
            },
            [EAstroZodiacSign.CAPRICORN]: {
                label: 'Меркурий в знаке Козерога',
                description: {}
            },
            [EAstroZodiacSign.AQUARIUS]: {
                label: 'Меркурий в знаке Водолея',
                description: {}
            },
            [EAstroZodiacSign.PISCES]: {
                label: 'Меркурий в знаке Рыб',
                description: {}
            },
        },
        houseMatchDictionary: {
            1: {
                label: 'Меркурий в I доме',
                description: {}
            },
            2: {
                label: 'Меркурий в II доме',
                description: {}
            },
            3: {
                label: 'Меркурий в III доме',
                description: {}
            },
            4: {
                label: 'Меркурий в IV доме',
                description: {}
            },
            5: {
                label: 'Меркурий в V доме',
                description: {}
            },
            6: {
                label: 'Меркурий в VI доме',
                description: {}
            },
            7: {
                label: 'Меркурий в VII доме',
                description: {}
            },
            8: {
                label: 'Меркурий в VIII доме',
                description: {}
            },
            9: {
                label: 'Меркурий в IX доме',
                description: {}
            },
            10: {
                label: 'Меркурий в X доме',
                description: {}
            },
            11: {
                label: 'Меркурий в XI доме',
                description: {}
            },
            12: {
                label: 'Меркурий в XII доме',
                description: {}
            }
        }
    },
    [EAstroSigns.VENUS]: {
        sign: EAstroSigns.VENUS,
        label: 'Венера',
        elements: [EAstroElements.WIND, EAstroElements.EARTH],
        direction: EAstroDirection.POSITIVE,
        zodiacMatchDictionary: {
            [EAstroZodiacSign.ARIES]: {
                label: 'Венера в знаке Овна',
                description: {}
            },
            [EAstroZodiacSign.TAURUS]: {
                label: 'Венера в знаке Тельца',
                description: {}
            },
            [EAstroZodiacSign.GEMINI]: {
                label: 'Венера в знаке Близнацов',
                description: {}
            },
            [EAstroZodiacSign.CANCER]: {
                label: 'Венера в знаке Рака',
                description: {}
            },
            [EAstroZodiacSign.LEO]: {
                label: 'Венера в знаке Льва',
                description: {}
            },
            [EAstroZodiacSign.VIRGO]: {
                label: 'Венера в знаке Девы',
                description: {}
            },
            [EAstroZodiacSign.LIBRA]: {
                label: 'Венера в знаке Весов',
                description: {}
            },
            [EAstroZodiacSign.SCORPIO]: {
                label: 'Венера в знаке Скорпеона',
                description: {}
            },
            [EAstroZodiacSign.SAGITTARIUS]: {
                label: 'Венера в знаке Стрельца',
                description: {}
            },
            [EAstroZodiacSign.CAPRICORN]: {
                label: 'Венера в знаке Козерога',
                description: {}
            },
            [EAstroZodiacSign.AQUARIUS]: {
                label: 'Венера в знаке Водолея',
                description: {}
            },
            [EAstroZodiacSign.PISCES]: {
                label: 'Венера в знаке Рыб',
                description: {}
            },
        },
        houseMatchDictionary: {
            1: {
                label: 'Венера в I доме',
                description: {}
            },
            2: {
                label: 'Венера в II доме',
                description: {}
            },
            3: {
                label: 'Венера в III доме',
                description: {}
            },
            4: {
                label: 'Венера в IV доме',
                description: {}
            },
            5: {
                label: 'Венера в V доме',
                description: {}
            },
            6: {
                label: 'Венера в VI доме',
                description: {}
            },
            7: {
                label: 'Венера в VII доме',
                description: {}
            },
            8: {
                label: 'Венера в VIII доме',
                description: {}
            },
            9: {
                label: 'Венера в IX доме',
                description: {}
            },
            10: {
                label: 'Венера в X доме',
                description: {}
            },
            11: {
                label: 'Венера в XI доме',
                description: {}
            },
            12: {
                label: 'Венера в XII доме',
                description: {}
            }
        }
    },
    [EAstroSigns.MARS]: {
        sign: EAstroSigns.MARS,
        label: 'Марс',
        elements: [EAstroElements.FIRE],
        direction: EAstroDirection.NEGATIVE,
        zodiacMatchDictionary: {
            [EAstroZodiacSign.ARIES]: {
                label: 'Марс в знаке Овна',
                description: {}
            },
            [EAstroZodiacSign.TAURUS]: {
                label: 'Марс в знаке Тельца',
                description: {}
            },
            [EAstroZodiacSign.GEMINI]: {
                label: 'Марс в знаке Близнацов',
                description: {}
            },
            [EAstroZodiacSign.CANCER]: {
                label: 'Марс в знаке Рака',
                description: {}
            },
            [EAstroZodiacSign.LEO]: {
                label: 'Марс в знаке Льва',
                description: {}
            },
            [EAstroZodiacSign.VIRGO]: {
                label: 'Марс в знаке Девы',
                description: {}
            },
            [EAstroZodiacSign.LIBRA]: {
                label: 'Марс в знаке Весов',
                description: {}
            },
            [EAstroZodiacSign.SCORPIO]: {
                label: 'Марс в знаке Скорпеона',
                description: {}
            },
            [EAstroZodiacSign.SAGITTARIUS]: {
                label: 'Марс в знаке Стрельца',
                description: {}
            },
            [EAstroZodiacSign.CAPRICORN]: {
                label: 'Марс в знаке Козерога',
                description: {}
            },
            [EAstroZodiacSign.AQUARIUS]: {
                label: 'Марс в знаке Водолея',
                description: {}
            },
            [EAstroZodiacSign.PISCES]: {
                label: 'Марс в знаке Рыб',
                description: {}
            },
        },
        houseMatchDictionary: {
            1: {
                label: 'Марс в I доме',
                description: {}
            },
            2: {
                label: 'Марс в II доме',
                description: {}
            },
            3: {
                label: 'Марс в III доме',
                description: {}
            },
            4: {
                label: 'Марс в IV доме',
                description: {}
            },
            5: {
                label: 'Марс в V доме',
                description: {}
            },
            6: {
                label: 'Марс в VI доме',
                description: {}
            },
            7: {
                label: 'Марс в VII доме',
                description: {}
            },
            8: {
                label: 'Марс в VIII доме',
                description: {}
            },
            9: {
                label: 'Марс в IX доме',
                description: {}
            },
            10: {
                label: 'Марс в X доме',
                description: {}
            },
            11: {
                label: 'Марс в XI доме',
                description: {}
            },
            12: {
                label: 'Марс в XII доме',
                description: {}
            }
        }
    },
    [EAstroSigns.JUPITER]: {
        sign: EAstroSigns.JUPITER,
        label: 'Юпитер',
        elements: [EAstroElements.FIRE],
        direction: EAstroDirection.POSITIVE,
        zodiacMatchDictionary: {
            [EAstroZodiacSign.ARIES]: {
                label: 'Юпитер в знаке Овна',
                description: {}
            },
            [EAstroZodiacSign.TAURUS]: {
                label: 'Юпитер в знаке Тельца',
                description: {}
            },
            [EAstroZodiacSign.GEMINI]: {
                label: 'Юпитер в знаке Близнацов',
                description: {}
            },
            [EAstroZodiacSign.CANCER]: {
                label: 'Юпитер в знаке Рака',
                description: {}
            },
            [EAstroZodiacSign.LEO]: {
                label: 'Юпитер в знаке Льва',
                description: {}
            },
            [EAstroZodiacSign.VIRGO]: {
                label: 'Юпитер в знаке Девы',
                description: {}
            },
            [EAstroZodiacSign.LIBRA]: {
                label: 'Юпитер в знаке Весов',
                description: {}
            },
            [EAstroZodiacSign.SCORPIO]: {
                label: 'Юпитер в знаке Скорпеона',
                description: {}
            },
            [EAstroZodiacSign.SAGITTARIUS]: {
                label: 'Юпитер в знаке Стрельца',
                description: {}
            },
            [EAstroZodiacSign.CAPRICORN]: {
                label: 'Юпитер в знаке Козерога',
                description: {}
            },
            [EAstroZodiacSign.AQUARIUS]: {
                label: 'Юпитер в знаке Водолея',
                description: {}
            },
            [EAstroZodiacSign.PISCES]: {
                label: 'Юпитер в знаке Рыб',
                description: {}
            },
        },
        houseMatchDictionary: {
            1: {
                label: 'Юпитер в I доме',
                description: {}
            },
            2: {
                label: 'Юпитер в II доме',
                description: {}
            },
            3: {
                label: 'Юпитер в III доме',
                description: {}
            },
            4: {
                label: 'Юпитер в IV доме',
                description: {}
            },
            5: {
                label: 'Юпитер в V доме',
                description: {}
            },
            6: {
                label: 'Юпитер в VI доме',
                description: {}
            },
            7: {
                label: 'Юпитер в VII доме',
                description: {}
            },
            8: {
                label: 'Юпитер в VIII доме',
                description: {}
            },
            9: {
                label: 'Юпитер в IX доме',
                description: {}
            },
            10: {
                label: 'Юпитер в X доме',
                description: {}
            },
            11: {
                label: 'Юпитер в XI доме',
                description: {}
            },
            12: {
                label: 'Юпитер в XII доме',
                description: {}
            }
        }
    },
    [EAstroSigns.SATURN]: {
        sign: EAstroSigns.SATURN,
        label: 'Сатурн',
        elements: [EAstroElements.EARTH],
        direction: EAstroDirection.NEGATIVE,
        zodiacMatchDictionary: {
            [EAstroZodiacSign.ARIES]: {
                label: 'Сатурн в знаке Овна',
                description: {}
            },
            [EAstroZodiacSign.TAURUS]: {
                label: 'Сатурн в знаке Тельца',
                description: {}
            },
            [EAstroZodiacSign.GEMINI]: {
                label: 'Сатурн в знаке Близнацов',
                description: {}
            },
            [EAstroZodiacSign.CANCER]: {
                label: 'Сатурн в знаке Рака',
                description: {}
            },
            [EAstroZodiacSign.LEO]: {
                label: 'Сатурн в знаке Льва',
                description: {}
            },
            [EAstroZodiacSign.VIRGO]: {
                label: 'Сатурн в знаке Девы',
                description: {}
            },
            [EAstroZodiacSign.LIBRA]: {
                label: 'Сатурн в знаке Весов',
                description: {}
            },
            [EAstroZodiacSign.SCORPIO]: {
                label: 'Сатурн в знаке Скорпеона',
                description: {}
            },
            [EAstroZodiacSign.SAGITTARIUS]: {
                label: 'Сатурн в знаке Стрельца',
                description: {}
            },
            [EAstroZodiacSign.CAPRICORN]: {
                label: 'Сатурн в знаке Козерога',
                description: {}
            },
            [EAstroZodiacSign.AQUARIUS]: {
                label: 'Сатурн в знаке Водолея',
                description: {}
            },
            [EAstroZodiacSign.PISCES]: {
                label: 'Сатурн в знаке Рыб',
                description: {}
            },
        },
        houseMatchDictionary: {
            1: {
                label: 'Сатурн в I доме',
                description: {}
            },
            2: {
                label: 'Сатурн в II доме',
                description: {}
            },
            3: {
                label: 'Сатурн в III доме',
                description: {}
            },
            4: {
                label: 'Сатурн в IV доме',
                description: {}
            },
            5: {
                label: 'Сатурн в V доме',
                description: {}
            },
            6: {
                label: 'Сатурн в VI доме',
                description: {}
            },
            7: {
                label: 'Сатурн в VII доме',
                description: {}
            },
            8: {
                label: 'Сатурн в VIII доме',
                description: {}
            },
            9: {
                label: 'Сатурн в IX доме',
                description: {}
            },
            10: {
                label: 'Сатурн в X доме',
                description: {}
            },
            11: {
                label: 'Сатурн в XI доме',
                description: {}
            },
            12: {
                label: 'Сатурн в XII доме',
                description: {}
            }
        }
    },
    [EAstroSigns.URANUS]: {
        sign: EAstroSigns.URANUS,
        label: 'Уран',
        elements: [EAstroElements.WIND],
        direction: EAstroDirection.NEGATIVE,
        zodiacMatchDictionary: {
            [EAstroZodiacSign.ARIES]: {
                label: 'Уран в знаке Овна',
                description: {}
            },
            [EAstroZodiacSign.TAURUS]: {
                label: 'Уран в знаке Тельца',
                description: {}
            },
            [EAstroZodiacSign.GEMINI]: {
                label: 'Уран в знаке Близнацов',
                description: {}
            },
            [EAstroZodiacSign.CANCER]: {
                label: 'Уран в знаке Рака',
                description: {}
            },
            [EAstroZodiacSign.LEO]: {
                label: 'Уран в знаке Льва',
                description: {}
            },
            [EAstroZodiacSign.VIRGO]: {
                label: 'Уран в знаке Девы',
                description: {}
            },
            [EAstroZodiacSign.LIBRA]: {
                label: 'Уран в знаке Весов',
                description: {}
            },
            [EAstroZodiacSign.SCORPIO]: {
                label: 'Уран в знаке Скорпеона',
                description: {}
            },
            [EAstroZodiacSign.SAGITTARIUS]: {
                label: 'Уран в знаке Стрельца',
                description: {}
            },
            [EAstroZodiacSign.CAPRICORN]: {
                label: 'Уран в знаке Козерога',
                description: {}
            },
            [EAstroZodiacSign.AQUARIUS]: {
                label: 'Уран в знаке Водолея',
                description: {}
            },
            [EAstroZodiacSign.PISCES]: {
                label: 'Уран в знаке Рыб',
                description: {}
            },
        },
        houseMatchDictionary: {
            1: {
                label: 'Уран в I доме',
                description: {}
            },
            2: {
                label: 'Уран в II доме',
                description: {}
            },
            3: {
                label: 'Уран в III доме',
                description: {}
            },
            4: {
                label: 'Уран в IV доме',
                description: {}
            },
            5: {
                label: 'Уран в V доме',
                description: {}
            },
            6: {
                label: 'Уран в VI доме',
                description: {}
            },
            7: {
                label: 'Уран в VII доме',
                description: {}
            },
            8: {
                label: 'Уран в VIII доме',
                description: {}
            },
            9: {
                label: 'Уран в IX доме',
                description: {}
            },
            10: {
                label: 'Уран в X доме',
                description: {}
            },
            11: {
                label: 'Уран в XI доме',
                description: {}
            },
            12: {
                label: 'Уран в XII доме',
                description: {}
            }
        }
    },
    [EAstroSigns.NEPTUNE]: {
        sign: EAstroSigns.NEPTUNE,
        label: 'Нептун',
        elements: [EAstroElements.WATER],
        direction: EAstroDirection.NEGATIVE,
        zodiacMatchDictionary: {
            [EAstroZodiacSign.ARIES]: {
                label: 'Нептун в знаке Овна',
                description: {}
            },
            [EAstroZodiacSign.TAURUS]: {
                label: 'Нептун в знаке Тельца',
                description: {}
            },
            [EAstroZodiacSign.GEMINI]: {
                label: 'Нептун в знаке Близнацов',
                description: {}
            },
            [EAstroZodiacSign.CANCER]: {
                label: 'Нептун в знаке Рака',
                description: {}
            },
            [EAstroZodiacSign.LEO]: {
                label: 'Нептун в знаке Льва',
                description: {}
            },
            [EAstroZodiacSign.VIRGO]: {
                label: 'Нептун в знаке Девы',
                description: {}
            },
            [EAstroZodiacSign.LIBRA]: {
                label: 'Нептун в знаке Весов',
                description: {}
            },
            [EAstroZodiacSign.SCORPIO]: {
                label: 'Нептун в знаке Скорпеона',
                description: {}
            },
            [EAstroZodiacSign.SAGITTARIUS]: {
                label: 'Нептун в знаке Стрельца',
                description: {}
            },
            [EAstroZodiacSign.CAPRICORN]: {
                label: 'Нептун в знаке Козерога',
                description: {}
            },
            [EAstroZodiacSign.AQUARIUS]: {
                label: 'Нептун в знаке Водолея',
                description: {}
            },
            [EAstroZodiacSign.PISCES]: {
                label: 'Нептун в знаке Рыб',
                description: {}
            },
        },
        houseMatchDictionary: {
            1: {
                label: 'Нептун в I доме',
                description: {}
            },
            2: {
                label: 'Нептун в II доме',
                description: {}
            },
            3: {
                label: 'Нептун в III доме',
                description: {}
            },
            4: {
                label: 'Нептун в IV доме',
                description: {}
            },
            5: {
                label: 'Нептун в V доме',
                description: {}
            },
            6: {
                label: 'Нептун в VI доме',
                description: {}
            },
            7: {
                label: 'Нептун в VII доме',
                description: {}
            },
            8: {
                label: 'Нептун в VIII доме',
                description: {}
            },
            9: {
                label: 'Нептун в IX доме',
                description: {}
            },
            10: {
                label: 'Нептун в X доме',
                description: {}
            },
            11: {
                label: 'Нептун в XI доме',
                description: {}
            },
            12: {
                label: 'Нептун в XII доме',
                description: {}
            }
        }
    },
    [EAstroSigns.PLUTO]: {
        sign: EAstroSigns.PLUTO,
        label: 'Плутон',
        elements: [EAstroElements.WATER],
        direction: EAstroDirection.NETRAL,
        zodiacMatchDictionary: {
            [EAstroZodiacSign.ARIES]: {
                label: 'Плутон в знаке Овна',
                description: {}
            },
            [EAstroZodiacSign.TAURUS]: {
                label: 'Плутон в знаке Тельца',
                description: {}
            },
            [EAstroZodiacSign.GEMINI]: {
                label: 'Плутон в знаке Близнацов',
                description: {}
            },
            [EAstroZodiacSign.CANCER]: {
                label: 'Плутон в знаке Рака',
                description: {}
            },
            [EAstroZodiacSign.LEO]: {
                label: 'Плутон в знаке Льва',
                description: {}
            },
            [EAstroZodiacSign.VIRGO]: {
                label: 'Плутон в знаке Девы',
                description: {}
            },
            [EAstroZodiacSign.LIBRA]: {
                label: 'Плутон в знаке Весов',
                description: {}
            },
            [EAstroZodiacSign.SCORPIO]: {
                label: 'Плутон в знаке Скорпеона',
                description: {}
            },
            [EAstroZodiacSign.SAGITTARIUS]: {
                label: 'Плутон в знаке Стрельца',
                description: {}
            },
            [EAstroZodiacSign.CAPRICORN]: {
                label: 'Плутон в знаке Козерога',
                description: {}
            },
            [EAstroZodiacSign.AQUARIUS]: {
                label: 'Плутон в знаке Водолея',
                description: {}
            },
            [EAstroZodiacSign.PISCES]: {
                label: 'Плутон в знаке Рыб',
                description: {}
            },
        },
        houseMatchDictionary: {
            1: {
                label: 'Плутон в I доме',
                description: {}
            },
            2: {
                label: 'Плутон в II доме',
                description: {}
            },
            3: {
                label: 'Плутон в III доме',
                description: {}
            },
            4: {
                label: 'Плутон в IV доме',
                description: {}
            },
            5: {
                label: 'Плутон в V доме',
                description: {}
            },
            6: {
                label: 'Плутон в VI доме',
                description: {}
            },
            7: {
                label: 'Плутон в VII доме',
                description: {}
            },
            8: {
                label: 'Плутон в VIII доме',
                description: {}
            },
            9: {
                label: 'Плутон в IX доме',
                description: {}
            },
            10: {
                label: 'Плутон в X доме',
                description: {}
            },
            11: {
                label: 'Плутон в XI доме',
                description: {}
            },
            12: {
                label: 'Плутон в XII доме',
                description: {}
            }
        }
    },
    [EAstroSigns.PROSERPINA]: {
        sign: EAstroSigns.PROSERPINA,
        label: 'Прозерпина',
        elements: [],
        direction: EAstroDirection.NETRAL,
        zodiacMatchDictionary: {
            [EAstroZodiacSign.ARIES]: {
                label: 'Прозерпина в знаке Овна',
                description: {}
            },
            [EAstroZodiacSign.TAURUS]: {
                label: 'Прозерпина в знаке Тельца',
                description: {}
            },
            [EAstroZodiacSign.GEMINI]: {
                label: 'Прозерпина в знаке Близнацов',
                description: {}
            },
            [EAstroZodiacSign.CANCER]: {
                label: 'Прозерпина в знаке Рака',
                description: {}
            },
            [EAstroZodiacSign.LEO]: {
                label: 'Прозерпина в знаке Льва',
                description: {}
            },
            [EAstroZodiacSign.VIRGO]: {
                label: 'Прозерпина в знаке Девы',
                description: {}
            },
            [EAstroZodiacSign.LIBRA]: {
                label: 'Прозерпина в знаке Весов',
                description: {}
            },
            [EAstroZodiacSign.SCORPIO]: {
                label: 'Прозерпина в знаке Скорпеона',
                description: {}
            },
            [EAstroZodiacSign.SAGITTARIUS]: {
                label: 'Прозерпина в знаке Стрельца',
                description: {}
            },
            [EAstroZodiacSign.CAPRICORN]: {
                label: 'Прозерпина в знаке Козерога',
                description: {}
            },
            [EAstroZodiacSign.AQUARIUS]: {
                label: 'Прозерпина в знаке Водолея',
                description: {}
            },
            [EAstroZodiacSign.PISCES]: {
                label: 'Прозерпина в знаке Рыб',
                description: {}
            },
        },
        houseMatchDictionary: {
            1: {
                label: 'Прозерпина в I доме',
                description: {}
            },
            2: {
                label: 'Прозерпина в II доме',
                description: {}
            },
            3: {
                label: 'Прозерпина в III доме',
                description: {}
            },
            4: {
                label: 'Прозерпина в IV доме',
                description: {}
            },
            5: {
                label: 'Прозерпина в V доме',
                description: {}
            },
            6: {
                label: 'Прозерпина в VI доме',
                description: {}
            },
            7: {
                label: 'Прозерпина в VII доме',
                description: {}
            },
            8: {
                label: 'Прозерпина в VIII доме',
                description: {}
            },
            9: {
                label: 'Прозерпина в IX доме',
                description: {}
            },
            10: {
                label: 'Прозерпина в X доме',
                description: {}
            },
            11: {
                label: 'Прозерпина в XI доме',
                description: {}
            },
            12: {
                label: 'Прозерпина в XII доме',
                description: {}
            }
        }
    },
    [EAstroSigns.UP_NODE]: {
        sign: EAstroSigns.UP_NODE,
        label: 'Узел',
        openAiLabel: 'Восходящий Узел',
        elements: [],
        direction: EAstroDirection.NETRAL,
        zodiacMatchDictionary: {
            [EAstroZodiacSign.ARIES]: {
                label: 'Восходящий Узел в знаке Овна',
                description: {}
            },
            [EAstroZodiacSign.TAURUS]: {
                label: 'Восходящий Узел в знаке Тельца',
                description: {}
            },
            [EAstroZodiacSign.GEMINI]: {
                label: 'Восходящий Узел в знаке Близнацов',
                description: {}
            },
            [EAstroZodiacSign.CANCER]: {
                label: 'Восходящий Узел в знаке Рака',
                description: {}
            },
            [EAstroZodiacSign.LEO]: {
                label: 'Восходящий Узел в знаке Льва',
                description: {}
            },
            [EAstroZodiacSign.VIRGO]: {
                label: 'Восходящий Узел в знаке Девы',
                description: {}
            },
            [EAstroZodiacSign.LIBRA]: {
                label: 'Восходящий Узел в знаке Весов',
                description: {}
            },
            [EAstroZodiacSign.SCORPIO]: {
                label: 'Восходящий Узел в знаке Скорпеона',
                description: {}
            },
            [EAstroZodiacSign.SAGITTARIUS]: {
                label: 'Восходящий Узел в знаке Стрельца',
                description: {}
            },
            [EAstroZodiacSign.CAPRICORN]: {
                label: 'Восходящий Узел в знаке Козерога',
                description: {}
            },
            [EAstroZodiacSign.AQUARIUS]: {
                label: 'Восходящий Узел в знаке Водолея',
                description: {}
            },
            [EAstroZodiacSign.PISCES]: {
                label: 'Восходящий Узел в знаке Рыб',
                description: {}
            },
        },
        houseMatchDictionary: {
            1: {
                label: 'Восходящий Узел в I доме',
                description: {}
            },
            2: {
                label: 'Восходящий Узел в II доме',
                description: {}
            },
            3: {
                label: 'Восходящий Узел в III доме',
                description: {}
            },
            4: {
                label: 'Восходящий Узел в IV доме',
                description: {}
            },
            5: {
                label: 'Восходящий Узел в V доме',
                description: {}
            },
            6: {
                label: 'Восходящий Узел в VI доме',
                description: {}
            },
            7: {
                label: 'Восходящий Узел в VII доме',
                description: {}
            },
            8: {
                label: 'Восходящий Узел в VIII доме',
                description: {}
            },
            9: {
                label: 'Восходящий Узел в IX доме',
                description: {}
            },
            10: {
                label: 'Восходящий Узел в X доме',
                description: {}
            },
            11: {
                label: 'Восходящий Узел в XI доме',
                description: {}
            },
            12: {
                label: 'Восходящий Узел в XII доме',
                description: {}
            }
        }
    },
    [EAstroSigns.CHIRON]: {
        sign: EAstroSigns.CHIRON,
        label: 'Хирон',
        elements: [],
        direction: EAstroDirection.NETRAL,
        zodiacMatchDictionary: {
            [EAstroZodiacSign.ARIES]: {
                label: 'Хирон в знаке Овна',
                description: {}
            },
            [EAstroZodiacSign.TAURUS]: {
                label: 'Хирон в знаке Тельца',
                description: {}
            },
            [EAstroZodiacSign.GEMINI]: {
                label: 'Хирон в знаке Близнацов',
                description: {}
            },
            [EAstroZodiacSign.CANCER]: {
                label: 'Хирон в знаке Рака',
                description: {}
            },
            [EAstroZodiacSign.LEO]: {
                label: 'Хирон в знаке Льва',
                description: {}
            },
            [EAstroZodiacSign.VIRGO]: {
                label: 'Хирон в знаке Девы',
                description: {}
            },
            [EAstroZodiacSign.LIBRA]: {
                label: 'Хирон в знаке Весов',
                description: {}
            },
            [EAstroZodiacSign.SCORPIO]: {
                label: 'Хирон в знаке Скорпеона',
                description: {}
            },
            [EAstroZodiacSign.SAGITTARIUS]: {
                label: 'Хирон в знаке Стрельца',
                description: {}
            },
            [EAstroZodiacSign.CAPRICORN]: {
                label: 'Хирон в знаке Козерога',
                description: {}
            },
            [EAstroZodiacSign.AQUARIUS]: {
                label: 'Хирон в знаке Водолея',
                description: {}
            },
            [EAstroZodiacSign.PISCES]: {
                label: 'Хирон в знаке Рыб',
                description: {}
            },
        },
        houseMatchDictionary: {
            1: {
                label: 'Хирон в I доме',
                description: {}
            },
            2: {
                label: 'Хирон в II доме',
                description: {}
            },
            3: {
                label: 'Хирон в III доме',
                description: {}
            },
            4: {
                label: 'Хирон в IV доме',
                description: {}
            },
            5: {
                label: 'Хирон в V доме',
                description: {}
            },
            6: {
                label: 'Хирон в VI доме',
                description: {}
            },
            7: {
                label: 'Хирон в VII доме',
                description: {}
            },
            8: {
                label: 'Хирон в VIII доме',
                description: {}
            },
            9: {
                label: 'Хирон в IX доме',
                description: {}
            },
            10: {
                label: 'Хирон в X доме',
                description: {}
            },
            11: {
                label: 'Хирон в XI доме',
                description: {}
            },
            12: {
                label: 'Хирон в XII доме',
                description: {}
            }
        }
    },
    [EAstroSigns.LILITH]: {
        sign: EAstroSigns.LILITH,
        label: 'Лилит',
        elements: [],
        direction: EAstroDirection.NETRAL,
        zodiacMatchDictionary: {
            [EAstroZodiacSign.ARIES]: {
                label: 'Лилит в знаке Овна',
                description: {}
            },
            [EAstroZodiacSign.TAURUS]: {
                label: 'Лилит в знаке Тельца',
                description: {}
            },
            [EAstroZodiacSign.GEMINI]: {
                label: 'Лилит в знаке Близнацов',
                description: {}
            },
            [EAstroZodiacSign.CANCER]: {
                label: 'Лилит в знаке Рака',
                description: {}
            },
            [EAstroZodiacSign.LEO]: {
                label: 'Лилит в знаке Льва',
                description: {}
            },
            [EAstroZodiacSign.VIRGO]: {
                label: 'Лилит в знаке Девы',
                description: {}
            },
            [EAstroZodiacSign.LIBRA]: {
                label: 'Лилит в знаке Весов',
                description: {}
            },
            [EAstroZodiacSign.SCORPIO]: {
                label: 'Лилит в знаке Скорпеона',
                description: {}
            },
            [EAstroZodiacSign.SAGITTARIUS]: {
                label: 'Хирон в знаке Стрельца',
                description: {}
            },
            [EAstroZodiacSign.CAPRICORN]: {
                label: 'Лилит в знаке Козерога',
                description: {}
            },
            [EAstroZodiacSign.AQUARIUS]: {
                label: 'Лилит в знаке Водолея',
                description: {}
            },
            [EAstroZodiacSign.PISCES]: {
                label: 'Лилит в знаке Рыб',
                description: {}
            },
        },
        houseMatchDictionary: {
            1: {
                label: 'Лилит в I доме',
                description: {}
            },
            2: {
                label: 'Лилит в II доме',
                description: {}
            },
            3: {
                label: 'Лилит в III доме',
                description: {}
            },
            4: {
                label: 'Лилит в IV доме',
                description: {}
            },
            5: {
                label: 'Лилит в V доме',
                description: {}
            },
            6: {
                label: 'Лилит в VI доме',
                description: {}
            },
            7: {
                label: 'Лилит в VII доме',
                description: {}
            },
            8: {
                label: 'Лилит в VIII доме',
                description: {}
            },
            9: {
                label: 'Лилит в IX доме',
                description: {}
            },
            10: {
                label: 'Лилит в X доме',
                description: {}
            },
            11: {
                label: 'Лилит в XI доме',
                description: {}
            },
            12: {
                label: 'Лилит в XII доме',
                description: {}
            }
        }
    },
    [EAstroSigns.SELENA]: {
        sign: EAstroSigns.SELENA,
        label: 'Селена',
        elements: [],
        direction: EAstroDirection.NETRAL,
        zodiacMatchDictionary: {
            [EAstroZodiacSign.ARIES]: {
                label: 'Селена в знаке Овна',
                description: {}
            },
            [EAstroZodiacSign.TAURUS]: {
                label: 'Селена в знаке Тельца',
                description: {}
            },
            [EAstroZodiacSign.GEMINI]: {
                label: 'Селена в знаке Близнацов',
                description: {}
            },
            [EAstroZodiacSign.CANCER]: {
                label: 'Селена в знаке Рака',
                description: {}
            },
            [EAstroZodiacSign.LEO]: {
                label: 'Селена в знаке Льва',
                description: {}
            },
            [EAstroZodiacSign.VIRGO]: {
                label: 'Селена в знаке Девы',
                description: {}
            },
            [EAstroZodiacSign.LIBRA]: {
                label: 'Селена в знаке Весов',
                description: {}
            },
            [EAstroZodiacSign.SCORPIO]: {
                label: 'Селена в знаке Скорпеона',
                description: {}
            },
            [EAstroZodiacSign.SAGITTARIUS]: {
                label: 'Селена в знаке Стрельца',
                description: {}
            },
            [EAstroZodiacSign.CAPRICORN]: {
                label: 'Селена в знаке Козерога',
                description: {}
            },
            [EAstroZodiacSign.AQUARIUS]: {
                label: 'Селена в знаке Водолея',
                description: {}
            },
            [EAstroZodiacSign.PISCES]: {
                label: 'Селена в знаке Рыб',
                description: {}
            },
        },
        houseMatchDictionary: {
            1: {
                label: 'Селена в I доме',
                description: {}
            },
            2: {
                label: 'Селена в II доме',
                description: {}
            },
            3: {
                label: 'Селена в III доме',
                description: {}
            },
            4: {
                label: 'Селена в IV доме',
                description: {}
            },
            5: {
                label: 'Селена в V доме',
                description: {}
            },
            6: {
                label: 'Селена в VI доме',
                description: {}
            },
            7: {
                label: 'Селена в VII доме',
                description: {}
            },
            8: {
                label: 'Селена в VIII доме',
                description: {}
            },
            9: {
                label: 'Селена в IX доме',
                description: {}
            },
            10: {
                label: 'Селена в X доме',
                description: {}
            },
            11: {
                label: 'Селена в XI доме',
                description: {}
            },
            12: {
                label: 'Селена в XII доме',
                description: {}
            }
        }
    },
    [EAstroSigns.CERES]: {
        sign: EAstroSigns.CERES,
        label: 'Церес',
        elements: [],
        direction: EAstroDirection.NETRAL,
        zodiacMatchDictionary: {
            [EAstroZodiacSign.ARIES]: {
                label: 'Церес в знаке Овна',
                description: {}
            },
            [EAstroZodiacSign.TAURUS]: {
                label: 'Церес в знаке Тельца',
                description: {}
            },
            [EAstroZodiacSign.GEMINI]: {
                label: 'Церес в знаке Близнацов',
                description: {}
            },
            [EAstroZodiacSign.CANCER]: {
                label: 'Церес в знаке Рака',
                description: {}
            },
            [EAstroZodiacSign.LEO]: {
                label: 'Церес в знаке Льва',
                description: {}
            },
            [EAstroZodiacSign.VIRGO]: {
                label: 'Церес в знаке Девы',
                description: {}
            },
            [EAstroZodiacSign.LIBRA]: {
                label: 'Церес в знаке Весов',
                description: {}
            },
            [EAstroZodiacSign.SCORPIO]: {
                label: 'Церес в знаке Скорпеона',
                description: {}
            },
            [EAstroZodiacSign.SAGITTARIUS]: {
                label: 'Церес в знаке Стрельца',
                description: {}
            },
            [EAstroZodiacSign.CAPRICORN]: {
                label: 'Церес в знаке Козерога',
                description: {}
            },
            [EAstroZodiacSign.AQUARIUS]: {
                label: 'Церес в знаке Водолея',
                description: {}
            },
            [EAstroZodiacSign.PISCES]: {
                label: 'Церес в знаке Рыб',
                description: {}
            },
        },
        houseMatchDictionary: {
            1: {
                label: 'Церес в I доме',
                description: {}
            },
            2: {
                label: 'Церес в II доме',
                description: {}
            },
            3: {
                label: 'Церес в III доме',
                description: {}
            },
            4: {
                label: 'Церес в IV доме',
                description: {}
            },
            5: {
                label: 'Церес в V доме',
                description: {}
            },
            6: {
                label: 'Церес в VI доме',
                description: {}
            },
            7: {
                label: 'Церес в VII доме',
                description: {}
            },
            8: {
                label: 'Церес в VIII доме',
                description: {}
            },
            9: {
                label: 'Церес в IX доме',
                description: {}
            },
            10: {
                label: 'Церес в X доме',
                description: {}
            },
            11: {
                label: 'Церес в XI доме',
                description: {}
            },
            12: {
                label: 'Церес в XII доме',
                description: {}
            }
        }
    },
    [EAstroSigns.JUNO]: {
        sign: EAstroSigns.JUNO,
        label: 'Юнона',
        elements: [],
        direction: EAstroDirection.NETRAL,
        zodiacMatchDictionary: {
            [EAstroZodiacSign.ARIES]: {
                label: 'Юнона в знаке Овна',
                description: {}
            },
            [EAstroZodiacSign.TAURUS]: {
                label: 'Юнона в знаке Тельца',
                description: {}
            },
            [EAstroZodiacSign.GEMINI]: {
                label: 'Юнона в знаке Близнацов',
                description: {}
            },
            [EAstroZodiacSign.CANCER]: {
                label: 'Юнона в знаке Рака',
                description: {}
            },
            [EAstroZodiacSign.LEO]: {
                label: 'Юнона в знаке Льва',
                description: {}
            },
            [EAstroZodiacSign.VIRGO]: {
                label: 'Юнона в знаке Девы',
                description: {}
            },
            [EAstroZodiacSign.LIBRA]: {
                label: 'Юнона в знаке Весов',
                description: {}
            },
            [EAstroZodiacSign.SCORPIO]: {
                label: 'Юнона в знаке Скорпеона',
                description: {}
            },
            [EAstroZodiacSign.SAGITTARIUS]: {
                label: 'Юнона в знаке Стрельца',
                description: {}
            },
            [EAstroZodiacSign.CAPRICORN]: {
                label: 'Юнона в знаке Козерога',
                description: {}
            },
            [EAstroZodiacSign.AQUARIUS]: {
                label: 'Юнона в знаке Водолея',
                description: {}
            },
            [EAstroZodiacSign.PISCES]: {
                label: 'Юнона в знаке Рыб',
                description: {}
            },
        },
        houseMatchDictionary: {
            1: {
                label: 'Юнона в I доме',
                description: {}
            },
            2: {
                label: 'Юнона в II доме',
                description: {}
            },
            3: {
                label: 'Юнона в III доме',
                description: {}
            },
            4: {
                label: 'Юнона в IV доме',
                description: {}
            },
            5: {
                label: 'Юнона в V доме',
                description: {}
            },
            6: {
                label: 'Юнона в VI доме',
                description: {}
            },
            7: {
                label: 'Юнона в VII доме',
                description: {}
            },
            8: {
                label: 'Юнона в VIII доме',
                description: {}
            },
            9: {
                label: 'Юнона в IX доме',
                description: {}
            },
            10: {
                label: 'Юнона в X доме',
                description: {}
            },
            11: {
                label: 'Юнона в XI доме',
                description: {}
            },
            12: {
                label: 'Юнона в XII доме',
                description: {}
            }
        }
    },
    [EAstroSigns.PARS_FORTUNE]: {
        sign: EAstroSigns.PARS_FORTUNE,
        label: 'Парс Фортуна',
        elements: [],
        direction: EAstroDirection.NETRAL,
        zodiacMatchDictionary: {
            [EAstroZodiacSign.ARIES]: {
                label: 'Парс Фортуна в знаке Овна',
                description: {}
            },
            [EAstroZodiacSign.TAURUS]: {
                label: 'Парс Фортуна в знаке Тельца',
                description: {}
            },
            [EAstroZodiacSign.GEMINI]: {
                label: 'Парс Фортуна в знаке Близнацов',
                description: {}
            },
            [EAstroZodiacSign.CANCER]: {
                label: 'Парс Фортуна в знаке Рака',
                description: {}
            },
            [EAstroZodiacSign.LEO]: {
                label: 'Парс Фортуна в знаке Льва',
                description: {}
            },
            [EAstroZodiacSign.VIRGO]: {
                label: 'Парс Фортуна в знаке Девы',
                description: {}
            },
            [EAstroZodiacSign.LIBRA]: {
                label: 'Парс Фортуна в знаке Весов',
                description: {}
            },
            [EAstroZodiacSign.SCORPIO]: {
                label: 'Парс Фортуна в знаке Скорпеона',
                description: {}
            },
            [EAstroZodiacSign.SAGITTARIUS]: {
                label: 'Парс Фортуна в знаке Стрельца',
                description: {}
            },
            [EAstroZodiacSign.CAPRICORN]: {
                label: 'Парс Фортуна в знаке Козерога',
                description: {}
            },
            [EAstroZodiacSign.AQUARIUS]: {
                label: 'Парс Фортуна в знаке Водолея',
                description: {}
            },
            [EAstroZodiacSign.PISCES]: {
                label: 'Парс Фортуна в знаке Рыб',
                description: {}
            },
        },
        houseMatchDictionary: {
            1: {
                label: 'Парс Фортуна в I доме',
                description: {}
            },
            2: {
                label: 'Парс Фортуна в II доме',
                description: {}
            },
            3: {
                label: 'Парс Фортуна в III доме',
                description: {}
            },
            4: {
                label: 'Парс Фортуна в IV доме',
                description: {}
            },
            5: {
                label: 'Парс Фортуна в V доме',
                description: {}
            },
            6: {
                label: 'Парс Фортуна в VI доме',
                description: {}
            },
            7: {
                label: 'Парс Фортуна в VII доме',
                description: {}
            },
            8: {
                label: 'Парс Фортуна в VIII доме',
                description: {}
            },
            9: {
                label: 'Парс Фортуна в IX доме',
                description: {}
            },
            10: {
                label: 'Парс Фортуна в X доме',
                description: {}
            },
            11: {
                label: 'Парс Фортуна в XI доме',
                description: {}
            },
            12: {
                label: 'Парс Фортуна в XII доме',
                description: {}
            }
        }
    }
}