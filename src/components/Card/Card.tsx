import Image, { StaticImageData } from 'next/image';
import { FunctionComponent } from 'react';
import styles from './Card.module.scss';

type BlogCardProps = {
    image: StaticImageData | string;
    category: string;
    title: string;
    blogUrl: string;
};

export const BlogCard: FunctionComponent<BlogCardProps> = ({
    image,
    category,
    title,
    blogUrl,
}: BlogCardProps) => {
    return (
        <div
            className={`col-lg-6 col-xl-4 col-md-6 col-sm-12 col-12 ${styles.card}`}>
            <div className={styles.container}>
                <div>
                    <div className={styles.image}>
                        <Image
                            src={image}
                            alt={title}
                            width={1400}
                            height={1054}
                            loader={({ src }) => src}
                            style={{ objectFit: 'fill' }}
                        />
                    </div>
                    <div className={styles.content}>
                        <div className={styles.blogDetails}>
                            <div className={styles.category}>
                                <p>{category}</p>
                            </div>
                        </div>
                        <h4>
                            <a href={blogUrl}>
                                {title}
                                <i className='bi bi-arrow-up-right text-[0] opacity-0 relative top-3 duration-[0.4s]'></i>
                            </a>
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    );
};
