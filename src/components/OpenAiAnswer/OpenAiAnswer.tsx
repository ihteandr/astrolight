import { useEffect, useMemo, useRef, useState } from 'react'
import { EOpenAiType } from '../../types/openai'
import styles from './OpenAiAnswer.module.css'
import { useOpenaiInterpretationQuestion } from '../../api/openai/openai.api'
import { formatOpenAiMessage } from '../../utils/format.utils'

export type OpenAiAnswerProps = {
    question: string,
    openAiType: EOpenAiType
}

export function OpenAiAnswer ({ question, openAiType }: OpenAiAnswerProps) {
    const isRequested = useRef(false)
    const fullQuestion = useMemo(() => {
        switch(openAiType) {
            case EOpenAiType.INTERPRETATION:
                return `Как интерпретировать "${question}" в астрологии?`
            default:
                return null
        }
    }, [question, openAiType])
    const {
        mutateAsync: getInterpretationAnswer
    } = useOpenaiInterpretationQuestion()
    const [message, setMessage] = useState('')
    const displayMessage = useMemo(() => {
        if (!message) {
            return 'Загрузка...'
        }
        return message
    }, [message])
    useEffect(() => {
        if (fullQuestion && !isRequested.current) {
            if (openAiType === EOpenAiType.INTERPRETATION) {
                isRequested.current = true
                getInterpretationAnswer({ question: fullQuestion }).then(setMessage)
            }
        }
    }, [fullQuestion, openAiType, getInterpretationAnswer, setMessage])
    return (<p className={styles.OpenAiAnswer} dangerouslySetInnerHTML={{ __html: formatOpenAiMessage(displayMessage) }}></p>)
}