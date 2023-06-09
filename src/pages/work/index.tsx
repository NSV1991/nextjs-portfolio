import { Card, Layout } from '@components/index';
import styles from './WorkSamples.module.scss';

import ObjectDetectionImage from '@assets/images/work/objectDetection.jpg';
import ElementImage from '@assets/images/work/element.png';

export default function WorkSamples() {
    const samples = [
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
                            <h2 className='text-6xl font-bold'>My Work</h2>
                        </div>
                    </div>
                    <div className={`row ${styles.blogContainer}`}>
                        {samples.map((sample, index) => (
                            <Card
                                key={`${sample.title}-${index}`}
                                image={sample.image}
                                title={sample.title}
                                url={`work/${sample.link}`}
                                category={sample.category || ''}
                                openInSamePage
                            />
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
}
