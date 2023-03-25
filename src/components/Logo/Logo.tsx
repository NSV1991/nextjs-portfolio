import Image from 'next/image';
import SmallLogo from '../../assests/images/logo/small-logo-new.png';

export const Logo = () => {
    return (
        <div className='logo'>
            <a href='#home'>
                <Image
                    className='rounded-full w-12'
                    src={SmallLogo}
                    alt='logo'
                    priority
                />
            </a>
        </div>
    );
};
