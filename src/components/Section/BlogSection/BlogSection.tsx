import { BlogCard } from '../../Card/Card';
import styles from './BlogSection.module.scss';
import { useEffect, useState } from 'react';

export async function getBlogs() {
    const MEDIUM_API =
        'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@neerajvageele451';

    return await (await fetch(MEDIUM_API)).json();
}

type Blog = {
    author: string;
    categories: Array<string>;
    content: string;
    description: string;
    guid: string;
    link: string;
    pubDate: string;
    thumbnail: string;
    title: string;
};

export const BlogSection = () => {
    const [blogs, setBlogs] = useState<Blog[]>();

    const fetchBlogs = async () => {
        const data = await getBlogs();
        setBlogs(data.items);
    };

    useEffect(() => {
        fetchBlogs();
    }, []);

    return (
        <div className={styles.sectionSeparator}>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12 text-center'>
                        <span className={styles.subtitle}>Blogs</span>
                        <h2 className='text-6xl font-bold'>My Blogs</h2>
                    </div>
                </div>
                <div className={`row ${styles.blogContainer}`}>
                    {blogs?.map((blog) => (
                        <BlogCard
                            key={blog.guid}
                            image={blog.thumbnail}
                            category={blog.categories.join(' | ')}
                            title={blog.title}
                            blogUrl={blog.link}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};
