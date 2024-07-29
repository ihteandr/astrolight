import { useMemo } from 'react'
import { EOpenAiType } from '../../types/openai'
import styles from './ElaborationDescription.module.css'
import { OpenAiAnswer } from '../OpenAiAnswer/OpenAiAnswer'

export type ElaborationDescriptionProps = {
    question: string,
    openAiType?: EOpenAiType
}

export function ElaborationDescription ({ question, openAiType = EOpenAiType.INTERPRETATION }: ElaborationDescriptionProps) {
    return (
        <div className={styles.ElaborationDescription}>
            <OpenAiAnswer question={question} openAiType={openAiType} isElaboration={true} />
        </div>
    )
}