import { Card } from '@components/index';
import styles from './WorkSamples.module.scss';

import ObjectDetectionImage from '@assets/images/work/objectDetection.webp';
import FaceDetectionImage from '@assets/images/work/faceDetection.webp';
import FaceRecognitionImage from '@assets/images/work/faceRecognition.webp';
import ElementImage from '@assets/images/work/element.webp';

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
                    title: 'Face recognition using face-api.js',
                    category: 'Personal',
                    image: FaceRecognitionImage.src,
                    link: 'face-recognition',
                },
                {
                    title: 'Detect face and emotion recognition using face-api.js',
                    category: 'Personal',
                    image: FaceDetectionImage.src,
                    link: 'face-detection',
                },
                {
                    title: 'Detect Object from Image using TensorFlow',
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
                        <h1 className={styles.subtitle}>Work</h1>
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
