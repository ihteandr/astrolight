import { EAstroSigns } from "../../types/signs";
import { SvgIcon } from "./SvgIcon"

export type IconProps = {
    name: string,
    size: number,
    onClick?: () => void,
    style?: any,
    className?: string,
    x?: number,
    y?: number,
    isRetro?: boolean;
    onMouseOver?: () => void,
    onMouseLeave?: () => void
}

function calcX (name: string, size: number) {
    if (name === EAstroSigns.JUPITER) return size - 2;
    if (name === EAstroSigns.PROSERPINA) return size - 2;
    if (name === EAstroSigns.URANUS) return size - 5;
    if (name === EAstroSigns.CHIRON) return size / 2 + 4
    if (name === EAstroSigns.CERES) return size / 2 + 4
    if (name === EAstroSigns.MERCURY) return size / 2 + 4
    if (name === EAstroSigns.NEPTUNE) return size / 2 + 4
    if (name === EAstroSigns.SATURN) return size - 3
    if (name === EAstroSigns.MARS) return size - 5
    if (name === EAstroSigns.VENUS) return size / 2 + 4
    if (name === EAstroSigns.JUNO) return size / 2 + 4
    if (name === EAstroSigns.PLUTO) return size / 2 + 4
    return size;
}

export function SignIcon ({ isRetro, x, y, ...props }: IconProps) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg"
            style={{ position: 'relative', overflow: 'visible' }}
            x={x}
            y={y}
            width={props.size}
            height={props.size}>
            <SvgIcon {...props} />
            {isRetro ? 
                <text
                    x={calcX(props.name, props.size)}
                    y={props.size} fontSize={12}>R</text> : null}
        </svg>
    )
}