import { Layout } from '@components/index';
import '@styles/globals.scss';

import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { METADATA } from '../constants';

export default function App({ Component, pageProps }: AppProps) {
    const router = useRouter();

    return (
        <>
            <Head>
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1.0'
                />
                <title>
                    {METADATA?.[router.route]?.title ?? ''} Specialist in Web
                    App Development | ReactJS | NodeJS | NextJS | JavaScript |
                    TypeScript | NestJS | ExpressJS | AWS services | Storybook |
                    Firebase | CISCO WebEx | Redux Thunk | Redux Saga | Jest |
                    Mocha | RTL - React Testing Library | Enzyme | Git |
                    Bitbucket | SVN | Jenkins | AWS Amplify | Python | Sonar |
                    ES-lint | Docker
                </title>
                <meta
                    name='description'
                    content={METADATA?.[router.route]?.description}
                />
                <meta
                    name='keywords'
                    content={`${
                        METADATA[router.route]?.keywords
                    } Senior Software Engineer, Web App Development, ReactJS, Ahmedabad, Gujarat, India, JavaScript, TypeScript, NodeJS, NextJS, NestJS, ExpressJS, AWS services, Neeraj, Sarang, Vageele, Portfolio, Software Development, HTML, CSS, Project Management, Jira, Bitbucket, Git, Figma, AWS, Web Development, technology, Full Stack Development, Backend Development, Frontend Development, API Development, Database Design and Optimization, Software Architecture, Problem Solving, Data Structures and Algorithms`}
                />
                <meta name='author' content='Neeraj Sarang Vageele' />
                <meta
                    name='google-site-verification'
                    content='RRjJDBI2m9UiysYnZLYsSP-LMBXbD3XlPHrSsJrTm1E'
                />

                <meta
                    property='og:title'
                    content={`${
                        METADATA?.[router.route]?.title ?? ''
                    } Specialist in Web App Development | ReactJS | NodeJS`}
                />
                <meta
                    property='og:description'
                    content={METADATA?.[router.route]?.description}
                />
                <meta
                    property='og:image'
                    content='https://neerajvageele.com/logo-icon.svg'
                />
                <meta
                    property='og:url'
                    content={`https://neerajvageele.com${router.route}`}
                />
                <meta property='og:type' content='website' />
                <meta
                    property='og:site_name'
                    content='https://neerajvageele.com'
                />
                <meta property='og:locale' content='en_US' />
            </Head>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    );
}
