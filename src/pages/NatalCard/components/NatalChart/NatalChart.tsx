import clsx from "clsx";
import { EAstroSigns, ISign } from "../../../../types/signs"
import { BoldPenProps, PenProps, ThinPenProps } from "../../../../utils/svg/ul-helpers";
import { DateTimeValue } from "../../../../components/DateTime/DateTime";
import { useCallback, useEffect, useState } from "react";
import data from '../../../../data/signs/SignsData.json';
import { IAstroAspect, IAstroPlace, IHouse } from "../../../../types/astro";
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
import { Aspect } from "./components/Aspect/Aspect";
const SignsData: { [k: string]: { [k: string]: { [k: string]: { planets: ISign[] } } } } = data as any

export interface INatalChartVisibilityOptions {
    signs?: EAstroSigns[],
    houses?: number[],
    aspects?: IAstroAspect[],
    hightlightHouses?: number[]
}


export type NatalChartTypes = {
    size: number,
    date?: DateTimeValue,
    astroPlace?: IAstroPlace,
    onClickSign?: (sign: ISign) => void,
    onClickHouse?: (house: IHouse) => void,
    enabled?: boolean,
    data?: any;
    visibilityOptions?: INatalChartVisibilityOptions
}

export function NatalChart ({ size, data, onClickHouse, visibilityOptions, astroPlace, date, enabled = true, onClickSign }: NatalChartTypes) {
    const signSize = 20
    const [signs, setSigns] = useState<ISign[]>([])
    const [houses, setHouses] = useState<IHouse[]>([])
    const [aspects, setAspects] = useState<IAstroAspect[]>([])
    const [selectedDate, setSelectedDate] = useState<DateTimeValue | undefined>()
    const [rotateDegree, setRotateDegree] = useState(0);
    const center = {
        x: size / 2,
        y: size / 2
    }
    useEffect(() => {
        if (data) {
            console.log('data', data)
            Storage.add('natal-card-data', data, 'local')
            setSigns(sortBy(data.signs.filter((sign: ISign) => {
                return visibilityOptions && visibilityOptions.signs ? visibilityOptions.signs.includes(sign.name) : true
            }), (sign: ISign) => {
                return sign.longitude
            }))
            setHouses(data.houses.positions.filter((house: IHouse) => {
                return visibilityOptions && visibilityOptions.houses ? visibilityOptions.houses.includes(house.number) : true
            }))
            setAspects(data.aspects.filter((aspect: IAstroAspect) => {
                return visibilityOptions && visibilityOptions.aspects ? !!visibilityOptions.aspects.find((vAspect: IAstroAspect) => {
                    return vAspect.isSame(aspect)
                }) : true
            }))
            setRotateDegree(data.houses.house[0] / 180 * Math.PI)
        }
    }, [data, setSigns, setHouses, setAspects, setRotateDegree, visibilityOptions])
    const outerRadius = size / 2;
    const innerRadius = outerRadius - size / 10;
    const internalSpace = {
        outerRadius: size / 4,
        innerRadius: size / 4 - size / 20
    }
    const ALL_POINTS: IPoint[] = []
    const getSignPostion = function (sign: ISign) {
        const angle = (sign.longitude) / 180 * Math.PI - rotateDegree
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
        return <Sign rotate={rotateDegree} size={size} sign={sign} getSignPostion={getSignPostion} key={sign.name} signSize={signSize} />
    }

    const renderHouse = (house: IHouse) => {
        return <House rotate={rotateDegree} highlight={visibilityOptions?.hightlightHouses?.includes(house.number)} size={size} house={house} key={house.number} onClick={onClickHouse} />
    }

    const renderAspect = (aspect: IAstroAspect) => {
        return <Aspect
            rotate={rotateDegree}
            aspect={aspect}
            size={size}
            signSize={signSize}
            key={`${aspect.sign1.name}-${aspect.sign2.name}-${aspect.type}`} />
    }  
    return (
        <svg height={size} onClick={(e) => e.stopPropagation()} width={size} xmlns="http://www.w3.org/2000/svg">
            <g {...PenProps}>
                <circle cx={center.x} cy={center.y} r={outerRadius}/>
                <circle cx={center.x} cy={center.y} r={innerRadius}/>
            </g>
            <g {...ThinPenProps}>
                <circle cx={center.x} cy={center.y} r={internalSpace.outerRadius}/>
                <circle cx={center.x} cy={center.y} r={internalSpace.innerRadius}/>
            </g>
            {Object.values(ZODIAC_SYMBOL_DATA).map((symbolData, index) => {
                return <Zodiac rotate={rotateDegree} data={symbolData} key={index} size={size} />
            })}
            {houses.map(renderHouse)}
            {signs.map(renderSign)}
            {aspects.map(renderAspect)}
        </svg>
    )
}