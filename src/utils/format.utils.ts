import * as showdown from 'showdown'

const converter = new showdown.Converter({
    headerLevelStart: 1
});

export function setZeros (value: number | string, length: number) {
    let result = value.toString();
    while(length - result.length > 0) {
        result = '0' + result
    }
    return result;
}

export function formatOpenAiMessage (text: string) {
    return text;
}