import { Layout } from '@components/index';
import '@styles/globals.scss';

import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }: AppProps) {
    const router = useRouter();
    const metadata: {
        [key: string]: {
            title: string;
            description?: string;
            keywords?: string;
        };
    } = {
        '/': {
            title: 'Senior Software Engineer |',
            description:
                'Browse through my portfolio of work as a Senior Software Engineer specializing in Web App Development. With about 6 years of experience, I have expertise in ReactJS, JavaScript, TypeScript, NodeJS, NextJS, NestJS, ExpressJS, and AWS services.',
            keywords:
                'Senior Software Engineer, Web App Development, ReactJS, Ahmedabad, Gujarat, India, JavaScript, TypeScript, NodeJS, NextJS, NestJS, ExpressJS, AWS services',
        },
        '/experience': {
            title: 'Experience - Senior Software Engineer |',
            description:
                'Explore my professional experience working on diverse projects in various domains. I have successfully delivered projects in domains such as E-commerce, E-signature solutions, Car dealer portals, Online Education, Betting web Apps, and Health care. Discover how I have contributed to these industries by leveraging my skills in web development, software engineering, and other relevant technologies.',
            keywords:
                'Experience, Portfolio, E-commerce, E-signature solution, Car dealer portal, Online Education, Betting web App, Health care,Senior Software Engineer, Web App Development, ReactJS, Ahmedabad, Gujarat, India, JavaScript, TypeScript, NodeJS, NextJS, NestJS, ExpressJS, AWS services',
        },
        '/education': {
            title: 'Education - Senior Software Engineer |',
            description:
                "Learn about my educational background and achievements. I completed my Bachelor's of Engineering in Computer Engineering in 2017. During my studies, I gained comprehensive knowledge in various areas of computer science and developed a strong foundation in programming, algorithms, and software development.",
            keywords:
                "Education, Portfolio, Bachelor's Degree, Engineering, Computer Science, Programming, Algorithms, Software Development",
        },
        '/skills': {
            title: 'Skills - Senior Software Engineer |',
            description:
                'Discover my skills and expertise in web development, project management, and tools. I specialize in React, Node, JavaScript, NextJS, HTML, CSS, and have a strong proficiency in these technologies. Additionally, I am experienced in using project management tools like Jira, Bitbucket, Git, design tools like Figma, and cloud services like AWS.',
            keywords:
                'Skills, Portfolio, Web Development, React, Node, JavaScript, NextJS, HTML, CSS, Project Management, Jira, Bitbucket, Git, Figma, AWS',
        },
        '/blogs': {
            title: 'Blogs - Senior Software Engineer |',
            description:
                'Explore my collection of insightful and informative blog posts on various topics related to web development, software engineering, ReactJS, TypeScript, and more. As a Senior Software Engineer, I share my knowledge and experiences through these blogs, providing valuable insights and solutions to common challenges in the industry.',
            keywords:
                'Blogs, Articles, Portfolio, Senior Software Engineer, Web Development, Software Engineering, ReactJS, TypeScript, NextJS, NodeJS',
        },
        '/work': {
            title: 'Work - Senior Software Engineer |',
            description:
                'Browse through my portfolio of work as a Senior Software Engineer specializing in Web App Development. With about 6 years of experience, I have expertise in ReactJS, JavaScript, TypeScript, NodeJS, NextJS, NestJS, ExpressJS, and AWS services.',
            keywords:
                'Work, Portfolio, Senior Software Engineer, Web App Development, ReactJS, JavaScript, TypeScript, NodeJS, NextJS, NestJS, ExpressJS, AWS services',
        },
        '/work/object-detection': {
            title: 'Work - Object Detection with TensorFlow |',
            description:
                'Explore my work on implementing object detection using TensorFlow and TypeScript. As a Senior Software Engineer specializing in Web App Development, I have leveraged the power of TensorFlow to develop advanced computer vision models for object detection tasks. Discover how I utilize TensorFlow, TypeScript, ReactJS, and other technologies to create efficient and accurate object detection solutions.',
            keywords:
                'Work, Portfolio, Object Detection, TensorFlow, TypeScript, Senior Software Engineer, Web App Development, ReactJS, NextJS',
        },
        '/work/face-detection': {
            title: 'Work - Face Detection with Face API |',
            description:
                'Explore my work on implementing face detection using Face API and TypeScript. As a Senior Software Engineer specializing in Web App Development, I have leveraged the power of Face API to develop advanced computer vision models for object detection tasks. Discover how I utilize TensorFlow, TypeScript, ReactJS, and other technologies to create efficient and accurate object detection solutions.',
            keywords:
                'Work, Portfolio, Face Detection, Face API, TypeScript, Senior Software Engineer, Web App Development, ReactJS, NextJS',
        },
        '/work/face-recognition': {
            title: 'Work - Face Recognition with Face API |',
            description:
                'Enhance your face recognition capabilities with the powerful Face API. Unlock advanced facial analysis and identification features for improved security and personalized user experiences. Learn more at neerajvageele.com',
            keywords:
                'Work, Portfolio, Face Recognition, Face API, facial analysis, facial identification, computer vision, biometric technology, TypeScript, Senior Software Engineer, Web App Development, ReactJS, NextJS',
        },
    };

    return (
        <>
            <Head>
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1.0'
                />
                <title>
                    {metadata?.[router.route]?.title ?? ''} | Specialist in Web
                    App Development | ReactJS | NodeJS
                </title>
                <meta
                    name='description'
                    content={metadata?.[router.route]?.description}
                />
                <meta
                    name='keywords'
                    content={metadata[router.route]?.keywords}
                />
                <meta name='author' content='Neeraj Sarang Vageele' />
                <meta
                    name='google-site-verification'
                    content='RRjJDBI2m9UiysYnZLYsSP-LMBXbD3XlPHrSsJrTm1E'
                />
            </Head>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    );
}
