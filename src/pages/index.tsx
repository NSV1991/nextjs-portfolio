import { Banner, FeaturedSection, Review } from '@components/index';
import { Blog, WorkDetails } from '../commonTypes';
import { fetchMediumBlogs } from '../utils';
import { useEffect, useState } from 'react';
import { WORK_LIST } from '../constants';

export const getStaticProps = () => {
    return {
        props: {
            workList: WORK_LIST.slice(0, 6).map((work, index) => ({
                key: `featured-${work.title}-${index}`,
                image: work.image,
                category: work.category,
                title: work.title,
                link: work?.absoluteLink ? work.link : `work/${work.link}`,
                openInSamePage: true,
            })),
        },
    };
};

type HomeProps = {
    workList: Array<WorkDetails[]>;
};

export default function Home() {
    const [blogs, setBlogs] = useState<Blog[]>([]);

    const retrieveBlogs = async () => {
        const blogs = await fetchMediumBlogs();

        const formattedData = blogs.items.slice(0, 6).map((blog: Blog) => ({
            key: blog.guid,
            image: blog.description.match(/<img[^>]+src="([^">]+)"/)?.[1] || '',
            category: blog.categories.join(' | '),
            title: blog.title,
            link: blog.link,
        }));

        setBlogs(formattedData);
    };

    useEffect(() => {
        retrieveBlogs();
    }, []);
    return (
        <>
            <Banner />
            <Review />
            <FeaturedSection
                sectionName='Blog'
                data={blogs}
                title='Featured Blogs'
            />
        </>
    );
}
