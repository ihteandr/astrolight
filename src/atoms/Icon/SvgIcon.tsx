import { cloneElement, createElement } from 'react';
import { ReactComponent as AquariusIcon } from '../../assets/icons/zodiac/aquarius.svg';
import { ReactComponent as AriesIcon } from '../../assets/icons/zodiac/aries.svg';
import { ReactComponent as CancerIcon } from '../../assets/icons/zodiac/cancer.svg';
import { ReactComponent as CapricornIcon } from '../../assets/icons/zodiac/capricorn.svg';
import { ReactComponent as GeminiIcon } from '../../assets/icons/zodiac/gemini.svg';
import { ReactComponent as LeoIcon } from '../../assets/icons/zodiac/leo.svg';
import { ReactComponent as LibraIcon } from '../../assets/icons/zodiac/libra.svg'
import { ReactComponent as PiscesIcon } from '../../assets/icons/zodiac/pisces.svg';
import { ReactComponent as SagittariusIcon } from '../../assets/icons/zodiac/sagittarius.svg';
import { ReactComponent as ScorpioIcon } from '../../assets/icons/zodiac/scorpio.svg';
import { ReactComponent as TaurusIcon } from '../../assets/icons/zodiac/taurus.svg';
import { ReactComponent as VirgoIcon } from '../../assets/icons/zodiac/virgo.svg';

const IconsMap: any = {
    Aquarius: AquariusIcon,
    Aries: AriesIcon,
    Cancer: CancerIcon,
    Capricorn: CapricornIcon,
    Gemini: GeminiIcon,
    Leo: LeoIcon,
    Libra: LibraIcon,
    Pisces: PiscesIcon,
    Sagittarius: SagittariusIcon,
    Scorpio: ScorpioIcon,
    Taurus: TaurusIcon,
    Virgo: VirgoIcon
}

export type IconProps = {
    name: string,
    size?: number,
    onClick?: () => void,
    style?: any,
    className?: string,
    x?: number,
    y?: number
}
export function SvgIcon ({ x, y, className, style, name, size, onClick }: IconProps) {
    return (
        <>
            {createElement(IconsMap[name], {
                onClick,
                x,
                y,
                className,
                width: size,
                height: size,
                style
            }, null)}
        </>
    )
}