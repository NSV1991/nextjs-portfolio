import { Card, Layout } from '@components/index';
import styles from './WorkSamples.module.scss';

import ObjectDetectionImage from '@assets/images/work/objectDetection1.jpg';

export default function WorkSamples() {
    const samples = [
        {
            title: 'Detect Object from Image using ML5',
            description: '',
            image: ObjectDetectionImage,
            link: 'object-detection',
        },
    ];
    return (
        <Layout>
            <div id='blog' className={styles.sectionSeparator}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12 text-center'>
                            <span className={styles.subtitle}>Work</span>
                            <h2 className='text-6xl font-bold'>
                                My Work Samples
                            </h2>
                        </div>
                    </div>
                    <div className={`row ${styles.blogContainer}`}>
                        {samples.map((sample, index) => (
                            <Card
                                key={`${sample.title}-${index}`}
                                image={sample.image}
                                title={sample.title}
                                url={`work-samples/${sample.link}`}
                                openInSamePage
                            />
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
}
