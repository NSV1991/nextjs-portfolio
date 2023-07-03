import { FeaturedSection } from '@components/Section/FeaturedSection/FeaturedSection';
import { Banner } from '@components/index';

export default function Home() {
    return (
        <>
            <Banner />
            <FeaturedSection sectionName='Blogs' />
        </>
    );
}
