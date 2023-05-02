import { BlogCard } from '../../Card/Card';
import ReactHookImage from '@assets/images/blogs/reactHooks.png';
import VideoCall from '@assets/images/blogs/videocall.jpeg';
import styles from './BlogSection.module.scss';

export const BlogSection = () => {
    const blogData = [
        {
            id: 1,
            image: VideoCall,
            category: 'React | WebEx',
            readTime: '3',
            title: 'Video call using WebEx by Cisco in ReactJS',
            blogUrl:
                'https://medium.com/@neerajvageele451/video-call-using-webex-by-cisco-in-reactjs-b90de2769078',
        },
        {
            id: 2,
            image: ReactHookImage,
            category: 'React',
            readTime: '2',
            title: 'How does React useState Hook works?',
            blogUrl:
                'https://medium.com/@neerajvageele451/how-does-react-usestate-hook-works-56288eea8fcf',
        },
        {
            id: 3,
            image: ReactHookImage,
            category: 'React',
            readTime: '2',
            title: 'How does React useState Hook works?',
            blogUrl:
                'https://medium.com/@neerajvageele451/how-does-react-usestate-hook-works-56288eea8fcf',
        },
        {
            id: 4,
            image: ReactHookImage,
            category: 'React',
            readTime: '2',
            title: 'How does React useState Hook works?',
            blogUrl:
                'https://medium.com/@neerajvageele451/how-does-react-usestate-hook-works-56288eea8fcf',
        },
        {
            id: 5,
            image: ReactHookImage,
            category: 'React',
            readTime: '2',
            title: 'How does React useState Hook works?',
            blogUrl:
                'https://medium.com/@neerajvageele451/how-does-react-usestate-hook-works-56288eea8fcf',
        },
    ];

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
                    {blogData.map((data) => (
                        <BlogCard
                            key={data.id}
                            image={data.image}
                            category={data.category}
                            readTime={data.readTime}
                            title={data.title}
                            blogUrl={data.blogUrl}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};
