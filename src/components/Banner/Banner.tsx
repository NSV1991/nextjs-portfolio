import Image from 'next/image';
import HeroImage from '@assets/images/neeraj-banner.png';
import styles from './Banner.module.scss';
import GitHubIcon from '@assets/images/icons/github';
import UserIcon from '@assets/images/icons/user';
import TwitterIcon from '@assets/images/icons/twitter';
import LinkedInIcon from '@assets/images/icons/linkedIn';
import MapPinIcon from '@assets/images/icons/mapPin';
import MailIcon from '@assets/images/icons/mail';
import FileIcon from '@assets/images/icons/file';

const UserInfo = () => {
    return (
        <>
            <div className={styles.header}>
                <div className={styles.userIcon}>
                    <UserIcon />
                </div>
                <h2 className={styles.title}>
                    Hi, I'm
                    <span>Neeraj Sarang Vageele</span>
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
                <li className='twitter'>
                    <a href='https://twitter.com/vageele'>
                        <TwitterIcon />
                    </a>
                </li>
                <li className='github'>
                    <a href='https://github.com/NSV1991'>
                        <GitHubIcon />
                    </a>
                </li>
                <li className='linkedin'>
                    <a href='https://www.linkedin.com/in/neeraj-vageele-ba3801148/'>
                        <LinkedInIcon />
                    </a>
                </li>
            </ul>
        </div>
    );
};

const ResumeAndContact = () => {
    return (
        <div className={styles.userInfoFooter}>
            <span>Download my curriculum vitae:</span>
            <div className='button-wrapper d-flex'>
                <a
                    className='rn-btn mr--30'
                    href='assets/NeerajVageeleCV.pdf'
                    download>
                    <span>DOWNLOAD CV</span>
                </a>
                <a className='rn-btn' href='mailto:neerajvageele451@gmail.com'>
                    <span>CONTACT ME</span>
                </a>
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
                    <Image src={HeroImage} alt='Portfolio Banner' />
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
