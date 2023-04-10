import Image from 'next/image';
import SmallLogo from '@assets/images/logo/small-logo-new.png';
import style from './Logo.module.scss';

export const Logo = () => {
    return (
        <div className='logo'>
            <a href='#home'>
                <Image
                    className={`${style.logoImage} rounded-circle`}
                    src={SmallLogo}
                    alt='logo'
                    priority
                />
            </a>
        </div>
    );
};
