import React, { FunctionComponent, useEffect, useRef, useState } from 'react';
import { Logo } from '../Logo/Logo';
import { Navigation } from '../Navigation/Navigation';
import styles from './Header.module.scss';
import { useIsMobileView } from '../../utils';
import { AnimatePresence, motion, useCycle } from 'framer-motion';

export const Header: FunctionComponent = () => {
    const stickyHeader = useRef<HTMLElement>(null);
    const isMobile = useIsMobileView();

    const [isSticky, setIsSticky] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useCycle(false, true);

    const fixedHeader = () => {
        if (window.scrollY > 50) {
            setIsSticky(true);
        } else {
            setIsSticky(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', fixedHeader);
    }, []);

    const sideVariants = {
        closed: {
            transition: {
                staggerChildren: 0.2,
                staggerDirection: -1,
            },
        },
        open: {
            transition: {
                staggerChildren: 0.2,
                staggerDirection: 1,
            },
        },
    };

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
                                        setIsSidebarOpen(1);
                                    }}>
                                    <i className='bi bi-list'></i>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </header>

            <AnimatePresence>
                {isSidebarOpen && (
                    <>
                        <div className={styles.sidebarOverlay}></div>
                        <motion.aside
                            initial={{ width: 0 }}
                            animate={{ width: '80vw' }}
                            exit={{
                                width: 0,
                                transition: { delay: 0.2, duration: 0.3 },
                            }}
                            className={styles.sidebar}>
                            <motion.div
                                initial='closed'
                                animate='open'
                                exit='closed'
                                variants={sideVariants}>
                                <div className={styles.heading}>
                                    <Logo />
                                    <span
                                        onClick={() => {
                                            setIsSidebarOpen(0);
                                        }}>
                                        <i className='bi bi-x-lg'></i>
                                    </span>
                                </div>
                                <p>Senior Software Engineer</p>
                                <div className={styles.content}>
                                    <Navigation
                                        onLinkClick={() => {
                                            isSidebarOpen &&
                                                setIsSidebarOpen(0);
                                        }}
                                    />
                                </div>
                            </motion.div>
                        </motion.aside>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};
