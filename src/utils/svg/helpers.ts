import { BoldPenProps, PenProps, ThinPenProps } from "./ul-helpers"

export function initPen (element: SVGElement) {
    element.setAttribute('stroke', PenProps.stroke)
    element.setAttribute('fill', PenProps.fill)
    element.setAttribute('stroke-width', `${PenProps.strokeWidth}px`)
    return element
}
export function initBoldPen (element: SVGElement) {
    element.setAttribute('stroke', BoldPenProps.stroke)
    element.setAttribute('fill', BoldPenProps.fill)
    element.setAttribute('stroke-width', `${BoldPenProps.strokeWidth}px`)
    return element
}
export function initThinPen (element: SVGElement) {
    element.setAttribute('stroke', ThinPenProps.stroke)
    element.setAttribute('fill', ThinPenProps.fill)
    element.setAttribute('stroke-width', `${ThinPenProps.strokeWidth}px`)
    return element
}
export function createSVGElement (name: string) {
    return document.createElementNS('http://www.w3.org/2000/svg', name)
}
