import Head from 'next/head';
import AOS from 'aos';
import { useEffect } from 'react';
import { Banner, BlogSection, ExperienceSection, Header } from '@components/index';

export default function Home() {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <>
            <Head>
                <title>
                    Senior Software Engineer | Specialist in Web App Development
                    | ReactJS
                </title>
                <meta
                    name='description'
                    content='Senior Software Engineer | Specialist in Web App Development
                    | ReactJS'
                />
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1'
                />
            </Head>
            <Header />
            <main>
                <Banner />
                <ExperienceSection />
                <BlogSection />
            </main>
        </>
    );
}
