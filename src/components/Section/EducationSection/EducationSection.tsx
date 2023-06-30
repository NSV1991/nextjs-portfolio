import Image from 'next/image';
import styles from './EducationSection.module.scss';
import EducationImg from '@assets/images/education/EducationImage.webp';
import Link from 'next/link';

export const EducationSection = () => {
    return (
        <div id='education' className={styles.educationSection}>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <div className='text-center'>
                            <span className={`${styles.subtitle} mb-10`}>
                                BACHELOR&apos;S OF ENGINEERING IN COMPUTER
                            </span>
                            <h2 className='title'>My Education</h2>
                        </div>
                    </div>
                </div>
                <div className='row mt-10'>
                    <div className='col-12'>
                        <div className={styles.educationDetails}>
                            <div className={styles.educationImage}>
                                <Image
                                    src={EducationImg}
                                    alt='Computer Engineer'
                                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                                    priority
                                />
                            </div>
                            <div className={styles.educationInfo}>
                                <Link
                                    href='https://www.gtu.ac.in/'
                                    target='_blank'>
                                    <span>2013-2017</span>
                                    <h4>
                                        Gujarat Technological University (GTU)
                                        <i className='bi bi-arrow-up-right'></i>
                                    </h4>
                                    <h6>Computer Engineering</h6>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
