import { InfoItem } from "../../../../components/InfoItem/InfoItem";
import { Modal } from "../../../../components/Modal/Modal";
import { OpenAiAnswer } from "../../../../components/OpenAiAnswer/OpenAiAnswer";
import { ASPECT_TYPE_LABELS } from "../../../../data/aspects/AspectsData";
import { SIGNS_SYMBOL_DATA } from "../../../../data/sings-data/SignsData";
import { ZODIAC_SYMBOL_DATA } from "../../../../data/zodiac/ZodiacData";
import { EOpenAiType } from "../../../../types/openai";
import { ISign } from "../../../../types/signs";
import styles from './SynthesisDescription.module.css'
export type SynthesisDescriptionProps = {
    signs: ISign[],
    onClose: () => void
}

export function SynthesisDescription ({ signs, onClose }: SynthesisDescriptionProps) {
    const aspect = signs[0].getAspect(signs[1].name);
    const openAIQuestion = `${signs.map((sign) => `${SIGNS_SYMBOL_DATA[sign.name].label} в ${ZODIAC_SYMBOL_DATA[sign.zodiac].label} ${sign.house ? `в ${sign.house.label} Доме` : ''}`).join(', ')} ${aspect ? `, ${SIGNS_SYMBOL_DATA[signs[0].name].label} имеет аспект ${ASPECT_TYPE_LABELS[aspect.type].label} с ${SIGNS_SYMBOL_DATA[signs[1].name].label}` : ''}`
    return (
        <Modal onClose={onClose}>  
            <h2 className={styles.AspectDescriptionHeader}>
                <span>{openAIQuestion}</span>
            </h2>
            <OpenAiAnswer
                question={openAIQuestion}
                openAiType={EOpenAiType.SYNTHESIS} />
        </Modal>
    );
}