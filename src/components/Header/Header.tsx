import React, { FunctionComponent, useEffect, useRef, useState } from 'react';
import { Logo } from '../Logo/Logo';
import { Navigation } from '../Navigation/Navigation';
import styles from './Header.module.scss';
import { Button } from '..';
import { useIsMobileView } from '../../utils';

export const Header: FunctionComponent = () => {
    const stickyHeader = useRef<HTMLElement>(null);
    const isMobile = useIsMobileView();

    const [isSticky, setIsSticky] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const fixedHeader = () => {
        if (window.pageYOffset > 50) {
            setIsSticky(true);
        } else {
            setIsSticky(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', fixedHeader);
    }, []);

    return (
        <>
            <header
                className={`${styles.fixedHeader} ${
                    isSticky && styles.stickyHeader
                } `}
                ref={stickyHeader}>
                <div className={`${styles.headerWrapper} row`}>
                    <div className='col-lg-2 col-6 px-3'>
                        <div className={styles.headerLeft}>
                            <Logo />
                        </div>
                    </div>
                    {!isMobile && (
                        <div className='col-lg-10 col-6'>
                            <div className={styles.headerCenter}>
                                <Navigation />
                            </div>
                        </div>
                    )}
                    {isMobile && (
                        <>
                            <div className='col-lg-2 col-6 px-3'>
                                <div
                                    className={styles.headerRight}
                                    onClick={() => {
                                        setIsSidebarOpen(true);
                                    }}>
                                    <i className='bi bi-list'></i>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </header>

            {isSidebarOpen && (
                <>
                    <div className={styles.sidebarOverlay}></div>
                    <aside className={styles.sidebar}>
                        <div className={styles.heading}>
                            <Logo />
                            <span
                                onClick={() => {
                                    setIsSidebarOpen(false);
                                }}>
                                <i className='bi bi-x-lg'></i>
                            </span>
                        </div>
                        <p>Senior Software Engineer</p>
                        <div className={styles.content}>
                            <Navigation />
                        </div>
                    </aside>
                </>
            )}
        </>
    );
};
