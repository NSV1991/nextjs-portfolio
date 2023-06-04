import Image from 'next/image';
import SmallLogo from '@assets/images/logo/small-logo-new.png';
import style from './Logo.module.scss';
import Link from 'next/link';

export const Logo = () => {
    return (
        <div className='logo'>
            <Link href='/'>
                <Image
                    className={`${style.logoImage} rounded-circle`}
                    src={SmallLogo}
                    alt='logo'
                    priority
                />
            </Link>
        </div>
    );
};
