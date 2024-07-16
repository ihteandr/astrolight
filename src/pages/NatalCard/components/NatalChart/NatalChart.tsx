import clsx from "clsx";
import { ISign } from "../../../../types/signs"
import { Zodiak } from "../Zodiac/Zodiac"
import { PenProps, ThinPenProps } from "../../../../utils/svg/ul-helpers";
import { DateTimeValue } from "../../../../components/DateTime/DateTime";
import { useCallback, useEffect, useState } from "react";
import data from '../../../../data/signs/SignsData.json';
import { IAstroPlace } from "../../../../types/astro";
import { useNatalCardData } from "../../../../api/natal-card/natal-card.api";
import { Storage } from "../../../../storage";
import { SvgIcon, isSvgIconExists } from "../../../../atoms/Icon/SvgIcon";
import { IPoint } from "../../../../types/svg";
import { circleIntersect } from "../../../../utils/math.utils";
import { sortBy } from "lodash";
import { SignIcon } from "../../../../atoms/Icon/SingIcon";
const SignsData: { [k: string]: { [k: string]: { [k: string]: { planets: ISign[] } } } } = data as any

export type NatalChartTypes = {
    size: number,
    date?: DateTimeValue,
    astroPlace?: IAstroPlace,
    onClickSign?: (sign: ISign) => void,
    enabled?: boolean,
    data?: any;
}

export function NatalChart ({ size, data, astroPlace, date, enabled = true, onClickSign }: NatalChartTypes) {
    const [signs, setSigns] = useState<ISign[]>([])
    const [selectedDate, setSelectedDate] = useState<DateTimeValue | undefined>()
    const signSize = 20
   const calculateNatalCard = useCallback(() => {
        console.log('selectedDate', selectedDate, astroPlace)
        
    }, [selectedDate, astroPlace])
    
    useEffect(() => {
        if (data) {
            console.log('data', data)
            Storage.add('natal-card-data', data, 'local')
            setSigns(sortBy(data.signs, (sign) => {
                return sign.longitude
            }))
            // let signs = [
            //     data?.signs?.find((sign: any) => sign.name === 'Sun'), 
            //     data?.signs?.find((sign: any) => sign.name === "Mercury")
            // ];
            // console.log('sings', signs)
            // setSigns(signs)
        }
    }, [data, setSigns])
    const outerRadius = size / 2;
    const innerRadius = outerRadius - size / 10;
    const internalSpace = {
        outerRadius: size / 4,
        innerRadius: size / 4 - size / 20
    }
    const ALL_POINTS: IPoint[] = []
    
    useEffect(() => {
        if (enabled) {
            setSelectedDate(date)
            calculateNatalCard()
        }
    }, [calculateNatalCard, date, setSelectedDate, enabled])

    const getPointOnChart = (offset: number, raduis: number, angle: number) => {
        return {
            x: offset + raduis * Math.cos(Math.PI - angle),
            y: offset + raduis * Math.sin(Math.PI - angle)
        }
    }
    const getSignPostion = function (sign: ISign) {
        const angle = (sign.longitude) / 180 * Math.PI
        let point = getPointOnChart(size / 2, innerRadius - signSize, angle)
        const checkPoint = (currentPoint: IPoint) => {
            const intesectedPoint =  ALL_POINTS.find((point) => {
                const isIntersect = circleIntersect(point.x, point.y, signSize / 2, currentPoint.x, currentPoint.y, signSize / 2, 5)
                return isIntersect
            })
            return !!intesectedPoint;
        }
        let i = 0;
        while(checkPoint(point)) {
            i++; 
            point = getPointOnChart(size / 2 - i * 1, innerRadius - signSize - i * 5, angle)  
        }
        return point
    }
    // console.clear()
    const renderSign = (sign: ISign) => {
        const radius = 5;
        const angle = (sign.longitude) / 180 * Math.PI
        const point = getSignPostion(sign)
        ALL_POINTS.push(point)
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
                    className={clsx('sign-line-zodiac', sign.name)} />
                <line
                    {...PenProps}
                    x1={innerLinePoint1.x}
                    y1={innerLinePoint1.y}
                    x2={innerLinePoint2.x}
                    y2={innerLinePoint2.y}
                    className={clsx('sign-line-zodiac', sign.name)} />
                    {isSvgIconExists(sign.name) ? 
                        <SignIcon
                        isRetro={sign.isRetro} 
                        name={sign.name}
                        onClick={ () => onClickSign?.(sign)}
                        x={point.x - signSize / 2}
                        y={point.y - signSize / 2}
                        size={20}
                        style={{ cursor: 'pointer' }}
                        className={clsx('sign', sign.name)}/>
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

    return (
        <svg height={size} width={size} xmlns="http://www.w3.org/2000/svg">
            <Zodiak size={size}/>
            {signs.map(renderSign)}
        </svg>
    )
}