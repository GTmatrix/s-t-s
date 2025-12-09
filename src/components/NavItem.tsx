import React from 'react';
import Button from "./ui/Button.tsx";
import {NavLink} from "react-router-dom";
import type {NavItemProps} from '../utils/types.ts';

const NavItem: React.FC<NavItemProps> = ({itemTitle}) => {
    const toPath = itemTitle.replace(/\s/g, '').toLowerCase();

    return (
        <NavLink to={toPath === 'home' ? '/' : `/${toPath}`}>
            <Button>{itemTitle}</Button>
        </NavLink>
    )
}

export default NavItem;