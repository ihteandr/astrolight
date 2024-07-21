import { useState } from "react";
import { IAstroAspect } from "../../../../../../types/astro"
import { getPointOnChart } from "../../../../../../utils/math.utils";
import { ThinPenProps } from "../../../../../../utils/svg/ul-helpers";
import clsx from "clsx";
import styles from './Aspect.module.css'
export type AspectProps = {
    aspect: IAstroAspect,
    size: number,
    signSize: number
}
export function Aspect({ size, signSize, aspect }: AspectProps) {
    const outerRadius = size / 2;
    const innerRadius = outerRadius - size / 10;
    const internalSpace = {
        outerRadius: size / 4,
        innerRadius: size / 4 - size / 20
    }
    const linePoint1 = getPointOnChart(size / 2 - ThinPenProps.strokeWidth / 2, internalSpace.innerRadius - signSize /4, aspect.sign1Degree / 180 * Math.PI)
    const linePoint2 = getPointOnChart(size / 2 - ThinPenProps.strokeWidth / 2, internalSpace.innerRadius - signSize /4, aspect.sign2Degree / 180 * Math.PI)
    return (
        <line
            {...ThinPenProps}
            x1={linePoint1.x}
            y1={linePoint1.y}
            x2={linePoint2.x}
            y2={linePoint2.y}
            className={clsx(
                styles.Aspect,
                'aspect',
                aspect.action.toLocaleLowerCase(),
                aspect.type.toLowerCase(),
                aspect.sign1.name,
                aspect.sign2.name
            )}
        />
    )
}