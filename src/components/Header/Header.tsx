import React, {
    FunctionComponent,
    LegacyRef,
    useLayoutEffect,
    useRef,
    useState,
} from 'react';
import { Logo } from '../Logo/Logo';
import { Navigation } from '../Navigation/Navigation';
import styles from './Header.module.scss';

export const Header: FunctionComponent = () => {
    const stickyHeader = useRef<HTMLElement>(null);
    const [isSticky, setIsSticky] = useState(false);

    useLayoutEffect(() => {
        let fixedTop = stickyHeader.current?.offsetTop || 100;
        const fixedHeader = () => {
            if (window.pageYOffset > 50) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };
        window.addEventListener('scroll', fixedHeader);
    }, []);

    return (
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
                <div className='col-lg-10 col-6'>
                    <div className={styles.headerCenter}>
                        <Navigation />
                    </div>
                </div>
            </div>
        </header>
    );
};
