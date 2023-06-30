import Image from 'next/image';
import styles from './ExperienceSection.module.scss';
import Link from 'next/link';

import ApexonImg from '@assets/images/portfolio/apexonNew.webp';
import TRTImg from '@assets/images/portfolio/thirdrocktechknoNew.webp';

export const ExperienceSection = () => {
    return (
        <div id='experience' className={styles.experienceSection}>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <div className='text-center'>
                            <span className={`${styles.subtitle} mb-10`}>
                                About 6 years of experience
                            </span>
                            <h2 className='title'>My Experience</h2>
                        </div>
                    </div>
                </div>
                <div className='row mt-10'>
                    <div className='col-12'>
                        <div className={styles.experienceDetails}>
                            <div className={styles.experienceImage}>
                                <Image
                                    src={ApexonImg}
                                    alt='Apexon'
                                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                                    priority
                                />
                            </div>
                            <div className={styles.experienceInfo}>
                                <Link
                                    href='https://www.apexon.com/'
                                    target='_blank'>
                                    <span>2022-Present</span>
                                    <h4>
                                        Apexon
                                        <i className='bi bi-arrow-up-right'></i>
                                    </h4>
                                    <h6>Senior Software Engineer</h6>
                                </Link>
                            </div>
                        </div>

                        <div className={styles.experienceDetails}>
                            <div className={styles.experienceImage}>
                                <Image
                                    src={TRTImg}
                                    alt='TRT'
                                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                                    priority
                                />
                            </div>
                            <div className={styles.experienceInfo}>
                                <Link
                                    href='https://www.thirdrocktechkno.com/'
                                    target='_blank'>
                                    <span>2017-2022</span>
                                    <h4>
                                        Third Rock Techkno
                                        <i className='bi bi-arrow-up-right'></i>
                                    </h4>
                                    <h6>Programmer Analyst</h6>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
