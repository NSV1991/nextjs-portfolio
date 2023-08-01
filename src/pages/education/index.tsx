import { Card } from '@components/index';
import { GetStaticProps } from 'next';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

import styles from './EducationSection.module.scss';

import EducationImg from '@assets/images/education/EducationImage.webp';
import { CERTIFICATES } from '../../constants';
import { Certificate } from '../../commonTypes';

type EducationProps = {
    certificates: Array<Certificate>;
};

export const getStaticProps: GetStaticProps<EducationProps> = async () => {
    return { props: { certificates: CERTIFICATES } };
};

export default function Education({ certificates }: EducationProps) {
    return (
        <>
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
                                            Gujarat Technological University
                                            (GTU)
                                        </h4>
                                        <h6>Computer Engineering</h6>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id='certifications' className={styles.certificationSection}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <div className='text-center'>
                                <span className={`${styles.subtitle} mb-10`}>
                                    Certificates
                                </span>
                                <h2>My Certifications</h2>
                            </div>
                        </div>
                    </div>
                    <div className={`row ${styles.wrapper}`}>
                        {certificates.map((certificate) => (
                            <Card
                                key={certificate.id}
                                image={certificate.image}
                                title={certificate.title}
                                category={certificate.issuedBy}
                                url={certificate.url}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
