export default async function sitemap() {
    const routes = [
        '',
        '/experience',
        '/blogs',
        '/skills',
        '/education',
        '/work',
        '/work/object-detection',
    ].map((route) => ({
        url: `https://neerajvageele.com${route}`,
        lastModified: new Date().toISOString(),
    }));

    return [...routes];
}
