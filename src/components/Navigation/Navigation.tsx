import Link from 'next/link';

type NavItemProps = {
    text: string;
    link: string;
};

const NavItem = ({ text, link }: NavItemProps) => {
    return (
        <li className='font-semibold text-slate-500 hover:text-slate-900 lg:px-6 py-3 md:p-3'>
            <Link href={link}>{text}</Link>
        </li>
    );
};

export const Navigation = () => {
    return (
        <nav>
            <ul className='hidden flex-row items-center sm:flex'>
                <NavItem text='Home' link='#home' />
                <NavItem text='Experience' link='#experience' />
                <NavItem text='Education' link='#education' />
                <NavItem text='Skills' link='#skill' />
                <NavItem text='Blogs' link='#blog' />
            </ul>
        </nav>
    );
};
