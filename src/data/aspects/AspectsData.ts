import { EAstroAspectAction, EAstroAspectClassification, EAstroAspectSpecification, EAstroAspectType } from "../../types/astro"

type LabelMapType =  { [k: string]: { label: string } }

export const ASPECT_TYPE_LABELS: LabelMapType = {
    [EAstroAspectType.CONJUNCTION]: {
        label: 'соодинение'
    },
    [EAstroAspectType.SEXTILE]: {
        label: 'секстиль'
    },
    [EAstroAspectType.QUADRATURE]: {
        label: 'квадратура'
    },
    [EAstroAspectType.TRINE]: {
        label: 'тригон'
    },
    [EAstroAspectType.OPPOSITION]: {
        label: 'оппозиция'
    },
    [EAstroAspectType.VIGINTILE]: {
        label: 'вигинтиль'
    },
    [EAstroAspectType.SEMI_NONAGON]: {
        label: 'полунонагон'
    },
    [EAstroAspectType.SEMI_SEXTILE]: {
        label: 'полусекстиль'
    },
    [EAstroAspectType.DECILE]: {
        label: 'дециль'
    },
    [EAstroAspectType.NONAGON]: {
        label: 'нонагон'
    },
    [EAstroAspectType.SEMI_QUADRAT]: {
        label: 'полуквадрат'
    },
    [EAstroAspectType.QUINTILE]: {
        label: 'квинтиль'
    },
    [EAstroAspectType.BI_NONAGON]: {
        label: 'бинонагон'
    },
    [EAstroAspectType.SINTAGON]: {
        label: 'сентагон'
    },
    [EAstroAspectType.TRI_DECILE]: {
        label: 'тридециль'
    },
    [EAstroAspectType.SESQUIQUADRAT]: {
        label: 'полутораквадрат'
    },
    [EAstroAspectType.BIQUINTILE]: {
        label: 'биквинтиль'
    },
    [EAstroAspectType.QUINOX]: {
        label: 'квинокс'
    },
}

export const ASPECT_ACTION_LABELS: LabelMapType = {
    [EAstroAspectAction.DEPENDS_PLANETS]: {
        label: 'Зависит от Планет'
    },
    [EAstroAspectAction.CREATIVE]: {
        label: 'Творческий'
    },
    [EAstroAspectAction.HARMONIC]: {
        label: 'Гормачный'
    },
    [EAstroAspectAction.KARMIC]: {
        label: 'Кармический'
    },
    [EAstroAspectAction.TENSE]: {
        label: 'Напреженный'
    },
}
export const ASPECT_CLASSIFICATION_LABELS: LabelMapType = {
    [EAstroAspectClassification.COMPLETED]: {
        label: 'Завершенный'
    },
    [EAstroAspectClassification.INCOMPLETED]: {
        label: 'Незавершенный'
    },
}

export const ASPECT_SPECIFICATION_LABELS: LabelMapType = {
    [EAstroAspectSpecification.APPLIQUE]: {
        label: 'Сходящийся'
    },
    [EAstroAspectSpecification.SEPARATION]: {
        label: 'Разходящийся'
    },
    [EAstroAspectSpecification.EXACT]: {
        label: 'Точный'
    },
}