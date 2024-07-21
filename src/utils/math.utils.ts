export function circleIntersect(x0: number, y0: number, r0: number, x1: number, y1: number, r1: number, acceptableMistake: number = 0) {
    return Math.hypot(x0 - x1, y0 - y1) <= r0 + r1 - acceptableMistake;
}


export const getPointOnChart = (offset: number, raduis: number, angle: number) => {
    return {
        x: offset + raduis * Math.cos(Math.PI - angle),
        y: offset + raduis * Math.sin(Math.PI - angle)
    }
}