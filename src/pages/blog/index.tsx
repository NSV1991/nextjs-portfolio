import { Card } from '@components/index';
import styles from './BlogSection.module.scss';
import { fetchMediumBlogs } from '../../utils';
import { Blog } from '../../commonTypes';

export const getServerSideProps = async () => {
    const blogs = await fetchMediumBlogs();

    return { props: { blogs: blogs.items } };
};

export default function Blogs({ blogs }: { blogs: Blog[] }) {
    return (
        <div id='blog' className={styles.sectionSeparator}>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12 text-center'>
                        <span className={styles.subtitle}>Blog</span>
                        <h2 className='text-6xl font-bold'>
                            Discover Blog Insights
                        </h2>
                    </div>
                </div>
                <div className={`row ${styles.blogContainer}`}>
                    {blogs?.map((blog) => (
                        <Card
                            key={blog.guid}
                            image={blog.thumbnail}
                            category={blog.categories.join(' | ')}
                            title={blog.title}
                            url={blog.link}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
