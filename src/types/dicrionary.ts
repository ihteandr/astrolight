export interface IExplanation {
    label: string,
    description: string
}

export type TDictionary = {
    [k: string]: IExplanation
}