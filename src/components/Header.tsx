import React from 'react';
import Navigation from "./Navigation.tsx";
import { useParams } from 'react-router-dom';
import { characters } from '../utils/constants.ts';
import type {HeroId} from '../utils/types.ts';

const Header: React.FC = () => {
    const { heroId = 'luke' } = useParams<{ heroId?: string }>();
    const isHeroValid = Object.prototype.hasOwnProperty.call(characters, heroId);
    const heroKey: HeroId = isHeroValid ? (heroId as HeroId) : 'luke';

    const heroName = characters[heroKey].name;

    return (
        <header className="rounded-t-3xl bg-grey">
            <Navigation/>
            <h1 className="text-center text-4xl py-6">{heroName}</h1>
        </header>
    )
}
export default Header;