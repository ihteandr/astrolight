import { EAstroZodiacSign } from "../../data/zodiac/ZodiacData";
import { EPlanetSigns } from "./EPlanets";

export interface ISign {
    name: EPlanetSigns,
    sign: EAstroZodiacSign,
    full_degree: number,
    is_retro: "true" | "false"
}