import { useEffect, useRef } from "react";
import { Zodiac } from "./components/Zodiac/Zodiac";
import { ZODIAC_SYMBOL_DATA } from "../../../../../../../data/zodiac/ZodiacData";
import { PenProps, ThinPenProps } from "../../../../../../../utils/svg/ul-helpers";

export type ZodiakChatProps = {
    size: number
}

export function ZodiacChart ({ size }: ZodiakChatProps) {
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
    
    
    return (
        <svg height={size} width={size} xmlns="http://www.w3.org/2000/svg">
            {Object.values(ZODIAC_SYMBOL_DATA).map((symbolData, index) => {
                // if (index !== 0)return
                return <Zodiac data={symbolData} size={size} />
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