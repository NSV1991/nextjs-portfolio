import Image from 'next/image';
import SmallLogo from '@assets/images/logo/small-logo-new.png';
import styles from './Logo.module.scss';
import Link from 'next/link';

export const Logo = () => {
    return (
        <div className={styles.logo}>
            <Link href='/'>
                <Image
                    className={`${styles.logoImage} rounded-circle`}
                    src={SmallLogo}
                    alt='logo'
                    priority
                />
            </Link>
        </div>
    );
};
