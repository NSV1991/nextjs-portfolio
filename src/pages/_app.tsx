import { Layout } from '@components/index';
import '@styles/globals.scss';
import { Metadata } from 'next';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }: AppProps) {
    const router = useRouter();

    const metadata: {
        [key: string]: {
            title: string;
        };
    } = {
        '/': {
            title: 'Senior Software Engineer',
        },
        '/experience': {
            title: 'Experience',
        },
        '/education': {
            title: 'Education',
        },
        '/skills': {
            title: 'Skills',
        },
        '/blogs': {
            title: 'Blogs',
        },
        '/work': {
            title: 'Work',
        },
        '/work/object-detection': {
            title: 'Object Detection',
        },
    };

    return (
        <>
            <Head>
                <title>
                    {metadata[router.route].title} | Specialist in Web App
                    Development | ReactJS | NodeJS
                </title>
                <meta
                    name='description'
                    content='I am a Senior Software Engineer specializing in Web App Development with expertise in ReactJS. Located in Ahmedabad, Gujarat, India with about 6 years of experience. Skills include JavaScript, TypeScript, ReactJS, NodeJS, NextJS, NestJS, ExpressJS, and AWS services.'
                />
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1'
                />
                <meta
                    name='keywords'
                    content='Senior Software Engineer, Web App Development, ReactJS, Ahmedabad, Gujarat, India, JavaScript, TypeScript, NodeJS, NextJS, NestJS, ExpressJS, AWS services'
                />
                <meta name='author' content='Neeraj Sarang Vageele' />
            </Head>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    );
}
