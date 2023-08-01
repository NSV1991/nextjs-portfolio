import { ProgressBar } from '@components/index';
import { GetStaticProps } from 'next';
import { PROJECT_TOOLS, SKILLS } from '../../constants';
import styles from './SkillSection.module.scss';

type Skills = Array<{
    id: number;
    skill: string;
    rating: string;
}>;

export const getStaticProps: GetStaticProps<{
    skills: Skills;
    tools: Skills;
}> = async () => {
    return { props: { skills: SKILLS, tools: PROJECT_TOOLS } };
};

export default function Skills({
    skills,
    tools,
}: {
    skills: Skills;
    tools: Skills;
}) {
    return (
        <div id='skill' className={styles.skillSection}>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <div className='text-center'>
                            <span className={`${styles.subtitle} mb-10`}>
                                SKILLS AND RATINGS
                            </span>
                            <h2>Technologies</h2>
                        </div>
                    </div>
                </div>

                <div>
                    <div className={`${styles.skillDetails} row mt-10`}>
                        <div className='col-lg-6 col-md-6 col-12 mb-5'>
                            <span className={styles.subtitle}>Features</span>
                            <h4>Web development</h4>
                            {skills.map((data) => (
                                <ProgressBar
                                    title={data.skill}
                                    value={data.rating}
                                    key={data.id}
                                />
                            ))}
                        </div>
                        <div className='col-lg-6 col-md-6 col-12 mb-5'>
                            <span className={styles.subtitle}>Features</span>
                            <h4>Project Management Tools</h4>

                            {tools.map((data) => (
                                <ProgressBar
                                    title={data.skill}
                                    value={data.rating}
                                    key={data.id}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
