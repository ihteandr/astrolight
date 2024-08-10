// Zadiac
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
// Sings
import { ReactComponent as CeresIcon } from '../../assets/icons/sings/ceres.svg';
import { ReactComponent as ChironIcon } from '../../assets/icons/sings/chiron.svg';
import { ReactComponent as JunoIcon } from '../../assets/icons/sings/juno.svg';
import { ReactComponent as JupiterIcon } from '../../assets/icons/sings/jupiter.svg';
import { ReactComponent as MarsIcon } from '../../assets/icons/sings/mars.svg';
import { ReactComponent as MercuryIcon } from '../../assets/icons/sings/mercury.svg';
import { ReactComponent as MoonIcon } from '../../assets/icons/sings/moon.svg';
import { ReactComponent as NeptuneIcon } from '../../assets/icons/sings/neptune.svg';
import { ReactComponent as UpNodeIcon } from '../../assets/icons/sings/up_node.svg';
import { ReactComponent as DownNodeIcon } from '../../assets/icons/sings/down_node.svg';
import { ReactComponent as PallasIcon } from '../../assets/icons/sings/pallas.svg';
import { ReactComponent as PlutoIcon } from '../../assets/icons/sings/pluto.svg';
import { ReactComponent as SaturnIcon } from '../../assets/icons/sings/saturn.svg';
import { ReactComponent as SelenaIcon } from '../../assets/icons/sings/selena.svg';
import { ReactComponent as SunIcon } from '../../assets/icons/sings/sun.svg';
import { ReactComponent as UranusIcon } from '../../assets/icons/sings/uranus.svg';
import { ReactComponent as VenusIcon } from '../../assets/icons/sings/venus.svg';
import { ReactComponent as VestaIcon } from '../../assets/icons/sings/vesta.svg';
import { ReactComponent as ProserpinaIcon } from '../../assets/icons/sings/proserpina.svg';
import { ReactComponent as LilithIcon } from '../../assets/icons/sings/lilith.svg';
import { ReactComponent as FortureIcon } from '../../assets/icons/sings/fortune.svg';

//UI 
import { ReactComponent as InfoIcon } from '../../assets/icons/ui/info.svg'
import { ReactComponent as QuestionIcon } from '../../assets/icons/ui/question.svg'



const IconsMap: any = {
    // zodiac
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
    Virgo: VirgoIcon,

    //signs
    Ceres: CeresIcon,
    Chiron: ChironIcon,
    Juno: JunoIcon,
    Jupiter: JupiterIcon,
    Mars: MarsIcon,
    Mercury: MercuryIcon,
    Moon: MoonIcon,
    Neptune: NeptuneIcon,
    UpNode: UpNodeIcon,
    DownNode: DownNodeIcon,
    Pallas: PallasIcon,
    Pluto: PlutoIcon,
    Saturn: SaturnIcon,
    Selena: SelenaIcon,
    Sun: SunIcon,
    Uranus: UranusIcon,
    Venus: VenusIcon,
    Vesta: VestaIcon,
    Proserpina: ProserpinaIcon,
    Lilith: LilithIcon,
    ParsFortune: FortureIcon,

    //UI
    Info: InfoIcon,
    Question: QuestionIcon
}

export function isSvgIconExists (name: string) {
    return !!IconsMap[name]
}

export type IconProps = {
    name: string,
    size: number,
    style?: any,
    className?: string,
    x?: number,
    y?: number,
    onClick?: () => void,
    onMouseOver?: () => void,
    onMouseLeave?: () => void,
    id?: string
}

export function SvgIcon ({ x, y, id, className, style, name = 'none', size, onClick, onMouseLeave, onMouseOver }: IconProps) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" id={id} x={x} y={y} width={size} height={size} className={className}>
            {createElement(IconsMap[name], {
                width: size,
                height: size,
                style
            }, null)}
            <rect
                width={size}
                height={size}
                stroke="none"
                fill="transparent"
                onClick={onClick}
                onMouseLeave={onMouseLeave}
                onMouseOver={onMouseOver}
                style={style}/>
        </svg>
    )
}