import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';
import Image from 'next/image';

import { REVIEWS } from '../../../constants';
import styles from './ReviewSection.module.scss';
import { Modal } from '@components/Modal/Modal';
import { useState } from 'react';
import { Button } from '@components/Button/Button';
import { ReviewType } from '../../../commonTypes';

export const Review = () => {
    const [show, setShow] = useState(false);
    const [selectedReview, setSelectedReview] = useState<ReviewType>();
    const handleShow = (review: ReviewType) => {
        setSelectedReview(review);
        setShow(true);
    };

    return (
        <>
            <div id='reviewSection' className={styles.reviewSection}>
                <div className='container'>
                    <div className='row'>
                        <div className='text-center'>
                            <span className={styles.subtitle}>
                                Recommendations
                            </span>
                            <h2>Client and Peer Recommendations</h2>
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
                                }}
                                arrows={false}
                                showDots
                                ssr
                                infinite
                                autoPlay>
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
                                        <div className={styles.readMore}>
                                            <Button
                                                variant='primary'
                                                onClick={() =>
                                                    handleShow(review)
                                                }>
                                                Read more...
                                            </Button>
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
            <Modal
                fullscreen={true}
                show={show}
                onClose={() => setShow(false)}
                title={
                    <h2 className={styles.customModalHeading}>
                        {selectedReview?.name}&apos;s Recommendations
                    </h2>
                }
                body={
                    selectedReview && (
                        <div>
                            <Image
                                className={styles.contentImage}
                                src={selectedReview.image}
                                alt={selectedReview.name}
                            />
                            <div
                                className={styles.customModalContent}
                                dangerouslySetInnerHTML={{
                                    __html: selectedReview?.text,
                                }}></div>
                        </div>
                    )
                }
            />
        </>
    );
};
