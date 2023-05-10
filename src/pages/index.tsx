import Head from 'next/head';
import {
    Banner,
    BlogSection,
    EducationSection,
    ExperienceSection,
    Header,
    SkillSection,
} from '@components/index';

export default function Home() {
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
                <EducationSection />
                <SkillSection />
                <BlogSection />
            </main>
        </>
    );
}
