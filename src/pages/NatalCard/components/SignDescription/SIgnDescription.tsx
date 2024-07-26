import { useMemo } from "react"
import { SideModal } from "../../../../components/SideModal/SideModal"
import { SIGNS_SYMBOL_DATA } from "../../../../data/sings-data/SignsData"
import { ISign } from "../../../../types/signs"
import { INatalChartVisibilityOptions, NatalChart } from "../NatalChart/NatalChart"
import { SignInfo } from "../SignInfo/SignInfo"
import styles from './SignDescription.module.css'
import { Aspect } from "../NatalChart/components/Aspect/Aspect"
import { IAstroAspect } from "../../../../types/astro"

export type SignDescriptionProps = {
    data?: any;
    sign: ISign,
    onClose: () => void
}

export function SignDescription ({ sign, data, onClose }: SignDescriptionProps) {
    const signSymbolData = SIGNS_SYMBOL_DATA.find((symbolData) => symbolData.sign === sign.name)
    const visibilityOptions = useMemo<INatalChartVisibilityOptions>(() => {
        return {
            houses: [],
            highlightSigns: [sign.name],
            aspects: data.aspects.filter((aspect: IAstroAspect) => {
                return aspect.isContainsSign(sign.name)
            })
        }
    }, [sign, data])
    const leftBar = <div className={styles.SignDescriptionLeftBar}>
        <NatalChart data={data} size={500} visibilityOptions={visibilityOptions} />
    </div>
    return (
        <SideModal onClose={onClose} leftBar={leftBar}>
            <h2>{signSymbolData?.label}</h2>
            <SignInfo sign={sign} withAspects={true} withHouse={true} />        
        </SideModal>
    )
}