import clsx from "clsx"
import { SignIcon } from "../../../../../../atoms/Icon/SingIcon"
import { isSvgIconExists } from "../../../../../../atoms/Icon/SvgIcon"
import { SIGNS_SYMBOL_DATA } from "../../../../../../data/sings-data/SignsData"
import { ISign } from "../../../../../../types/signs"
import { IPoint } from "../../../../../../types/svg"
import { circleIntersect, getPointOnChart } from "../../../../../../utils/math.utils"
import { PenProps, ThinPenProps } from "../../../../../../utils/svg/ul-helpers"
import styles from './Sign.module.css'
import { useState } from "react"

export type SingProps = {
    getSignPostion: (sing: ISign) => IPoint,
    sign: ISign,
    size: number,
    onClickSign?: (sign: ISign) => void,
    signSize: number
}

export function Sign({ getSignPostion, onClickSign, signSize, sign, size }: SingProps) {
    const [hovered, setHovered] = useState(false)
    const outerRadius = size / 2;
    const innerRadius = outerRadius - size / 10;
    const internalSpace = {
        outerRadius: size / 4,
        innerRadius: size / 4 - size / 20
    }
    const symbolData = SIGNS_SYMBOL_DATA.find((symbolData) => symbolData.sign === sign.name)
    const radius = 5;
    const angle = (sign.longitude) / 180 * Math.PI
    const point = getSignPostion(sign)
    const linePoint1 = getPointOnChart(size / 2 - ThinPenProps.strokeWidth / 2, innerRadius, angle)
    const linePoint2 = getPointOnChart(size / 2 - ThinPenProps.strokeWidth / 2, innerRadius - signSize / 2, angle)
    const innerLinePoint1 = getPointOnChart(size / 2 - PenProps.strokeWidth / 2, internalSpace.innerRadius, angle)
    const innerLinePoint2 = getPointOnChart(size / 2 - PenProps.strokeWidth / 2, internalSpace.innerRadius - signSize / 4, angle)
    return (
        <g key={sign.name}>
            <line
                {...ThinPenProps}
                x1={linePoint1.x}
                y1={linePoint1.y}
                x2={linePoint2.x}
                y2={linePoint2.y}
                className={clsx(
                    'sign-line-zodiac', sign.name, 
                    'element', symbolData?.elements[0] || 'NoElement',
                    { [styles.SignHightlith]: hovered })} />
            <line
                {...PenProps}
                x1={innerLinePoint1.x}
                y1={innerLinePoint1.y}
                x2={innerLinePoint2.x}
                y2={innerLinePoint2.y}
                className={clsx(
                    'sign-line-zodiac', sign.name,
                     'element', symbolData?.elements[0] || 'NoElement',
                     { [styles.SignHightlith]: hovered })} />
            {isSvgIconExists(sign.name) ? 
                <SignIcon
                isRetro={sign.isRetro} 
                name={sign.name}
                onClick={ () => onClickSign?.(sign)}
                x={point.x - signSize / 2}
                y={point.y - signSize / 2}
                size={20}
                onMouseLeave={() => setHovered(false)}
                onMouseOver={() => setHovered(true)}
                className={clsx(
                    'sign', sign.name, 
                    'element', symbolData?.elements[0] || 'NoElement',
                    styles.Sign)}/>
            :     <circle
                onClick={ () => onClickSign?.(sign)}
                cx={point.x}
                cy={point.y}
                r={radius}
                style={{ cursor: 'pointer' }}
                className={clsx('sign', sign.name)}  />
            }
        </g>
    ) 
}