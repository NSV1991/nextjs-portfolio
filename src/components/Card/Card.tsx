import Image, { StaticImageData } from 'next/image';
import { FunctionComponent } from 'react';

type BlogCardProps = {
    image: StaticImageData | string;
    category: string;
    readTime: string;
    title: string;
    blogUrl: string;
};

export const BlogCard: FunctionComponent<BlogCardProps> = ({
    image,
    category,
    readTime,
    title,
    blogUrl,
}: BlogCardProps) => {
    return (
        <div
            data-aos='fade-up'
            data-aos-duration='500'
            data-aos-delay='100'
            data-aos-once='true'
            className='cursor-pointer'>
            <div className='rounded-xl p-6 text-left shadow-slate-300 shadow-2xl bg-gradient-to-br from-gray-200 to-white'>
                <div>
                    <div>
                        <Image
                            className='rounded-md w-full object-cover'
                            src={image}
                            alt='Personal Portfolio Images'
                        />
                    </div>
                    <div className='pt-3'>
                        <div className='flex justify-between pb-3'>
                            <div className='flex flex-wrap items-center text-sky-500 uppercase tracking-[1px] font-medium text-xs'>
                                {category}
                            </div>
                            <div>
                                <span className='font-medium text-sm'>
                                    <i className='mr-2 bi bi-clock'></i>
                                    {readTime} min read
                                </span>
                            </div>
                        </div>
                        <h4 className='text-4xl font-bold leading-tight m-0 break-words hover:top-1 opacity-100'>
                            <a href={blogUrl}>
                                {title}
                                <i className='bi bi-arrow-up-right text-[0] opacity-0 relative top-3 duration-[0.4s]'></i>
                            </a>
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    );
};
