import clsx from "clsx";
import { IPlanet } from "../../../../types/palanets/IPlanet"
import { Zodiak } from "../Zodiac/Zodiac"
import { PenProps, ThinPenProps } from "../../../../utils/svg/ul-helpers";
import { DateTimeValue } from "../../../../components/DateTime/DateTime";
import { useCallback, useEffect, useState } from "react";
import data from '../../../../data/planets/PlanetsData.json';
const PlanetsData: { [k: string]: { [k: string]: { [k: string]: { planets: IPlanet[] } } } } = data as any

export type NatalChartTypes = {
    size: number,
    date?: DateTimeValue,
    onClickPlanet?: (planet: IPlanet) => void,
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

export function NatalChart ({ size, date, enabled = true, onClickPlanet }: NatalChartTypes) {
    const [planets, setPlanets] = useState<IPlanet[]>([])
    const [selectedDate, setSelectedDate] = useState<DateTimeValue | undefined>()
    const calculateNatalCard = useCallback(() => {
        console.log('selectedDate', selectedDate)
        if (selectedDate) {
            const planets: IPlanet[] = JSON.parse(JSON.stringify(PlanetsData[selectedDate.year][selectedDate.month][selectedDate.day].planets));
            let nextDayPlanetsData = PlanetsData[selectedDate.year][selectedDate.month][selectedDate.day + 1];
            if (!nextDayPlanetsData) {
                nextDayPlanetsData = PlanetsData[selectedDate.year][selectedDate.month + 1][1]
                if (nextDayPlanetsData) {
                    nextDayPlanetsData = PlanetsData[selectedDate.year + 1][1][1]    
                }
            }
            const nextDayPlanets = nextDayPlanetsData?.planets;
            if (nextDayPlanets) {
                planets.forEach((planet) => {
                    const nextDayPlanet = nextDayPlanets.find((nextDayPlanet) => nextDayPlanet.name === planet.name);
                    if (nextDayPlanet) {
                        planet.full_degree = (nextDayPlanet.full_degree + planet.full_degree) / 2
                    }
                })
            }
            setPlanets(planets)
        }
    
    }, [setPlanets, selectedDate])
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
    const renderPlanet = (planet: IPlanet) => {
        const radius = 5;
        const angle = (planet.full_degree) / 180 * Math.PI
        const point = getPointOnChart(size / 2, innerRadius - 20, angle)
        const linePoint1 = getPointOnChart(size / 2 - ThinPenProps.strokeWidth / 2, innerRadius, angle)
        const linePoint2 = getPointOnChart(size / 2 - ThinPenProps.strokeWidth / 2, innerRadius - 20, angle)
        console.log('SymbolMap[planet.name]', SymbolMap[planet.name])
        return (
            <g key={planet.name}>
                <line
                    {...ThinPenProps}
                    x1={linePoint1.x}
                    y1={linePoint1.y}
                    x2={linePoint2.x}
                    y2={linePoint2.y}
                    className={clsx('planet-line-zodiac', planet.name)} />
                    {SymbolMap[planet.name] ? <text     
                        onClick={ () => onClickPlanet?.(planet)}
                        x={point.x - 6}
                        y={point.y + 6}
                        fontSize={20}
                        fontStyle={'bold'}
                        style={{ cursor: 'pointer' }}
                        className={clsx('planet', planet.name)}
                    >{String.fromCodePoint(SymbolMap[planet.name])}</text> 
                    :     <circle
                        onClick={ () => onClickPlanet?.(planet)}
                        cx={point.x}
                        cy={point.y}
                        r={radius}
                        style={{ cursor: 'pointer' }}
                        className={clsx('planet', planet.name)}  />
                }
            </g>
        ) 
    }

    return (
        <svg height={size} width={size} xmlns="http://www.w3.org/2000/svg">
            <Zodiak size={size}/>
            {planets.map(renderPlanet)}
        </svg>
    )
}