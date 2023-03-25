import React, { FunctionComponent } from 'react';
import { Logo } from '../Logo/Logo';
import { Navigation } from '../Navigation/Navigation';

export const Header: FunctionComponent = () => {
    return (
        <header className='flex flex-row justify-between p-3 items-center sm:px-10 py-5'>
            <Logo />
            <Navigation />
        </header>
    );
};
