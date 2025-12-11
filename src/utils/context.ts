import * as React from "react";
import {createContext} from "react";
import {navItems} from "./constants.ts";
import type {HeroId, IContext, SWContextValue} from "./types";
createContext<SWContextValue>({
    page: navItems[0],
    changePage: (page: string) => console.log(page)
});
const defaultContextValue: IContext = {
    currentHeroId: 'luke',
    changePage: (_target: string) => { /* ... */ },
    changeHero: (heroId: HeroId) => {
        console.warn(`changeHero('${heroId}') called without Provider.`);
    },
    friendsList: [],
    swapHeroAndFriend: () => {
        console.warn(`swapHeroAndFriend called without Provider.`);
    },
};

const Context = React.createContext<IContext>(defaultContextValue);

export default Context;