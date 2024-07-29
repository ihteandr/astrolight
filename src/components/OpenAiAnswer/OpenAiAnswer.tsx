import { useEffect, useMemo, useRef, useState } from 'react'
import { EOpenAiType } from '../../types/openai'
import styles from './OpenAiAnswer.module.css'
import { useOpenaiAspectQuestion, useOpenaiElaborationQuestion, useOpenaiInterpretationQuestion } from '../../api/openai/openai.api'
import { formatOpenAiMessage } from '../../utils/format.utils'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
export type OpenAiAnswerProps = {
    question: string,
    openAiType: EOpenAiType,
    isElaboration?: boolean 
}

export function OpenAiAnswer ({ question, isElaboration = false, openAiType }: OpenAiAnswerProps) {
    const isRequested = useRef(false)
    const fullQuestion = useMemo(() => {
        const formatingText = ''//'отформатируй текст на HTML'
        switch(openAiType) {
            case EOpenAiType.INTERPRETATION:
                if (isElaboration) {
                    return `Как проработать "${question}" в астрологии? ${formatingText}`
                } else {
                    return `Как интерпретировать "${question}" в астрологии? ${formatingText}`
                }
            case EOpenAiType.ASPECT: 
                if (isElaboration) {
                    return `Как проработать астрологический аспекта "${question}"? ${formatingText}`
                } else {
                    return `Какие характеристики у астрологического аспекта "${question}"? ${formatingText}`
                }
            default:
                return null
        }

    }, [question, openAiType, isElaboration])
    const {
        mutateAsync: getElaborationQuestion 
    } = useOpenaiElaborationQuestion()
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
            if (isElaboration) {
                getElaborationQuestion({ question: fullQuestion }).then(setMessage)
            } else {
                switch(openAiType) {
                    case EOpenAiType.INTERPRETATION:
                        getInterpretationAnswer({ question: fullQuestion }).then(setMessage)
                        break;
                    case EOpenAiType.ASPECT:
                        getAspectAnswer({ question: fullQuestion }).then(setMessage)
                        break;
                }    
            }
        }
    }, [fullQuestion, setMessage])
    return <Markdown remarkPlugins={[remarkGfm]}>{displayMessage}</Markdown>
}