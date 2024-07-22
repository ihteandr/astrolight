import clsx from "clsx";
import { IHouse } from "../../../../../../types/astro"
import { getPointOnChart } from "../../../../../../utils/math.utils";
import { BoldPenProps, ThinPenProps } from "../../../../../../utils/svg/ul-helpers";
import styles from './House.module.css'
import { useState } from "react";
export type HouseProps = {
    size: number,
    house: IHouse,
    onClick?: (house: IHouse) => void,
    rotate: number,
    highlight?: boolean
}
export function House ({ rotate, size, highlight, house, onClick }: HouseProps) {
    const [textHovered, setTextHouver] = useState(false)
    const outerRadius = size / 2;
    const innerRadius = outerRadius - size / 10;
    const internalSpace = {
        outerRadius: size / 4,
        innerRadius: size / 4 - size / 20
    }
    let linePenProps = [1, 4, 7, 10].includes(house.number) ? BoldPenProps : ThinPenProps
    const startLinePoint1 = getPointOnChart(size / 2 - ThinPenProps.strokeWidth / 2, internalSpace.innerRadius, house.start / 180 * Math.PI - rotate)
    const startLinePoint2 = getPointOnChart(size / 2 - ThinPenProps.strokeWidth / 2, internalSpace.outerRadius, house.start / 180 * Math.PI - rotate)
    const bigStartLinePoint = getPointOnChart(size / 2 - ThinPenProps.strokeWidth / 2, innerRadius, house.start / 180 * Math.PI - rotate)
    const bigEndLinePoint = getPointOnChart(size / 2 - ThinPenProps.strokeWidth / 2, innerRadius, house.end / 180 * Math.PI - rotate)
    const endLinePoint1 = getPointOnChart(size / 2 - ThinPenProps.strokeWidth / 2, internalSpace.innerRadius, house.end / 180 * Math.PI - rotate)
    const endLinePoint2 = getPointOnChart(size / 2 - ThinPenProps.strokeWidth / 2, internalSpace.outerRadius, house.end / 180 * Math.PI - rotate)
    let d = `
        M${startLinePoint1.x},${startLinePoint1.y}
        L${startLinePoint2.x},${startLinePoint2.y} 
        A${internalSpace.outerRadius},${internalSpace.outerRadius} 0 0 0 ${endLinePoint2.x},${endLinePoint2.y}
        L${endLinePoint1.x},${endLinePoint1.y}
        A${internalSpace.innerRadius},${internalSpace.innerRadius} 0 0 1 ${startLinePoint1.x},${startLinePoint1.y}
        Z
        `
    let bigD = `
        M${startLinePoint1.x},${startLinePoint1.y}
        L${bigStartLinePoint.x},${bigStartLinePoint.y} 
        A${innerRadius},${innerRadius} 0 0 0 ${bigEndLinePoint.x},${bigEndLinePoint.y}
        L${endLinePoint1.x},${endLinePoint1.y}
        A${internalSpace.innerRadius},${internalSpace.innerRadius} 0 0 1 ${startLinePoint1.x},${startLinePoint1.y}
        Z
    `
    const cuspidLinePoint = getPointOnChart(size / 2 - ThinPenProps.strokeWidth / 2, innerRadius, house.start / 180 * Math.PI - rotate)
    let centerDegree = house.start > house.end ? 360 + house.start + house.end : house.start + house.end ;
    const center = getPointOnChart(size / 2 - ThinPenProps.strokeWidth / 2, (internalSpace.innerRadius + internalSpace.outerRadius) / 2, centerDegree / 2 / 180 * Math.PI - rotate)
    return (
        <svg>
            <line
                {...linePenProps}
                x1={startLinePoint1.x}
                y1={startLinePoint1.y}
                x2={cuspidLinePoint.x}
                y2={cuspidLinePoint.y}
                className={clsx('house-line-zodiac', `house${house.number}`)} />
            {/* <path d={d} id={`house${house.number}`} {...ThinPenProps} fill="transparent" className={styles.House} /> */}
            <path
                d={bigD}
                id={`house${house.number}`}
                {...ThinPenProps}
                fill="transparent"
                onClick={() => onClick?.(house) }
                className={clsx(styles.House, { [styles.HouseOriginalHightlight]: highlight, [styles.HouseHightlight]: textHovered})} />
            <text
                x={center.x - 6}
                y={center.y + 5}
                {...ThinPenProps}
                style={{ cursor: 'pointer' }}
                onMouseOver={() => setTextHouver(true)}
                onMouseLeave={() => setTextHouver(false)}
                onClick={() => onClick?.(house) }
                fontSize={12}>{house.number}</text>
        </svg>
    )
}