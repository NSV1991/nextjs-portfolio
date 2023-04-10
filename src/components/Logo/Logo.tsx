import Image from 'next/image';
import SmallLogo from '../../assests/images/logo/small-logo-new.png';
import style from './Logo.module.scss';

export const Logo = () => {
    return (
        <div className='logo'>
            <a href='#home'>
                <Image
                    className={`${style.logoImage} rounded-circle w-25`}
                    src={SmallLogo}
                    alt='logo'
                    priority
                />
            </a>
        </div>
    );
};
