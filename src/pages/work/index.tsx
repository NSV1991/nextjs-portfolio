import { Card } from '@components/index';
import styles from './WorkSamples.module.scss';

import ObjectDetectionImage from '@assets/images/work/objectDetection.jpg';
import FaceDetectionImage from '@assets/images/work/faceDetection.png';
import ElementImage from '@assets/images/work/element.png';

type WorkDetails = {
    title: string;
    category: string;
    image: string;
    link: string;
    absoluteLink?: boolean;
};

type WorkProps = {
    workList: WorkDetails[];
};

export const getStaticProps = () => {
    return {
        props: {
            workList: [
                {
                    title: 'Detect face from Image using face API',
                    category: 'Personal',
                    image: FaceDetectionImage.src,
                    link: 'face-detection',
                },
                {
                    title: 'Detect Object from Image using ML5',
                    category: 'Personal',
                    image: ObjectDetectionImage.src,
                    link: 'object-detection',
                },
                {
                    title: 'Element IO | Secure collaboration and messaging',
                    category: 'Open Source Contribution',
                    image: ElementImage.src,
                    link: 'https://app.element.io/',
                    absoluteLink: true,
                },
            ],
        },
    };
};

export default function WorkSamples({ workList }: WorkProps) {
    return (
        <div id='work' className={styles.sectionSeparator}>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12 text-center'>
                        <span className={styles.subtitle}>Work</span>
                        <h2 className='text-6xl font-bold'>My Work</h2>
                    </div>
                </div>
                <div className={`row ${styles.blogContainer}`}>
                    {workList.map((work, index) => (
                        <Card
                            key={`${work.title}-${index}`}
                            image={work.image}
                            title={work.title}
                            url={
                                work?.absoluteLink
                                    ? work.link
                                    : `work/${work.link}`
                            }
                            category={work.category || ''}
                            openInSamePage
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
