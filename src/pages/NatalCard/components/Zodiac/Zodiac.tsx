import { useEffect, useRef } from "react";
import { createSVGElement, initPen } from "../../../../utils/svg/helpers";
import { PenProps } from "../../../../utils/svg/ul-helpers";
import { ZODIAC_SYMBOL_DATA } from "../../../../data/zodiac/main";
import { SvgIcon } from "../../../../atoms/Icon/SvgIcon";
import clsx from "clsx";

export type ZodiakProps = {
    size: number
}

export function Zodiak ({ size }: ZodiakProps) {
    const svgRef = useRef<SVGSVGElement | null>(null)
    const outerRadius = size / 2;
    const center = {
        x: size / 2,
        y: size / 2
    }
    const getPointOnCircle = (offset: number, num: number, raduis: number, startAngle: number = 0) => {
        return {
            x: offset + raduis * Math.cos(startAngle + num * Math.PI / 6),
            y: offset + raduis * Math.sin(startAngle + num * Math.PI / 6)
        }
    }
    
    const innerRadius = outerRadius - size / 10;
    const renderZodiakBorders = (svgContainer: SVGSVGElement) => {
        for (let i = 0; i < 12; i ++) {
            const line = initPen(createSVGElement('line'));
            const innerPoint = getPointOnCircle(size / 2, i, innerRadius);
            const outerPoint = getPointOnCircle(size / 2, i, outerRadius);
            line.setAttribute('x1', `${innerPoint.x}px`);
            line.setAttribute('y1', `${innerPoint.y}px`);
            line.setAttribute('x2', `${outerPoint.x}px`);
            line.setAttribute('y2', `${outerPoint.y}px`);
            svgContainer.appendChild(line)
        }
    }
    const renderZodiak = () => {
        const svgContainer: SVGSVGElement | null = svgRef.current;
        if (svgContainer) {
            svgContainer.innerHTML = ''
            renderZodiakBorders(svgContainer)
        }
    }

    useEffect(() => {
        renderZodiak()
    }, [renderZodiak])

    return (
        <svg height={size} style={ { position: 'relative' } } width={size} xmlns="http://www.w3.org/2000/svg">
            {Object.values(ZODIAC_SYMBOL_DATA).map((symbolData) => {
                const coords = getPointOnCircle(size / 2, 12 - symbolData.order + 1, (innerRadius + outerRadius) / 2, Math.PI - Math.PI / 12)
                const iconSize = size / 20;
                const comp = <SvgIcon
                    size={iconSize}
                    key={symbolData.order}
                    name={symbolData.sign}
                    x={coords.x - iconSize / 2}
                    y={coords.y - iconSize / 2}
                    style={{ cursor: "pointer" }}
                    onClick={() => console.log(symbolData)}
                    className={clsx('element', symbolData.element)}
                />
                return comp 
            })}
            <g {...PenProps}>
                <circle cx={center.x} cy={center.y} r={outerRadius}/>
                <circle cx={center.x} cy={center.y} r={innerRadius}/>
            </g>
            <g ref={svgRef}>
            </g>
            
        </svg>
    )
}