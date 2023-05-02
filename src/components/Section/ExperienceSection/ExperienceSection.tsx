import Image from 'next/image';
import styles from './ExperienceSection.module.scss';

import ApexonImg from '@assets/images/portfolio/apexonNew.png';
import TRTImg from '@assets/images/portfolio/thirdrocktechknoNew.png';

export const ExperienceSection = () => {
    return (
        <div className={styles.experienceSection}>
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
                                <Image src={ApexonImg} alt='Apexon' />
                            </div>
                            <div className={styles.experienceInfo}>
                                <span>2022-Present</span>
                                <h4>
                                    <a href='https://www.apexon.com/'>Apexon</a>
                                </h4>
                                <h6>Senior Software Engineer</h6>
                            </div>
                        </div>

                        <div className={styles.experienceDetails}>
                            <div className={styles.experienceImage}>
                                <Image src={TRTImg} alt='TRT' />
                            </div>
                            <div className={styles.experienceInfo}>
                                <span>2017-2022</span>
                                <h4>
                                    <a href='https://www.thirdrocktechkno.com/'>
                                        Third Rock Techkno
                                    </a>
                                </h4>
                                <h6>Programmer Analyst</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
