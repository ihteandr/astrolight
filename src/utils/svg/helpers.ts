export function initPen (element: SVGElement) {
    element.setAttribute('stroke', 'black')
    element.setAttribute('fill', 'none')
    element.setAttribute('stroke-width', '2')
    return element
}
export function createSVGElement (name: string) {
    return document.createElementNS('http://www.w3.org/2000/svg', name)
}
