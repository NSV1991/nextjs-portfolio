import 'react-multi-carousel/lib/styles.css';
import { Card } from '@components/Card/Card';
import { RESPONSIVE_CAROUSEL_CONFIG } from '../../../constants';
import Carousel from 'react-multi-carousel';
import Link from 'next/link';
import styles from './FeaturedSection.module.scss';

type FeaturedSectionProps = {
    sectionName: string;
    data: Array<any>;
    title: string;
    viewAllLink?: string;
};

export const FeaturedSection = ({
    sectionName,
    data,
    title,
    viewAllLink,
}: FeaturedSectionProps) => {
    return (
        <div id={`featured${sectionName}`} className={styles.sectionSeparator}>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12 text-center'>
                        <span className={styles.subtitle}>{sectionName}</span>
                        <h2>{title}</h2>
                    </div>
                </div>
                <div className={`row ${styles.featuredSection}`}>
                    {viewAllLink && (
                        <div className={styles.viewAll}>
                            <Link href={viewAllLink}>View All</Link>
                        </div>
                    )}
                    <Carousel
                        responsive={RESPONSIVE_CAROUSEL_CONFIG}
                        arrows={false}
                        autoPlay
                        infinite
                        showDots
                        ssr>
                        {data?.map((item) => (
                            <Card
                                key={item.key}
                                image={item.image}
                                category={item.category || ''}
                                title={item.title}
                                url={item.link}
                                openInSamePage={item.openInSamePage}
                            />
                        ))}
                    </Carousel>
                </div>
            </div>
        </div>
    );
};
