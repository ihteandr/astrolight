import { useMemo } from 'react'
import { EAspectMajority, EAstroAspectAction, EAstroAspectType, IAstroAspect } from '../../../../types/astro'
import styles from './AspectsDetails.module.css'
import { AspectInfo } from '../AspectInfo/AspectInfo'
import { sortBy } from 'lodash'
export type AspectsDetailsProps = {
    data?: any
}
export function AspectsDetails ({ data }: AspectsDetailsProps) {
    const aspects = useMemo<IAstroAspect[]>(() => {
        return data.aspects
    }, [data])
    const getAspectKey = (aspect: IAstroAspect) => {
        return `${aspect.sign1.name}-${aspect.type}-${aspect.sign2.name}`
    }
    const majorAspects = useMemo(() => {
        return aspects.filter((aspect) => aspect.majority === EAspectMajority.MAJOR)
    }, [aspects])
    const minnorAspects = useMemo(() => {
        return aspects.filter((aspect) => aspect.majority === EAspectMajority.MINNOR)
    }, [aspects])
    return (<div className={styles.AspectsDetails}>
        <h3>Основные Аспекты</h3>
        {majorAspects.map((aspect) => (
            <AspectInfo aspect={aspect} key={getAspectKey(aspect)} />
        ))}
        <h3>Вторичные Аспекты</h3>
        {minnorAspects.map((aspect) => (
            <AspectInfo aspect={aspect} key={getAspectKey(aspect)} />
        ))}
    </div>)
}