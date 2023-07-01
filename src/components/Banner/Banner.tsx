import Image from 'next/image';
import Link from 'next/link';

import styles from './Banner.module.scss';
import HeroImage from '@assets/images/neerajBanner.webp';
import {
    FileIcon,
    GitHubIcon,
    LeetCodeIcon,
    LinkedInIcon,
    MailIcon,
    MapPinIcon,
    TwitterIcon,
    UserIcon,
} from '@assets/images/icons';

const UserInfo = () => {
    return (
        <>
            <div className={styles.header}>
                <div className={styles.userIcon}>
                    <UserIcon />
                </div>
                <h2 className={styles.title}>
                    Hi, I&apos;m <span> Neeraj Sarang Vageele</span>
                </h2>
                <p className={styles.subtitle}>
                    Senior Software Engineer working for Apexon in Gujarat,
                    India.
                </p>
            </div>
            <div>
                <div className={styles.userInfo}>
                    <FileIcon />
                    <span>Full Stack developer (JavaScript)</span>
                </div>
                <div className={styles.userInfo}>
                    <MailIcon />
                    <span>neerajvageele451@gmail.com</span>
                </div>
                <div className={styles.userInfo}>
                    <MapPinIcon />
                    <span>Gujarat, India</span>
                </div>
            </div>
        </>
    );
};

const SocialInfo = () => {
    return (
        <div className={styles.socialInfo}>
            <span className={styles.title}>find me</span>
            <ul className={styles.iconWrapper}>
                <li title='linkedIn'>
                    <Link href='https://www.linkedin.com/in/neeraj-vageele-ba3801148/'>
                        <LinkedInIcon />
                    </Link>
                </li>
                <li title='github'>
                    <Link href='https://github.com/NSV1991'>
                        <GitHubIcon />
                    </Link>
                </li>
                <li title='leetcode'>
                    <Link href='https://leetcode.com/NSV1991/'>
                        <LeetCodeIcon />
                    </Link>
                </li>
                <li title='twitter'>
                    <Link href='https://twitter.com/vageele'>
                        <TwitterIcon />
                    </Link>
                </li>
            </ul>
        </div>
    );
};

const ResumeAndContact = () => {
    return (
        <div className={styles.userInfoFooter}>
            <span>Download my curriculum vitae</span>
            <div>
                <Link href='files/Neeraj_Vageele_CV.pdf' target='_blank'>
                    <span>DOWNLOAD CV</span>
                </Link>
                <Link href='mailto:neerajvageele451@gmail.com'>
                    <span>CONTACT ME</span>
                </Link>
            </div>
        </div>
    );
};

const HeroDetailsSection = () => {
    return (
        <div className='order-2 order-xl-1 col-lg-12 col-xl-5 mt_lg--50 mt_md--50 mt_sm--50'>
            <div className={styles.info}>
                <div className='row'>
                    <div className='col-xl-12 col-lg-12 col-12'>
                        <div className={styles.topSection}>
                            <UserInfo />
                            <SocialInfo />
                        </div>
                    </div>
                    <div className='col-xl-12 col-lg-12 col-12'>
                        <ResumeAndContact />
                    </div>
                </div>
            </div>
        </div>
    );
};

const HeroImageSection = () => {
    return (
        <div className='order-1 order-xl-2 col-lg-12 col-xl-7'>
            <div className={styles.imageSection}>
                <div>
                    <Image
                        src={HeroImage}
                        alt='neeraj vageele banner image'
                        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                        priority
                    />
                </div>
            </div>
        </div>
    );
};

export const Banner = () => {
    return (
        <div id='home' className={`${styles.bannerContainer}`}>
            <div className='container'>
                <div className={`row ${styles.banner}`}>
                    <HeroDetailsSection />
                    <HeroImageSection />
                </div>
            </div>
        </div>
    );
};
