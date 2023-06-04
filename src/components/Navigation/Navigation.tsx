import Link from 'next/link';
import styles from './Navigation.module.scss';

type NavItemProps = {
    text: string;
    link: string;
};

const NavItem = ({ text, link }: NavItemProps) => {
    return (
        <li className='nav-item'>
            <Link href={link} className='nav-link'>
                {text}
            </Link>
        </li>
    );
};
export const Navigation = () => {
    const navItems = [
        { text: 'Home', link: '/' },
        { text: 'Experience', link: '/experience' },
        { text: 'Education', link: '/education' },
        { text: 'Skills', link: '/skills' },
        { text: 'Blogs', link: '/blogs' },
        { text: 'Work Samples', link: '/work-samples' },
    ];

    return (
        <nav id='navigation' className={` d-none d-xl-block`}>
            <ul className={`${styles.mainNav} nav-pills`}>
                {navItems.map(({ text, link }, index) => (
                    <NavItem key={`${text}-${index}`} text={text} link={link} />
                ))}
            </ul>
        </nav>
    );
};
