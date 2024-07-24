import clsx from "clsx"
import { DEFAULT_DICTINARY_TYPE, DICTIONARY_TYPES, IExplanation } from "../../types/dicrionary"
import styles from './InfoItem.module.css'
import { SvgIcon } from "../../atoms/Icon/SvgIcon"
import { useMemo, useState } from "react"
import * as uuid from 'uuid'
import { Tooltip } from "react-tooltip"
import ShouldRender from "../../atoms/functional/ShouldRender"
import { Modal } from "../Modal/Modal"
import { EModalType } from "../../utils/ui/helpers"
import { InfoDescription } from "../InfoDescription/InfoDescription"
export type InfoItemProps = {
    explanation: IExplanation,
    type?: 'modal' | 'tooltip',
    additionalDescription?: React.ReactNode
}

export function InfoItem ({ explanation, type = 'tooltip', additionalDescription }: InfoItemProps) {
    const [shouldShowInfo, setShouldSHowInfo] = useState(false)
    const key = useMemo(() => {
        return uuid.v4()
    }, [])
    const dictinaryType = useMemo<string>(() => {
        return DEFAULT_DICTINARY_TYPE
    }, [])
    const description = useMemo(() => {
        return explanation?.description?.[dictinaryType]
    }, [explanation, dictinaryType])
    return (
        <div className={styles.InfoItem}>
            <ShouldRender should={!!explanation}>
                {() => (
                    <>
                        <span dangerouslySetInnerHTML={{ __html: explanation.label }}></span>
                        <ShouldRender should={type === 'modal'}>
                            <SvgIcon name="Info" onClick={() => setShouldSHowInfo(true)} size={16} className={clsx(styles.InfoItemIcon, styles.InfoItemModalIcon)}/>
                        </ShouldRender>
                        <ShouldRender should={type === 'tooltip'}>
                            <SvgIcon name="Info" size={16} className={clsx(styles.InfoItemIcon, `InfoItemTooltipIcon${key}`)}/>
                            <Tooltip className={styles.InfoItemTooltip} anchorSelect={`.InfoItemTooltipIcon${key}`}>
                                <p className={styles.InfoItemDescription} dangerouslySetInnerHTML={{ __html: description }} />
                            </Tooltip>
                        </ShouldRender>
                        <ShouldRender should={shouldShowInfo}>
                            <Modal onClose={() => setShouldSHowInfo(false)} portal={EModalType.INFO_MODAL}>
                                {additionalDescription}
                                <ShouldRender should={!!description}>
                                    {() => (
                                        <InfoDescription explanation={explanation} />
                                    )}
                                </ShouldRender>
                            </Modal>
                        </ShouldRender>
                    </>
                )}
            </ShouldRender>
            <ShouldRender should={!explanation}>
                <p className="error-message">Ошибка системы</p>
            </ShouldRender>
        </div>
    )
}