import React, {useContext} from 'react';
import Navigation from "./Navigation.tsx";
import {useParams, useLocation} from 'react-router-dom';
import {characters} from '../utils/constants.ts';
import type {HeroId} from '../utils/types.d.ts';
import Context from "../utils/context.ts";
import {useValidHero} from "../hooks/customHooks.ts";

const Header: React.FC = () => {
    const location = useLocation();
    const {currentHeroId: contextHeroId} = useContext(Context);
    const {heroId: urlHeroId} = useParams<{ heroId?: string }>();

    const validUrlHeroId: HeroId = useValidHero(urlHeroId);

    let heroName: string;

    const knownPathPrefixes = ['/aboutme', '/starwars', '/contact'];
    const isErrorPage = location.pathname !== '/' && !knownPathPrefixes.some(p => location.pathname.startsWith(p));

    if (isErrorPage) {
        heroName = "ERROR!";
    } else if (location.pathname.includes('aboutme') && urlHeroId) {
        heroName = characters[validUrlHeroId].name;
    } else {
        heroName = characters[contextHeroId].name;
    }

    return (
        <header className="rounded-t-3xl bg-grey">
            <Navigation/>
            <h1 className="text-center text-4xl py-6">{heroName}</h1>
        </header>
    )
}
export default Header;