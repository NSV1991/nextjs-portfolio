import Link from 'next/link';
import styles from './Navigation.module.scss';
import { AnimatePresence, motion } from 'framer-motion';

type NavItemProps = {
    text: string;
    link: string;
    onLinkClick?: (link: string) => void | undefined;
};

const NavItem = ({ text, link, onLinkClick }: NavItemProps) => {
    const itemVariants = {
        closed: {
            opacity: 0,
        },
        open: { opacity: 1 },
    };
    return (
        <motion.li
            className='nav-item'
            whileHover={{ scale: 1.1 }}
            variants={itemVariants}
            onClick={() => onLinkClick && onLinkClick(link)}>
            <Link href={link} className='nav-link'>
                {text}
            </Link>
        </motion.li>
    );
};
export const Navigation = ({
    onLinkClick,
}: {
    onLinkClick?: (link: string) => void;
}) => {
    const navItems = [
        { text: 'Home', link: '/' },
        { text: 'Experience', link: '/experience' },
        { text: 'Education', link: '/education' },
        { text: 'Skill', link: '/skill' },
        { text: 'Blog', link: '/blog' },
        { text: 'Work', link: '/work' },
    ];

    return (
        <AnimatePresence>
            <nav id='navigation' className='d-xl-block'>
                <motion.ul
                    className={`${styles.mainNav} nav-pills`}
                    initial='closed'
                    animate='open'
                    exit='closed'>
                    {navItems.map(({ text, link }, index) => (
                        <NavItem
                            key={`${text}-${index}`}
                            text={text}
                            link={link}
                            onLinkClick={onLinkClick}
                        />
                    ))}
                </motion.ul>
            </nav>
        </AnimatePresence>
    );
};
