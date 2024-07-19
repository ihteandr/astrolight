export function setZeros (value: number | string, length: number) {
    let result = value.toString();
    while(length - result.length > 0) {
        result = '0' + result
    }
    return result;
}