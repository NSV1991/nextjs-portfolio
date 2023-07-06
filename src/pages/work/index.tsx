import { Card } from '@components/index';
import styles from './WorkSamples.module.scss';
import { WORK_LIST } from '../../constants';
import { WorkDetails } from '../../commonTypes';

export const getStaticProps = () => {
    return {
        props: {
            workList: WORK_LIST,
        },
    };
};

type WorkProps = {
    workList: WorkDetails[];
};

export default function WorkSamples({ workList }: WorkProps) {
    return (
        <div id='work' className={styles.sectionSeparator}>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12 text-center'>
                        <h1 className={styles.subtitle}>Work</h1>
                        <h2 className='text-6xl font-bold'>
                            Explore My Projects
                        </h2>
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
