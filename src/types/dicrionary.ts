export interface IExplanation {
    label: string,
    description: { [k: string]: string },
    openAIQuestion?: string
}

export enum EDictinaryType {
    VRONSKY = 'VRONSKY',
    OPENAI = 'OPENAI'
}

export type TDictionary = {
    [k: string]: IExplanation
}

export const DICTIONARY_TYPES: { [k: string]: string } = {
    [EDictinaryType.VRONSKY]: 'Версия Вронского С.А.'
}

export const DEFAULT_DICTINARY_TYPE = EDictinaryType.VRONSKY