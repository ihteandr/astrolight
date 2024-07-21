import { useMemo } from 'react'
import { EAspectMajority, EAstroAspectAction, EAstroAspectType, IAstroAspect } from '../../../../types/astro'
import styles from './AspectsDetails.module.css'
import { AspectInfo } from './components/AspectInfo/AspectInfo'
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
    const sortAspects = (aspects: IAstroAspect[]) => {
        const actionOrder: EAstroAspectAction[] = [
            EAstroAspectAction.TENSE,
            EAstroAspectAction.HARMONIC,
            EAstroAspectAction.DEPENDS_PLANETS,
            EAstroAspectAction.KARMIC,
            EAstroAspectAction.CREATIVE
        ]
        const typeOrder: EAstroAspectType[] = [
            EAstroAspectType.OPPOSITION,
            EAstroAspectType.QUADRATURE
        ]
        return sortBy(aspects, (aspect: IAstroAspect) => {
            return actionOrder.findIndex((action) => action === aspect.action) * 100 + typeOrder.findIndex((type) => type === aspect.type)
        })
    }
    const majorAspects = useMemo(() => {
        return sortAspects(aspects.filter((aspect) => aspect.majority === EAspectMajority.MAJOR))
    }, [aspects])
    const minnorAspects = useMemo(() => {
        return sortAspects(aspects.filter((aspect) => aspect.majority === EAspectMajority.MINNOR))
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