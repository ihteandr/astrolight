import { useMemo, useState } from 'react'
import { DEFAULT_DICTINARY_TYPE, DICTIONARY_TYPES, EDictinaryType, IExplanation } from '../../types/dicrionary'
import styles from './InfoDescription.module.css'
import { TabItem, Tabs } from '../Tabs/Tabs'
import { formatOpenAiMessage } from '../../utils/format.utils'

export type InfoDescriptionProps = {
    explanation: IExplanation
}

export function InfoDescription({ explanation }: InfoDescriptionProps) {
    const tabs = useMemo<TabItem[]>(() => {
        return Object.keys(DICTIONARY_TYPES).map((dictinaryType) => {
            return {
                label: DICTIONARY_TYPES[dictinaryType],
                value: dictinaryType
            }
        }).concat(explanation.openAIQuestion ? [{
            label: 'Open AI',
            value: EDictinaryType.OPENAI
        }] : [])
    }, [])
    const [selected, setSelected] = useState(tabs.find((tab) => tab.value === DEFAULT_DICTINARY_TYPE)?.value);
    const description = useMemo<string>(() => {
        return selected === EDictinaryType.OPENAI ? formatOpenAiMessage('') : explanation.description?.[selected]
    }, [selected])
    return (
        <div className={styles.InfoDescription}>
            <div><b>{explanation.label}</b></div>
            <Tabs tabs={tabs} selected={selected} />
            <div className={styles.InfoDescriptionContent}>
                <p className={styles.InfoItemModalDescription} dangerouslySetInnerHTML={{ __html: description }} />
            </div>
        </div>
    )
}