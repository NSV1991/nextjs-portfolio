import { StaticImageData } from 'next/image';

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

export type ReviewType = {
    image: StaticImageData;
    text: string;
    name: string;
    designation: string;
    company: string;
};

export type Certificate = {
    id: number | string;
    image: StaticImageData | string;
    issuedBy: string;
    title: string;
    url: string;
};
