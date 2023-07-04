import { useEffect, useState } from 'react';
import { RESPONSIVE_CAROUSEL_CONFIG } from '../../../constants';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { fetchMediumBlogs } from '../../../utils';
import { Blog } from '../../../commonTypes';
import styles from './FeaturedSection.module.scss';
import { Card } from '@components/Card/Card';

type FeaturedSectionProps = {
    sectionName: string;
};

export const FeaturedSection = ({ sectionName }: FeaturedSectionProps) => {
    const [blogs, setBlogs] = useState<Blog[]>([]);

    const retrieveBlogs = async () => {
        const blogs = await fetchMediumBlogs();
        setBlogs(blogs?.items.slice(0, 6));
    };

    useEffect(() => {
        retrieveBlogs();
    }, []);

    return (
        <div id={`featured${sectionName}`} className={styles.sectionSeparator}>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12 text-center'>
                        <span className={styles.subtitle}>Blog</span>
                        <h2>Featured Blogs</h2>
                    </div>
                </div>
                <div className={`row ${styles.featuredSection}`}>
                    <Carousel responsive={RESPONSIVE_CAROUSEL_CONFIG} infinite>
                        {blogs?.map((blog) => (
                            <Card
                                key={blog.guid}
                                image={blog.thumbnail}
                                category={blog.categories.join(' | ')}
                                title={blog.title}
                                url={blog.link}
                            />
                        ))}
                    </Carousel>
                </div>
            </div>
        </div>
    );
};
