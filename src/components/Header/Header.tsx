import React from 'react';
import { Logo } from '../Logo/Logo';
import { Navigation } from '../Navigation/Navigation';

export const Header = () => {
    return (
        <header className='flex flex-row justify-between p-5 items-center'>
            <Logo />
            <Navigation />
        </header>
    );
};
