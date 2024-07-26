import { useEffect, useMemo, useRef, useState } from 'react'
import { EOpenAiType } from '../../types/openai'
import styles from './OpenAiAnswer.module.css'
import { useOpenaiAspectQuestion, useOpenaiInterpretationQuestion } from '../../api/openai/openai.api'
import { formatOpenAiMessage } from '../../utils/format.utils'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
export type OpenAiAnswerProps = {
    question: string,
    openAiType: EOpenAiType
}

export function OpenAiAnswer ({ question, openAiType }: OpenAiAnswerProps) {
    const isRequested = useRef(false)
    const fullQuestion = useMemo(() => {
        const formatingText = ''//'отформатируй текст на HTML'
        switch(openAiType) {
            case EOpenAiType.INTERPRETATION:
                return `Как интерпретировать "${question}" в астрологии? ${formatingText}`
            case EOpenAiType.ASPECT: 
                return `Какие характеристики у астрологического аспекта "${question}"? ${formatingText}`
            default:
                return null
        }
    }, [question, openAiType])
    const {
        mutateAsync: getInterpretationAnswer
    } = useOpenaiInterpretationQuestion()
    const {
        mutateAsync: getAspectAnswer
    } = useOpenaiAspectQuestion()
    
    const [message, setMessage] = useState('')
    const displayMessage = useMemo(() => {
        if (!message) {
            return 'Загрузка...'
        }
        return message
    }, [message])
    useEffect(() => {
        if (fullQuestion && !isRequested.current) {
            isRequested.current = true
            switch(openAiType) {
                case EOpenAiType.INTERPRETATION:
                    getInterpretationAnswer({ question: fullQuestion }).then(setMessage)
                    break;
                case EOpenAiType.ASPECT:
                    getAspectAnswer({ question: fullQuestion }).then(setMessage)
            }
        }
    }, [fullQuestion, setMessage])
    return <Markdown remarkPlugins={[remarkGfm]}>{displayMessage}</Markdown>
    // return (<p className={styles.OpenAiAnswer} dangerouslySetInnerHTML={{ __html: formatOpenAiMessage(displayMessage) }}></p>)
}