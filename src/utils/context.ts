import {createContext} from "react";
import {navItems} from "./constants.ts";
import type {SWContextValue} from "./types";
import type {IContext} from "./types";
import * as React from "react";

export const SWContext = createContext<SWContextValue>({
    page: navItems[0],
    changePage: (page: string) => console.log(page)
});

const defaultContextValue: IContext = {
    currentHeroId: 'luke',
    changePage: (target: string) => {
        console.warn(`changePage('${target}') called without Router/Provider.`);
    },
    changeHero: (heroId: string) => {
        console.warn(`changeHero('${heroId}') called without Provider.`);
    },
};

const Context = React.createContext<IContext>(defaultContextValue);

export default Context;