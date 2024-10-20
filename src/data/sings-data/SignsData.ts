import { EAstroAspectType, EAstroDirection } from "../../types/astro";
import { EDictinaryType, TDictionary } from "../../types/dicrionary";
import { EAstroSigns, EAstroZodiacSign, ECrossSign, ESexSign } from "../../types/signs";
import { EAstroElements } from "../elements/ElementsData";
import JUPITER from "./signs/Jupiter";
import MARS from "./signs/Mars";
import MERCURY from "./signs/Mercury";
import MOON from "./signs/Moon";
import SATURN from "./signs/Saturn";
import SUN from "./signs/Sun";
import URANUS from "./signs/Uranus";
import VENUS from "./signs/Venus";

export type SignSymbolDataType = {
    sign: EAstroSigns,
    label: string,
    sex?: ESexSign,
    openAiLabel?: string,
    elements: EAstroElements[],
    direction: EAstroDirection;
    houseMatchAndAspectMatch?: { [k: string]: { aspects: EAstroAspectType[], dictionary: TDictionary }[] };
    zodiacSexMatchDictionary?: TDictionary;
    crossMatchDictinonary?: TDictionary;
    elementMatchDictionary?: TDictionary;
    zodiacMatchDictionary: TDictionary;
    houseMatchDictionary: TDictionary;
    retro?: {
        zodiacMatchDictionary: TDictionary;
        houseMatchDictionary: TDictionary;
    }
}

export const SIGNS_SYMBOL_DATA: { [k: string]: SignSymbolDataType } = {
    [EAstroSigns.SUN]: SUN, 
    [EAstroSigns.MOON]: MOON,
    [EAstroSigns.MERCURY]: MERCURY,
    [EAstroSigns.VENUS]: VENUS,
    [EAstroSigns.MARS]: MARS,
    [EAstroSigns.JUPITER]: JUPITER,
    [EAstroSigns.SATURN]: SATURN,
    [EAstroSigns.URANUS]: URANUS,
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
        label: 'Восходящий Узел',
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
    [EAstroSigns.DOWN_NODE]: {
        sign: EAstroSigns.DOWN_NODE,
        label: 'Южный Узел',
        openAiLabel: 'Южный Узел',
        elements: [],
        direction: EAstroDirection.NETRAL,
        zodiacMatchDictionary: {
            [EAstroZodiacSign.ARIES]: {
                label: 'Южный Узел в знаке Овна',
                description: {}
            },
            [EAstroZodiacSign.TAURUS]: {
                label: 'Южный Узел в знаке Тельца',
                description: {}
            },
            [EAstroZodiacSign.GEMINI]: {
                label: 'Южный Узел в знаке Близнацов',
                description: {}
            },
            [EAstroZodiacSign.CANCER]: {
                label: 'Южный Узел в знаке Рака',
                description: {}
            },
            [EAstroZodiacSign.LEO]: {
                label: 'Южный Узел в знаке Льва',
                description: {}
            },
            [EAstroZodiacSign.VIRGO]: {
                label: 'Южный Узел в знаке Девы',
                description: {}
            },
            [EAstroZodiacSign.LIBRA]: {
                label: 'Южный Узел в знаке Весов',
                description: {}
            },
            [EAstroZodiacSign.SCORPIO]: {
                label: 'Южный Узел в знаке Скорпеона',
                description: {}
            },
            [EAstroZodiacSign.SAGITTARIUS]: {
                label: 'Южный Узел в знаке Стрельца',
                description: {}
            },
            [EAstroZodiacSign.CAPRICORN]: {
                label: 'Южный Узел в знаке Козерога',
                description: {}
            },
            [EAstroZodiacSign.AQUARIUS]: {
                label: 'Южный Узел в знаке Водолея',
                description: {}
            },
            [EAstroZodiacSign.PISCES]: {
                label: 'Южный Узел в знаке Рыб',
                description: {}
            },
        },
        houseMatchDictionary: {
            1: {
                label: 'Южный Узел в I доме',
                description: {}
            },
            2: {
                label: 'Южный Узел в II доме',
                description: {}
            },
            3: {
                label: 'Южный Узел в III доме',
                description: {}
            },
            4: {
                label: 'Южный Узел в IV доме',
                description: {}
            },
            5: {
                label: 'Южный Узел в V доме',
                description: {}
            },
            6: {
                label: 'Южный Узел в VI доме',
                description: {}
            },
            7: {
                label: 'Южный Узел в VII доме',
                description: {}
            },
            8: {
                label: 'Южный Узел в VIII доме',
                description: {}
            },
            9: {
                label: 'Южный Узел в IX доме',
                description: {}
            },
            10: {
                label: 'Южный Узел в X доме',
                description: {}
            },
            11: {
                label: 'Южный Узел в XI доме',
                description: {}
            },
            12: {
                label: 'Южный Узел в XII доме',
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
        label: 'Церерa',
        elements: [],
        direction: EAstroDirection.NETRAL,
        zodiacMatchDictionary: {
            [EAstroZodiacSign.ARIES]: {
                label: 'Церерa в знаке Овна',
                description: {}
            },
            [EAstroZodiacSign.TAURUS]: {
                label: 'Церерa в знаке Тельца',
                description: {}
            },
            [EAstroZodiacSign.GEMINI]: {
                label: 'Церерa в знаке Близнацов',
                description: {}
            },
            [EAstroZodiacSign.CANCER]: {
                label: 'Церерa в знаке Рака',
                description: {}
            },
            [EAstroZodiacSign.LEO]: {
                label: 'Церерa в знаке Льва',
                description: {}
            },
            [EAstroZodiacSign.VIRGO]: {
                label: 'Церерa в знаке Девы',
                description: {}
            },
            [EAstroZodiacSign.LIBRA]: {
                label: 'Церерa в знаке Весов',
                description: {}
            },
            [EAstroZodiacSign.SCORPIO]: {
                label: 'Церерa в знаке Скорпеона',
                description: {}
            },
            [EAstroZodiacSign.SAGITTARIUS]: {
                label: 'Церерa в знаке Стрельца',
                description: {}
            },
            [EAstroZodiacSign.CAPRICORN]: {
                label: 'Церерa в знаке Козерога',
                description: {}
            },
            [EAstroZodiacSign.AQUARIUS]: {
                label: 'Церерa в знаке Водолея',
                description: {}
            },
            [EAstroZodiacSign.PISCES]: {
                label: 'Церерa в знаке Рыб',
                description: {}
            },
        },
        houseMatchDictionary: {
            1: {
                label: 'Церерa в I доме',
                description: {}
            },
            2: {
                label: 'Церерa в II доме',
                description: {}
            },
            3: {
                label: 'Церерa в III доме',
                description: {}
            },
            4: {
                label: 'Церерa в IV доме',
                description: {}
            },
            5: {
                label: 'Церерa в V доме',
                description: {}
            },
            6: {
                label: 'Церерa в VI доме',
                description: {}
            },
            7: {
                label: 'Церерa в VII доме',
                description: {}
            },
            8: {
                label: 'Церерa в VIII доме',
                description: {}
            },
            9: {
                label: 'Церерa в IX доме',
                description: {}
            },
            10: {
                label: 'Церерa в X доме',
                description: {}
            },
            11: {
                label: 'Церерa в XI доме',
                description: {}
            },
            12: {
                label: 'Церерa в XII доме',
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