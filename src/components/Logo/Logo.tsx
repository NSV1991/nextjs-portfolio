import Image from 'next/image';
import SmallLogo from '@assets/images/logo/small-logo-new.webp';
import styles from './Logo.module.scss';
import Link from 'next/link';

export const Logo = () => {
    return (
        <div className={styles.logo}>
            <Link href='/'>
                <Image
                    alt='neeraj vageele logo image'
                    className={`${styles.logoImage} rounded-circle`}
                    height='50'
                    priority
                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                    src={SmallLogo}
                    width='50'
                />
            </Link>
        </div>
    );
};
