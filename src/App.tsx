import Main from "./components/Main.tsx";
import {useCallback, useState} from "react";
import Context from "./utils/context.ts";
import type {HeroId} from "./utils/types.d.ts";
import {characters, navItems} from "./utils/constants.ts";

const initialFriendsList = (Object.keys(characters) as HeroId[])
    .filter(id => id !== 'luke')
    .map(id => characters[id].img);

function App() {
    const [currentHeroId, setCurrentHeroId] = useState<HeroId>('luke');
    const [friendsList, setFriendsList] = useState<string[]>(initialFriendsList);

    const changeHero = useCallback((heroId: HeroId) => {
        setCurrentHeroId(heroId);
    }, []);

    const swapHeroAndFriend = useCallback((newHeroId: HeroId) => {
        const oldHeroId = currentHeroId;
        const newHeroImg = characters[newHeroId].img;
        const oldHeroImg = characters[oldHeroId].img;

        const friendIndex = friendsList.indexOf(newHeroImg);

        if (friendIndex !== -1) {
            const newFriends = [...friendsList];
            newFriends[friendIndex] = oldHeroImg;

            setFriendsList(newFriends);
            setCurrentHeroId(newHeroId);


            const path = navItems[1].replace(/\s/g, '').toLowerCase();
            console.log(`Redirecting to: /${path}/${newHeroId}`);
        }
    }, [currentHeroId, friendsList]);


    const contextValue = {
        currentHeroId,
        changeHero,
        friendsList,
        swapHeroAndFriend,
        changePage: (_target: string) => { /* ... */ }
    };

    return (
        <div className={'mx-2'}>
            <Context value={contextValue}>
                <Main/>
            </Context>
        </div>
    )
}

export default App