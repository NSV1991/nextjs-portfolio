import Image, { StaticImageData } from 'next/image';
import { FunctionComponent } from 'react';
import styles from './Card.module.scss';
import Link from 'next/link';

type CardProps = {
    image: StaticImageData | string;
    category?: string;
    title: string;
    url: string;
    openInSamePage?: Boolean;
};

export const Card: FunctionComponent<CardProps> = ({
    image,
    category,
    title,
    url,
    openInSamePage,
}: CardProps) => {
    return (
        <div
            className={`col-lg-6 col-xl-4 col-md-6 col-sm-12 col-12 ${styles.card}`}>
            <div className={styles.container}>
                <div className={styles.image}>
                    <Image
                        src={image}
                        alt={title}
                        width={1400}
                        height={1054}
                        loader={({ src }) => src}
                        style={{ objectFit: 'fill' }}
                        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                        priority
                    />
                </div>
                <div className={styles.content}>
                    <Link
                        href={url}
                        target={openInSamePage ? '_self' : '_blank'}>
                        {category && (
                            <div className={styles.blogDetails}>
                                <div className={`${styles.category} category`}>
                                    <p>{category}</p>
                                </div>
                            </div>
                        )}
                        <h4>{title}</h4>
                    </Link>
                </div>
            </div>
        </div>
    );
};
