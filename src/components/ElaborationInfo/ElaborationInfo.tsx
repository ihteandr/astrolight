import { useState } from "react";
import ShouldRender from "../../atoms/functional/ShouldRender";
import { ElaborationDescription } from "../ElaborationDescription/ElaborationDescription";
import { Modal } from "../Modal/Modal";
import { EOpenAiType } from "../../types/openai";
import  styles from './ElaborationInfo.module.css';

export type ElaborationInfoProps = {
    question: string;
    openAiType?: EOpenAiType;
}

export function ElaborationInfo ({ question, openAiType = EOpenAiType.INTERPRETATION }: ElaborationInfoProps) {
    const [shouldShowElaboration, setShouldShowElaboration] = useState(false);
    return (
        <>
            <span onClick={() => setShouldShowElaboration(true)} className={styles.ElaborationLink}>
                Совет по проработке
            </span>
            <ShouldRender should={shouldShowElaboration}>
                {() => (
                    <Modal onClose={() => setShouldShowElaboration(false)}>  
                        <ElaborationDescription question={question} openAiType={openAiType} />
                    </Modal>
                )}
            </ShouldRender>
        </>
    )
}