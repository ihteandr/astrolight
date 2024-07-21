import * as showdown from 'showdown'

const converter = new showdown.Converter({
    headerLevelStart: 3
});

export function setZeros (value: number | string, length: number) {
    let result = value.toString();
    while(length - result.length > 0) {
        result = '0' + result
    }
    return result;
}

export function formatOpenAiMessage (text: string) {
    text = text.replace(/\\n/ig, '<br\>').replace(/\"/g, '')
    let i = 0
    while(text.indexOf('###') !== -1) {
        if (i > 10) break;
        const index = text.indexOf('###')
        const endindex = index + text.substring(index).indexOf('<br\>');
        console.log('text.substring(index + 3, endindex)',  text.indexOf('###'),text.substring(index), text.substring(index + 3, endindex), index, endindex)
        text = text.substring(0, index) + '<h3>' + text.substring(index + 3, endindex) + '</h3>' + text.substring(endindex, text.length)
        i++
    }
    return converter.makeHtml(text)
}