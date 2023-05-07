import styles from './ProgressBar.module.scss';

export const ProgressBar = ({
    title,
    value,
}: {
    title: string;
    value: string;
}) => {
    return (
        <div className={styles.progressBar}>
            <h6>{title}</h6>
            <div className={styles.container}>
                <div className={styles.skill} style={{ width: value }}>
                    <span>{value}</span>
                </div>
            </div>
        </div>
    );
};
