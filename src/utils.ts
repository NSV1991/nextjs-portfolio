import { useEffect, useState } from 'react';
import { MEDIUM_API } from './constants';

const useIsMobileView = () => {
    const [isMobileView, setIsMobileView] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            const isMobile = window.innerWidth < 821; // Set your desired mobile width breakpoint here
            setIsMobileView(isMobile);
        };

        handleResize(); // Call the function once initially

        // Attach the event listener for window resize
        window.addEventListener('resize', handleResize);

        // Clean up the event listener on unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return isMobileView;
};

const fetchMediumBlogs = async () => {
    const blogs = await (await fetch(MEDIUM_API)).json();
    return blogs;
};

export { fetchMediumBlogs, useIsMobileView };
