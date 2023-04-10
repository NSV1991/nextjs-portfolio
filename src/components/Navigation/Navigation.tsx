import Link from 'next/link';
import styles from './Navigation.module.scss';

type NavItemProps = {
    text: string;
    link: string;
};

const NavItem = ({ text, link }: NavItemProps) => {
    return (
        <li className='nav-item'>
            <Link href={link} className='nav-link'>{text}</Link>
        </li>
    );
};

export const Navigation = () => {
    return (
        <nav id='navigation' className={` d-none d-xl-block`}>
            <ul className={`${styles.mainNav} nav-pills`}>
                <NavItem text='Home' link='#home' />
                <NavItem text='Experience' link='#experience' />
                <NavItem text='Education' link='#education' />
                <NavItem text='Skills' link='#skill' />
                <NavItem text='Blogs' link='#blog' />
            </ul>
        </nav>
    );
};
