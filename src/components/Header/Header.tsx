import React, { FunctionComponent } from 'react';
import { Logo } from '../Logo/Logo';
import { Navigation } from '../Navigation/Navigation';
import styles from './Header.module.scss';

export const Header: FunctionComponent = () => {
    return (
        <header className={styles.fixedHeader}>
            <div className={`${styles.headerWrapper} row`}>
                <div className='col-lg-2 col-6 px-5'>
                    <div className={styles.headerLeft}>
                        <Logo />
                    </div>
                </div>
                <div className='col-lg-10 col-6'>
                    <div className={styles.headerCenter}>
                        <Navigation />
                    </div>
                </div>
            </div>
        </header>
    );
};
