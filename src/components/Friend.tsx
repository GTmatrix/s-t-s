import React from 'react';
import {useNavigate} from 'react-router-dom';
import {characters, navItems} from '../utils/constants.ts';
import type {FriendProps, HeroId} from '../utils/types.ts';

const Friend: React.FC<FriendProps> = ({friend, pos}) => {
    const navigate = useNavigate();
    const heroId = (Object.keys(characters) as HeroId[]).find(key => characters[key].img === friend);

    const handleClick = () => {
        if (heroId) {
            const path = navItems[1].replace(/\s/g, '').toLowerCase();
            navigate(`/${path}/${heroId}`);
        }
    };

    let styles = "w-full cursor-pointer hover:opacity-80 transition-opacity ";
    if (pos === 7) {
        styles += 'rounded-bl-3xl';
    }
    if (pos === 9) {
        styles += 'rounded-br-3xl';
    }
    return (
        <img
            className={styles}
            src={friend}
            alt="Friend"
            onClick={handleClick}
        />
    )
}

export default Friend;