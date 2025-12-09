export interface SWContextValue {
    page: string;
    changePage: (page: string) => void;
}

export interface HeroInfo {
    name: string;
    gender: string;
    birth_year: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
}

export interface CharacterDetails {
    name: string;
    img: string;
    url: string;
}

export interface NavItemProps {
    itemTitle: string;
}

export interface FriendProps {
    friend: string;
    pos: number;
}

export type HeroId =
    'luke'
    | 'c3po'
    | 'r2d2'
    | 'leia'
    | 'obi_wan'
    | 'chewbacca'
    | 'han_solo'
    | 'yoda'
    | 'ewok'
    | 'falcon';

export interface IContext {
    currentHeroId: HeroId;
    changePage: (target: string) => void;
    changeHero: (heroId: HeroId) => void;
}