import clsx from "clsx";
import { ISign } from "../../../../types/signs/ISign"
import { Zodiak } from "../Zodiac/Zodiac"
import { PenProps, ThinPenProps } from "../../../../utils/svg/ul-helpers";
import { DateTimeValue } from "../../../../components/DateTime/DateTime";
import { useCallback, useEffect, useState } from "react";
import data from '../../../../data/signs/SignsData.json';
const SignsData: { [k: string]: { [k: string]: { [k: string]: { planets: ISign[] } } } } = data as any

export type NatalChartTypes = {
    size: number,
    date?: DateTimeValue,
    onClickSign?: (sign: ISign) => void,
    enabled?: boolean,
}

const SymbolMap: any = {
    Mercury: '9791',
	Venus: '9792',
	Earth: '9793',
	Mars: '9794',
	Jupiter: '9795',
	Saturn:	'9796',
	Uranus: '9797',
	Neptune: '9798',
	Pluto:	'9799'
}

export function NatalChart ({ size, date, enabled = true, onClickSign }: NatalChartTypes) {
    const [signs, setSigns] = useState<ISign[]>([])
    const [selectedDate, setSelectedDate] = useState<DateTimeValue | undefined>()
    const calculateNatalCard = useCallback(() => {
        console.log('selectedDate', selectedDate)
        if (selectedDate) {
            const signs: ISign[] = JSON.parse(JSON.stringify(SignsData[selectedDate.year][selectedDate.month][selectedDate.day].planets));
            let nextDaySignsData = SignsData[selectedDate.year][selectedDate.month][selectedDate.day + 1];
            if (!nextDaySignsData) {
                nextDaySignsData = SignsData[selectedDate.year][selectedDate.month + 1][1]
                if (nextDaySignsData) {
                    nextDaySignsData = SignsData[selectedDate.year + 1][1][1]    
                }
            }
            const nextDaySigns = nextDaySignsData?.planets;
            if (nextDaySigns) {
                signs.forEach((sign) => {
                    const nextDaySign = nextDaySigns.find((nextDaySign) => nextDaySign.name === sign.name);
                    if (nextDaySign) {
                        sign.full_degree = (nextDaySign.full_degree + sign.full_degree) / 2
                    }
                })
            }
            setSigns(signs)
        }
    
    }, [setSigns, selectedDate])
    const outerRadius = size / 2;
    const innerRadius = outerRadius - size / 10;
    const internalSpace = {
        outerRadius: size / 4,
        innerRadius: size / 4 - size / 20
    }

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
    const renderSign = (sign: ISign) => {
        const radius = 5;
        const angle = (sign.full_degree) / 180 * Math.PI
        const point = getPointOnChart(size / 2, innerRadius - 20, angle)
        const linePoint1 = getPointOnChart(size / 2 - ThinPenProps.strokeWidth / 2, innerRadius, angle)
        const linePoint2 = getPointOnChart(size / 2 - ThinPenProps.strokeWidth / 2, innerRadius - 20, angle)
        console.log('SymbolMap[planet.name]', SymbolMap[sign.name])
        return (
            <g key={sign.name}>
                <line
                    {...ThinPenProps}
                    x1={linePoint1.x}
                    y1={linePoint1.y}
                    x2={linePoint2.x}
                    y2={linePoint2.y}
                    className={clsx('sign-line-zodiac', sign.name)} />
                    {SymbolMap[sign.name] ? <text     
                        onClick={ () => onClickSign?.(sign)}
                        x={point.x - 10}
                        y={point.y + 10}
                        fontSize={20}
                        fontStyle={'bold'}
                        style={{ cursor: 'pointer' }}
                        className={clsx('sign', sign.name)}
                    >{String.fromCodePoint(SymbolMap[sign.name])}</text> 
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