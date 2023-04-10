import { BlogCard } from '../Card/Card';
import ReactHookImage from '@assets/images/blogs/reactHooks.png';
import VideoCall from '@assets/images/blogs/videocall.jpeg';

export const Section = () => {
    const blogData = [
        {
            image: VideoCall,
            category: 'React | WebEx',
            readTime: '3',
            title: 'Video call using WebEx by Cisco in ReactJS',
            blogUrl:
                'https://medium.com/@neerajvageele451/video-call-using-webex-by-cisco-in-reactjs-b90de2769078',
        },
        {
            image: ReactHookImage,
            category: 'React',
            readTime: '2',
            title: 'How does React useState Hook works?',
            blogUrl:
                'https://medium.com/@neerajvageele451/how-does-react-usestate-hook-works-56288eea8fcf',
        },
        {
            image: ReactHookImage,
            category: 'React',
            readTime: '2',
            title: 'How does React useState Hook works?',
            blogUrl:
                'https://medium.com/@neerajvageele451/how-does-react-usestate-hook-works-56288eea8fcf',
        },
        {
            image: ReactHookImage,
            category: 'React',
            readTime: '2',
            title: 'How does React useState Hook works?',
            blogUrl:
                'https://medium.com/@neerajvageele451/how-does-react-usestate-hook-works-56288eea8fcf',
        },
        {
            image: ReactHookImage,
            category: 'React',
            readTime: '2',
            title: 'How does React useState Hook works?',
            blogUrl:
                'https://medium.com/@neerajvageele451/how-does-react-usestate-hook-works-56288eea8fcf',
        },
    ];

    return (
        <div className='flex justify-center items-center flex-col'>
            <div
                data-aos='fade-up'
                data-aos-duration='500'
                data-aos-delay='100'
                data-aos-once='true'
                className='flex justify-center items-center'>
                <h1 className='text-6xl font-bold'>My Blogs</h1>
            </div>
            <div className='mt-8 px-10 sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] 2xl:max-w-[1320px]'>
                <div className='p-5 grid grid-cols-1 lg:grid-cols-2 gap-4 xl:grid-cols-3'>
                    {blogData.map((data) => (
                        <BlogCard
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
