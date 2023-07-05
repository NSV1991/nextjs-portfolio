import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';
import Image from 'next/image';

import { REVIEWS } from '../../../constants';
import styles from './ReviewSection.module.scss';

export const Review = () => {
    return (
        <div id='reviewSection' className={styles.reviewSection}>
            <div className='container'>
                <div className='row'>
                    <div className='text-center'>
                        <span className={styles.subtitle}>Review</span>
                        <h2>Client and Peer Reviews</h2>
                    </div>
                </div>
                <div className={`row ${styles.reviewParent}`}>
                    <div className={styles.reviewContainer}>
                        <Carousel
                            responsive={{
                                mobile: {
                                    breakpoint: { max: 4000, min: 0 },
                                    items: 1,
                                },
                            }}>
                            {REVIEWS?.map((review, index) => (
                                <div key={`review-${review.name}-${index}`}>
                                    <div className={styles.image}>
                                        <Image
                                            src={review.image}
                                            alt={review.name}
                                        />
                                    </div>
                                    <div className={styles.text}>
                                        <div
                                            dangerouslySetInnerHTML={{
                                                __html: review.text,
                                            }}></div>
                                    </div>
                                    <div className={styles.reviewerInfo}>
                                        <p>{review.name}</p>
                                        <span>
                                            {review.designation},
                                            {` ${review.company}`}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    );
};
