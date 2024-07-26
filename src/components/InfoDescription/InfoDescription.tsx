import { useEffect, useMemo, useState } from 'react'
import { DEFAULT_DICTINARY_TYPE, DICTIONARY_TYPES, EDictinaryType, IExplanation } from '../../types/dicrionary'
import styles from './InfoDescription.module.css'
import { TabItem, Tabs } from '../Tabs/Tabs'
import { formatOpenAiMessage } from '../../utils/format.utils'
import ShouldRender from '../../atoms/functional/ShouldRender'
import { EOpenAiType } from '../../types/openai'
import { OpenAiAnswer } from '../OpenAiAnswer/OpenAiAnswer'

export type InfoDescriptionProps = {
    explanation: IExplanation,
    openAiType?: EOpenAiType
}

export function InfoDescription({ explanation, openAiType }: InfoDescriptionProps) {
    const tabs = useMemo<TabItem[]>(() => {
        return Object.keys(DICTIONARY_TYPES).filter((dictinaryType) => (
            !!explanation.description?.[dictinaryType]
        )).map((dictinaryType) => {
            return {
                label: DICTIONARY_TYPES[dictinaryType],
                value: dictinaryType
            }
        }).concat(openAiType ? [{
            label: 'Open AI',
            value: EDictinaryType.OPENAI
        }] : [])
    }, [openAiType, explanation])
    const [selected, setSelected] = useState<EDictinaryType>(DEFAULT_DICTINARY_TYPE);
    const description = useMemo<string>(() => {
        return selected === EDictinaryType.OPENAI ? '' : explanation.description?.[selected]
    }, [selected])
    useEffect(()=> {
        if (!tabs.find((tab) => tab.value === selected)) {
            if (openAiType) {
                setSelected(EDictinaryType.OPENAI)
            }
        }
    }, [selected, setSelected, tabs, openAiType])
    return (
        <div className={styles.InfoDescription}>
            <div><b>{explanation.label}</b></div>
            <Tabs tabs={tabs} selected={selected} onChange={setSelected} />
            <div className={styles.InfoDescriptionContent}>
                <ShouldRender should={selected === EDictinaryType.OPENAI}>
                    {() => (
                        <OpenAiAnswer question={explanation.label} openAiType={openAiType as EOpenAiType}/>
                    )}
                </ShouldRender>
                <ShouldRender should={selected !== EDictinaryType.OPENAI}>
                    <p className={styles.InfoItemModalDescription} dangerouslySetInnerHTML={{ __html: description }} />
                </ShouldRender>
            </div>
        </div>
    )
}