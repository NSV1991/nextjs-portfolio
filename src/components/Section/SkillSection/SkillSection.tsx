import { ProgressBar } from '@components/ProgressBar/ProgressBar';
import styles from './SkillSection.module.scss';

export const SkillSection = () => {
    const webDevelopmentSkill = [
        {
            id: 1,
            skill: 'React',
            rating: '90%',
        },
        {
            id: 2,
            skill: 'Node',
            rating: '75%',
        },
        {
            id: 3,
            skill: 'JavaScript',
            rating: '70%',
        },
        {
            id: 4,
            skill: 'NextJS',
            rating: '70%',
        },
        {
            id: 5,
            skill: 'HTML',
            rating: '70%',
        },
        {
            id: 6,
            skill: 'CSS',
            rating: '60%',
        },
    ];

    const projectTools = [
        {
            id: 11,
            skill: 'Jira',
            rating: '90%',
        },
        {
            id: 12,
            skill: 'Bitbucket',
            rating: '95%',
        },
        {
            id: 13,
            skill: 'Git',
            rating: '95%',
        },
        {
            id: 14,
            skill: 'Figma',
            rating: '70%',
        },
        {
            id: 15,
            skill: 'AWS',
            rating: '70%',
        },
    ];

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
                            {webDevelopmentSkill.map((data) => (
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

                            {projectTools.map((data) => (
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
};
