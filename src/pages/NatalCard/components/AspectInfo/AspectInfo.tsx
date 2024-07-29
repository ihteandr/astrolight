import { useCallback, useEffect, useMemo, useState } from "react"
import { SIGNS_SYMBOL_DATA } from "../../../../data/sings-data/SignsData"
import { IAstroAspect } from "../../../../types/astro"
import styles from './AspectInfo.module.css'
import { ASPECT_ACTION_LABELS, ASPECT_CLASSIFICATION_LABELS, ASPECT_SPECIFICATION_LABELS, ASPECT_TYPE_LABELS } from "../../../../data/aspects/AspectsData"
import clsx from "clsx"
import { SvgIcon } from "../../../../atoms/Icon/SvgIcon"
import { Tooltip } from "react-tooltip"
import { formatOpenAiMessage, setZeros } from "../../../../utils/format.utils"
import ShouldRender from "../../../../atoms/functional/ShouldRender"
import { Modal } from "../../../../components/Modal/Modal"
import { useOpenaiAspectQuestion } from "../../../../api/openai/openai.api"
import { EAstroSigns } from "../../../../types/signs"
import { OpenAiAnswer } from "../../../../components/OpenAiAnswer/OpenAiAnswer"
import { EOpenAiType } from "../../../../types/openai"
import { ElaborationDescription } from "../../../../components/ElaborationDescription/ElaborationDescription"
export type AspectInfoProps = {
    aspect: IAstroAspect,
    perspective?: EAstroSigns | 'Ascident' | 'Meridian',
    withElaboration?: boolean
}

export function AspectInfo ({ aspect, withElaboration = false, perspective }: AspectInfoProps) {
    const [shouldShowDetails, setShouldShowDetails] = useState(false);
    const [shouldShowElaboration, setShouldShowElaboration] = useState(false)
    const sign1 = useMemo(() => {
        return perspective ? aspect.sign1.name === perspective ? aspect.sign1 : aspect.sign2 : aspect.sign1
    }, [aspect, perspective])
    const sign2 = useMemo(() => {
        return perspective ? aspect.sign2.name !== perspective ? aspect.sign2 : aspect.sign1 : aspect.sign2
    }, [aspect, perspective])
    const sign1SymbolData = useMemo(() => {
        if (sign1.name === 'Ascident') {
            return { label: 'Асцидент', openAiLabel: undefined }
        }
        if (sign1.name === 'Meridian') {
            return { label: 'Меридиан', openAiLabel: undefined  }
        }
        return SIGNS_SYMBOL_DATA[sign1.name]
    }, [aspect])
    const sign2SymbolData = useMemo(() => {
        if (sign2.name === 'Ascident') {
            return { label: 'Асцидент', openAiLabel: undefined }
        }
        if (sign2.name === 'Meridian') {
            return { label: 'Меридиан', openAiLabel: undefined  }
        }
        return SIGNS_SYMBOL_DATA[sign2.name]
    }, [aspect])
    const fastSignSymbolData = useMemo(() => {
        return SIGNS_SYMBOL_DATA[aspect.fastSign.name]
    }, [aspect])
    const getAspectDescription = () => {
        setShouldShowDetails(true)
    }
    
    const key = `${aspect.sign1.name}-${aspect.type}-${aspect.sign2.name}`;
    const AspectShortInfo = (
        <div className={styles.AspectTooltip}>
            <div className={styles.AspectTooltipRow}>
                <span>Тип:</span>
                <span>{ASPECT_TYPE_LABELS[aspect.type].label}</span>
            </div>
            <div className={styles.AspectTooltipRow}>
                <span>Классификация:</span>
                <span>
                    {ASPECT_CLASSIFICATION_LABELS[aspect.classification].label},
                    {ASPECT_SPECIFICATION_LABELS[aspect.specification].label}
                    {aspect.isMutual ? ',Взаимный' : ''}
                </span>
            </div>
            <div className={styles.AspectTooltipRow}>
                <span>Воздействие: </span>
                <span>{ASPECT_ACTION_LABELS[aspect.action].label}</span>
            </div>
            <div className={styles.AspectTooltipRow}>
                <span>Дистанция: </span>
                <span>
                    <span>{aspect.distanceZone.hour}°</span>
                    <span>{setZeros(aspect.distanceZone.minute, 2)}’</span>
                    <span>{setZeros(aspect.distanceZone.second, 2)}’’</span>
                </span>
            </div>
            <div className={styles.AspectTooltipRow}>
                <span>Орбис: </span>
                <span>{aspect.originOrb}°</span>
            </div>

            <div className={styles.AspectTooltipRow}>
                <span>Символы: </span>
                <span>
                    <span>{sign1SymbolData?.label}</span>,
                    <span>{sign2SymbolData?.label}</span>    
                </span>
            </div>
            
            <div className={styles.AspectTooltipRow}>
                <span>Быстрая Символ: </span>
                <span>{fastSignSymbolData?.label}</span>
            </div>
        </div>
    )
    const elaborationQuestion = `${sign1SymbolData?.label} ${ASPECT_TYPE_LABELS?.[aspect.type]?.label} ${sign2SymbolData?.label}`
    return (
        <div className={clsx(styles.AspectInfo, 'aspect', aspect.action.toLocaleLowerCase())} >
            <span onClick={getAspectDescription} className={styles.AspectInfoName}>
                <span className={styles.AspectInfoSign}>{sign1SymbolData?.label}</span>
                <span className={styles.AspectInfoType}>{ASPECT_TYPE_LABELS?.[aspect.type]?.label}</span>
                <span className={styles.AspectInfoSign}>{sign2SymbolData?.label}</span>
            </span>
            <SvgIcon name="Question" size={16} className={clsx(styles.AspectInfoIcon, `AspectInfoIcon${key}`)}/>
            <ShouldRender should={withElaboration}>
                <span onClick={() => setShouldShowElaboration(true)} className={styles.AspectInforElaboration}>
                    Совет по проработке
                </span>
            </ShouldRender>
            <Tooltip anchorSelect={`.AspectInfoIcon${key}`}> 
                <div style={{color: 'white'}}>
                    {AspectShortInfo}
                </div>
            </Tooltip>
            <ShouldRender should={shouldShowDetails}>
                {() => (
                    <Modal onClose={() => setShouldShowDetails(false)}>  
                        <h2 className={styles.AspectDescriptionHeader}>
                            <span>{sign1SymbolData?.label}</span>
                            <span style={{margin: '0 5px'}}>{ASPECT_TYPE_LABELS?.[aspect.type]?.label}</span>
                            <span>{sign2SymbolData?.label}</span>
                        </h2>
                        <div style={{color: 'black'}}>
                            {AspectShortInfo}
                        </div>
                        <OpenAiAnswer
                            question={`${sign1SymbolData?.label} ${ASPECT_TYPE_LABELS?.[aspect.type]?.label} ${sign2SymbolData?.label}`}
                            openAiType={EOpenAiType.ASPECT} />
                    </Modal>
                )}
                
            </ShouldRender>

            <ShouldRender should={shouldShowElaboration}>
                {() => (
                    <Modal onClose={() => setShouldShowElaboration(false)}>  
                        <ElaborationDescription question={elaborationQuestion} openAiType={EOpenAiType.ASPECT} />
                    </Modal>
                )}
                
            </ShouldRender>
        </div>
    )
}