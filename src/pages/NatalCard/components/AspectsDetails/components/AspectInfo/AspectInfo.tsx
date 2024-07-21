import { useCallback, useEffect, useMemo, useState } from "react"
import { SIGNS_SYMBOL_DATA } from "../../../../../../data/sings-data/SignsData"
import { IAstroAspect } from "../../../../../../types/astro"
import styles from './AspectInfo.module.css'
import { ASPECT_ACTION_LABELS, ASPECT_CLASSIFICATION_LABELS, ASPECT_SPECIFICATION_LABELS, ASPECT_TYPE_LABELS } from "../../../../../../data/aspects/AspectsData"
import clsx from "clsx"
import { SvgIcon } from "../../../../../../atoms/Icon/SvgIcon"
import { Tooltip } from "react-tooltip"
import { formatOpenAiMessage, setZeros } from "../../../../../../utils/format.utils"
import ShouldRender from "../../../../../../atoms/functional/ShouldRender"
import { Modal } from "../../../../../../components/Modal/Modal"
import { useOpenaiAspectQuestion } from "../../../../../../api/openai/openai.api"
export type AspectInfoProps = {
    aspect: IAstroAspect
}

export function AspectInfo ({ aspect }: AspectInfoProps) {
    const [shouldShowDetails, setShouldShowDetails] = useState(false);
    const { mutate: getDescription, data: descriptionData } = useOpenaiAspectQuestion()
    const [details, setDetails] = useState('');
    const sign1SymbolData = useMemo(() => {
        return SIGNS_SYMBOL_DATA.find((symbolData) => symbolData.sign === aspect.sign1.name)
    }, [aspect])
    const sign2SymbolData = useMemo(() => {
        return SIGNS_SYMBOL_DATA.find((symbolData) => symbolData.sign === aspect.sign2.name)
    }, [aspect])
    const fastSignSymbolData = useMemo(() => {
        return SIGNS_SYMBOL_DATA.find((symbolData) => symbolData.sign === aspect.fastSign.name)
    }, [aspect])
    const getAspectDescription = () => {
        const question = `Дай детальные характеристики астрологического аспекта ${sign1SymbolData?.openAiLabel || sign1SymbolData?.label} ${ASPECT_TYPE_LABELS?.[aspect.type]?.label} ${sign2SymbolData?.openAiLabel || sign2SymbolData?.label}`
        getDescription({ question })
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
                <span>{fastSignSymbolData?.label}</span>,
            </div>
        </div>
    )
    useEffect(() => {
        if (shouldShowDetails && descriptionData) {
            setDetails(JSON.stringify(descriptionData))
        }
    }, [descriptionData, setDetails, shouldShowDetails])
    return (
        <div className={clsx(styles.AspectInfo, 'aspect', aspect.action.toLocaleLowerCase())} >
            <span onClick={getAspectDescription} className={styles.AspectInfoName}>
                <span className={styles.AspectInfoSign}>{sign1SymbolData?.label}</span>
                <span className={styles.AspectInfoType}>{ASPECT_TYPE_LABELS?.[aspect.type]?.label}</span>
                <span className={styles.AspectInfoSign}>{sign2SymbolData?.label}</span>
            </span>
            <SvgIcon name="Info" size={16} className={clsx(styles.AspectInfoIcon, `AspectInfoIcon${key}`)}/>
            
            <Tooltip anchorSelect={`.AspectInfoIcon${key}`}> 
                <div style={{color: 'white'}}>
                    {AspectShortInfo}
                </div>
            </Tooltip>
            <ShouldRender should={shouldShowDetails}>
                <Modal onClose={() => setShouldShowDetails(false)}>
                    <h2 className={styles.AspectDescriptionHeader}>
                        <span>{sign1SymbolData?.label}</span>
                        <span style={{margin: '0 5px'}}>{ASPECT_TYPE_LABELS?.[aspect.type]?.label}</span>
                        <span>{sign2SymbolData?.label}</span>
                    </h2>
                    <div style={{color: 'black'}}>
                        {AspectShortInfo}
                    </div>
                    <ShouldRender should={!details}>
                        <p style={{ color: 'black' }}>Загрузка...</p>
                    </ShouldRender>
                    <p className={styles.AspectDescription} dangerouslySetInnerHTML={{ __html: formatOpenAiMessage(details) }}></p>
                </Modal>
            </ShouldRender>
        </div>
    )
}