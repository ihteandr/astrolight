import { useEffect, useRef } from "react";
import { createSVGElement, initBoldPen, initPen, initThinPen } from "../../../../utils/svg/helpers";
import { PenProps, ThinPenProps } from "../../../../utils/svg/ul-helpers";
import { ZODIAC_SYMBOL_DATA } from "../../../../data/zodiac/ZodiacData";
import { SvgIcon } from "../../../../atoms/Icon/SvgIcon";
import clsx from "clsx";

export type ZodiakProps = {
    size: number
}

export function Zodiak ({ size }: ZodiakProps) {
    const svgRef = useRef<SVGSVGElement | null>(null)
    const outerRadius = size / 2;
    const innerRadius = outerRadius - size / 10;
    const internalSpace = {
        outerRadius: size / 4,
        innerRadius: size / 4 - size / 20
    }
    const center = {
        x: size / 2,
        y: size / 2
    }
    const getPointOnCircle = (offset: number, num: number, raduis: number, startAngle: number = 0, deltaAngle: number = Math.PI / 6) => {
        return {
            x: offset + raduis * Math.cos(startAngle + num * deltaAngle),
            y: offset + raduis * Math.sin(startAngle + num * deltaAngle)
        }
    }
    
    const renderZodiakBorders = (svgContainer: SVGSVGElement) => {
        for (let i = 0; i < 12; i ++) {
            const line = initPen(createSVGElement('line'));
            const innerPoint = getPointOnCircle(size / 2 - PenProps.strokeWidth / 2, i, innerRadius);
            const outerPoint = getPointOnCircle(size / 2 - PenProps.strokeWidth / 2, i, outerRadius);
            line.setAttribute('x1', `${innerPoint.x}px`);
            line.setAttribute('y1', `${innerPoint.y}px`);
            line.setAttribute('x2', `${outerPoint.x}px`);
            line.setAttribute('y2', `${outerPoint.y}px`);
            svgContainer.appendChild(line)
        }
    }
    const renderAngleLines = (svgContainer: SVGSVGElement) => {
        for (let i = 0; i < 360; i++) {
            let line = createSVGElement('line');
            let radius1 = innerRadius;
            let radius2;
            line = initThinPen(line)
            if (i % 10 === 0) {
                radius2 = innerRadius + (outerRadius - innerRadius) / 2
            } else if (i % 5 === 0) {
                radius2 = innerRadius + (outerRadius - innerRadius) / 3
            } else {
                radius2 = innerRadius + (outerRadius - innerRadius) / 6
            }
            let innerPoint = getPointOnCircle(size / 2 - ThinPenProps.strokeWidth / 2, i, radius1, 0, Math.PI / 180);
            let outerPoint = getPointOnCircle(size / 2 - ThinPenProps.strokeWidth / 2, i, radius2, 0, Math.PI / 180);
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
            renderAngleLines(svgContainer)
        }
    }

    useEffect(() => {
        renderZodiak()
    }, [renderZodiak])

    return (
        <svg height={size} width={size} xmlns="http://www.w3.org/2000/svg">
            {Object.values(ZODIAC_SYMBOL_DATA).map((symbolData) => {
                const iconSize = size / 20;
                const coords = getPointOnCircle(size / 2 - iconSize / 2, 12 - symbolData.order + 1, (innerRadius + outerRadius) / 2, Math.PI - Math.PI / 12)
                const comp = <SvgIcon
                    size={iconSize}
                    key={symbolData.order}
                    name={symbolData.sign}
                    x={coords.x}
                    y={coords.y}
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
            <g {...ThinPenProps}>
                <circle cx={center.x} cy={center.y} r={internalSpace.outerRadius}/>
                <circle cx={center.x} cy={center.y} r={internalSpace.innerRadius}/>
            </g>
            <g ref={svgRef}>
            </g>
        </svg>
    )
}