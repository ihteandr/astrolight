import clsx from "clsx"
import { IExplanation } from "../../types/dicrionary"
import styles from './InfoItem.module.css'
import { SvgIcon } from "../../atoms/Icon/SvgIcon"
import { useMemo } from "react"
import * as uuid from 'uuid'
import { Tooltip } from "react-tooltip"
export type InfoItemProps = {
    explanation: IExplanation
}

export function InfoItem ({ explanation }: InfoItemProps) {
    const key = useMemo(() => {
        return uuid.v4()
    }, [])
    return (
        <div className={styles.InfoItem}>
            <span>{explanation.label}</span>
            <SvgIcon name="Info" size={16} className={clsx(styles.InfoItemIcon, `InfoItem${key}`)}/>
            <Tooltip className={styles.InfoItemTooltip} anchorSelect={`.InfoItem${key}`}>
                <p className={styles.InfoItemDescription} dangerouslySetInnerHTML={{ __html: explanation.description }} />
            </Tooltip>
        </div>
    )
}