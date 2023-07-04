export type Blog = {
    author: string;
    categories: Array<string>;
    content: string;
    description: string;
    guid: string;
    link: string;
    pubDate: string;
    thumbnail: string;
    title: string;
};

export type WorkDetails = {
    title: string;
    category: string;
    image: string;
    link: string;
    absoluteLink?: boolean;
};

export type WorkProps = {
    workList: WorkDetails[];
};
