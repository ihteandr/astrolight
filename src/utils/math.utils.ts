export function circleIntersect(x0: number, y0: number, r0: number, x1: number, y1: number, r1: number, acceptableMistake: number = 0) {
    // console.log('hypot', Math.hypot(x0 - x1, y0 - y1), r0 + r1, acceptableMistake)
    return Math.hypot(x0 - x1, y0 - y1) <= r0 + r1 - acceptableMistake;
}