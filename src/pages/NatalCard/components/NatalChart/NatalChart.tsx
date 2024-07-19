import clsx from "clsx";
import { ISign } from "../../../../types/signs"
import { BoldPenProps, PenProps, ThinPenProps } from "../../../../utils/svg/ul-helpers";
import { DateTimeValue } from "../../../../components/DateTime/DateTime";
import { useCallback, useEffect, useState } from "react";
import data from '../../../../data/signs/SignsData.json';
import { IAstroPlace, IHouse } from "../../../../types/astro";
import { useNatalCardData } from "../../../../api/natal-card/natal-card.api";
import { Storage } from "../../../../storage";
import { SvgIcon, isSvgIconExists } from "../../../../atoms/Icon/SvgIcon";
import { IPoint } from "../../../../types/svg";
import { circleIntersect, getPointOnChart } from "../../../../utils/math.utils";
import { sortBy } from "lodash";
import { SignIcon } from "../../../../atoms/Icon/SingIcon";
import { SIGNS_SYMBOL_DATA } from "../../../../data/sings-data/SignsData";
import styles from './NatarCard.module.css'
import { House } from "./components/House/House";
import { ZODIAC_SYMBOL_DATA } from "../../../../data/zodiac/ZodiacData";
import { Zodiac } from "./components/Zodiac/Zodiac";
import { Sign } from "./components/Sign/Sign";
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
    const signSize = 20
    
    const [signs, setSigns] = useState<ISign[]>([])
    const [houses, setHouses] = useState<IHouse[]>([])
    const [selectedDate, setSelectedDate] = useState<DateTimeValue | undefined>()
    const center = {
        x: size / 2,
        y: size / 2
    }
    useEffect(() => {
        if (data) {
            console.log('data', data)
            Storage.add('natal-card-data', data, 'local')
            setSigns(sortBy(data.signs, (sign) => {
                return sign.longitude
            }))
            setHouses(data.houses.positions)
        }
    }, [data, setSigns, setHouses])
    const outerRadius = size / 2;
    const innerRadius = outerRadius - size / 10;
    const internalSpace = {
        outerRadius: size / 4,
        innerRadius: size / 4 - size / 20
    }
    const ALL_POINTS: IPoint[] = []
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
    useEffect(() => {
        if (enabled) {
            setSelectedDate(date)
        }
    }, [date, setSelectedDate, enabled])

    const renderSign = (sign: ISign) => {
        return <Sign size={size} sign={sign} getSignPostion={getSignPostion} signSize={signSize} />
    }

    const renderHouse = (house: IHouse) => {
        return <House size={size} house={house} key={house.number} />
    }

    return (
        <svg height={size} width={size} xmlns="http://www.w3.org/2000/svg">
            <g {...PenProps}>
                <circle cx={center.x} cy={center.y} r={outerRadius}/>
                <circle cx={center.x} cy={center.y} r={innerRadius}/>
            </g>
            <g {...ThinPenProps}>
                <circle cx={center.x} cy={center.y} r={internalSpace.outerRadius}/>
                <circle cx={center.x} cy={center.y} r={internalSpace.innerRadius}/>
            </g>
            {Object.values(ZODIAC_SYMBOL_DATA).map((symbolData, index) => {
                return <Zodiac data={symbolData} size={size} />
            })}
            {houses.map(renderHouse)}
            {signs.map(renderSign)}
        </svg>
    )
}