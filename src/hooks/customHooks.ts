import {characters} from "../utils/constants.ts";
import type {HeroId} from "../utils/types.d.ts";

export const useValidHero = (heroId: string | undefined): HeroId => {
    const heroKey = heroId || 'luke';
    const isHeroValid = Object.prototype.hasOwnProperty.call(characters, heroKey);
    return isHeroValid ? (heroKey as HeroId) : 'luke';
}

export const useHeroName = (heroId: string | undefined): string => {
    const validHeroId = useValidHero(heroId);
    return characters[validHeroId].name;
}