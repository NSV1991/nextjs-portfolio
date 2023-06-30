import Image from 'next/image';
import SmallLogo from '@assets/images/logo/small-logo-new.webp';
import styles from './Logo.module.scss';
import Link from 'next/link';

export const Logo = () => {
    return (
        <div className={styles.logo}>
            <Link href='/'>
                <Image
                    alt='logo'
                    className={`${styles.logoImage} rounded-circle`}
                    priority
                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                    src={SmallLogo}
                />
            </Link>
        </div>
    );
};
