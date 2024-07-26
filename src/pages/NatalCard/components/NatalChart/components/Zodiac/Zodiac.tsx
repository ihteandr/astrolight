import clsx from "clsx";
import styles from './Zodiac.module.css'
import { useState } from "react";
import { range } from "lodash";
import { ZodiacSymbolDataType } from "../../../../../../data/zodiac/ZodiacData";
import { ThinPenProps } from "../../../../../../utils/svg/ul-helpers";
import { SvgIcon } from "../../../../../../atoms/Icon/SvgIcon";
import { getPointOnChart } from "../../../../../../utils/math.utils";
import { EAstroZodiacSign } from "../../../../../../types/signs";
export type ZodiacProps = {
    size: number,
    data: ZodiacSymbolDataType,
    rotate: number,
    hoverHightlight: boolean,
    onClickZodiac?: (zodiac: EAstroZodiacSign) => void,
    highlight?: boolean
}

export function Zodiac({ onClickZodiac, hoverHightlight, highlight, rotate, size, data }: ZodiacProps) {
    const [hovered, setHovered] = useState(false)
    const iconSize = size / 20;
    const outerRadius = size / 2;
    const innerRadius = outerRadius - size / 10;
    
    const getPointOnCircle = (offset: number, num: number, raduis: number, startAngle: number = 0, deltaAngle: number = Math.PI / 6) => {
        return getPointOnChart(offset, raduis, -1 * (startAngle + num * deltaAngle) + Math.PI  - rotate)
    }
    const num = 12 - data.order + 1
    
    const signBlockAngle = Math.PI
    const angles = range((data.order - 1) * 30, data.order * 30);
    const coords = getPointOnCircle(size / 2 - iconSize / 2, num, (innerRadius + outerRadius) / 2 + 4, signBlockAngle - Math.PI / 12)
    
    const startLinePoint1 = getPointOnCircle(size / 2,  num, innerRadius, signBlockAngle)
    const startLinePoint2 = getPointOnCircle(size / 2, num, outerRadius, signBlockAngle)
    const endLinePoint1 = getPointOnCircle(size / 2, num - 1, outerRadius, signBlockAngle)
    const endLinePoint2 = getPointOnCircle(size / 2, num - 1, innerRadius, signBlockAngle)
    let d = `
        M${startLinePoint1.x},${startLinePoint1.y}
        L${startLinePoint2.x},${startLinePoint2.y} 
        A${outerRadius},${outerRadius} 0 0 0 ${endLinePoint1.x},${endLinePoint1.y}
        L${endLinePoint2.x},${endLinePoint2.y}
        A${innerRadius},${innerRadius} 0 0 1 ${startLinePoint1.x},${startLinePoint1.y}
        Z
        `
    return <svg onClick={() => { onClickZodiac?.(data.sign) }}>
        {angles.map((angle, index) => {
            let radius1 = innerRadius;
            let radius2;
            if (angle % 10 === 0) {
                radius2 = innerRadius + (outerRadius - innerRadius) / 2
            } else if (angle % 5 === 0) {
                radius2 = innerRadius + (outerRadius - innerRadius) / 3
            } else {
                radius2 = innerRadius + (outerRadius - innerRadius) / 6
            }
            let innerPoint = getPointOnCircle(size / 2, -1 * angle, radius1, signBlockAngle, Math.PI / 180);
            let outerPoint = getPointOnCircle(size / 2, -1 * angle, radius2, signBlockAngle, Math.PI / 180);
            return <line key={angle + 'index' + index} {...ThinPenProps} x1={innerPoint.x} y1={innerPoint.y} x2={outerPoint.x} y2={outerPoint.y}  />
            
        })}
        <path
            d={d}
            id={`zodiac-${data.sign}`}
            {...ThinPenProps}
            fill="transparent"
            onMouseLeave={() => setHovered(false)}
            onMouseOver={() => setHovered(true)}
            className={clsx(styles.Zodiac, { [styles.ZodiacOriginalHightlight]: highlight, [styles.ZodiacHightlight]: hoverHightlight && hovered})} />
        <SvgIcon
            size={iconSize}
            name={data.sign}
            x={coords.x}
            y={coords.y}
            style={{ cursor: 'pointer' }}
            onClick={() => console.log(data)}
            onMouseLeave={() => setHovered(false)}
            onMouseOver={() => setHovered(true)}
            className={clsx('element', data.element)} 
         />
    </svg> 
}