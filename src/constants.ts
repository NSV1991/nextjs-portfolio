import { Certificate, ReviewType } from './commonTypes';

import AffanJilani from '@assets/images/review/affanJilani.webp';
import AnkushChavan from '@assets/images/review/ankushChavan.webp';
import ElementImage from '@assets/images/work/element.webp';
import FaceDetectionImage from '@assets/images/work/faceDetection.webp';
import FaceRecognitionImage from '@assets/images/work/faceRecognition.webp';
import JavaScriptBasicCertificate from '@assets/images/certificates/javaScriptBasicCertificate.webp';
import JavaScriptIntermediateCertificate from '@assets/images/certificates/javaScriptIntermediateCertificate.webp';
import KrunalShah from '@assets/images/review/krunalShah.webp';
import ObjectDetectionImage from '@assets/images/work/objectDetection.webp';
import ReactBasicCertificate from '@assets/images/certificates/reactBasicCertificate.webp';
import FrontendDevelopmentCertificate from '@assets/images/certificates/introToFrontendDevelopment.webp';

export const MODEL_URL = '/models';
export const FACE_MATCHER_THRESHOLD = 0.6;

export const MEDIUM_API =
    'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@neerajvageele451';

export const VALID_IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/webp'];

export const METADATA: {
    [key: string]: {
        title: string;
        description?: string;
        keywords?: string;
    };
} = {
    '/': {
        title: 'Senior Software Engineer | Neeraj Sarang Vageele |',
        description:
            'Hi I`m Neeraj Vageele. Browse through my portfolio of work as a Senior Software Engineer specializing in Web App Development. With about 6 years of experience, I have expertise in ReactJS, JavaScript, TypeScript, NodeJS, NextJS, NestJS, ExpressJS, and AWS services.',
        keywords: 'Technical Leadership,',
    },
    '/experience': {
        title: 'Experience - Neeraj Sarang Vageele | Senior Software Engineer |',
        description:
            'Hi I`m Neeraj Vageele. I have about 6 years of professional experience working on diverse projects in various domains. I have successfully delivered projects in domains such as E-commerce, E-signature solutions, Car dealer portals, Online Education, Betting web Apps, and Health care. Discover how I have contributed to these industries by leveraging my skills in web development, software engineering, and other relevant technologies.',
        keywords:
            'Experience, Portfolio, E-commerce, E-signature solution, Car dealer portal, Online Education, Betting web App, Health care, Technical Leadership,',
    },
    '/education': {
        title: 'Education - Neeraj Sarang Vageele | Senior Software Engineer |',
        description:
            "Hi I`m Neeraj Vageele. Learn about my educational background and achievements. I completed my Bachelor's of Engineering in Computer Engineering in 2017. During my studies, I gained comprehensive knowledge in various areas of computer science and developed a strong foundation in programming, algorithms, and software development.",
        keywords:
            "Education, Portfolio, Bachelor's Degree, Engineering, Computer Science, Programming, Algorithms,",
    },
    '/skill': {
        title: 'Skill - Neeraj Sarang Vageele | Senior Software Engineer |',
        description:
            'Hi I`m Neeraj Vageele. Discover my skills and expertise in web development, project management, and tools. I specialize in React, Node, JavaScript, NextJS, HTML, CSS, and have a strong proficiency in these technologies. Additionally, I am experienced in using project management tools like Jira, Bitbucket, Git, design tools like Figma, and cloud services like AWS.',
        keywords: 'skill, Technical Leadership,',
    },
    '/blog': {
        title: 'Blog - Neeraj Sarang Vageele | Senior Software Engineer |',
        description:
            'Hi I`m Neeraj Vageele. Explore my collection of insightful and informative blog posts on various topics related to web development, software engineering, ReactJS, TypeScript, and more. As a Senior Software Engineer, I share my knowledge and experiences through these blogs, providing valuable insights and solutions to common challenges in the industry.',
        keywords:
            'blogs, articles, deep insights, learn, latest updates, blog,',
    },
    '/work': {
        title: 'Work - Neeraj Sarang Vageele | Senior Software Engineer |',
        description:
            'Hi I`m Neeraj Vageele. Browse through my portfolio of work as a Senior Software Engineer specializing in Web App Development. With about 6 years of experience, I have expertise in ReactJS, JavaScript, TypeScript, NodeJS, NextJS, NestJS, ExpressJS, and AWS services.',
        keywords:
            'Work, Projects, Work Samples, Code Quality, Responsive Design, User Experience (UX), Test-Driven Development (TDD), Innovation,',
    },
    '/work/object-detection': {
        title: 'Work - Neeraj Sarang Vageele | Object Detection with TensorFlow |',
        description:
            'Hello I am Neeraj Vageele, explore my work on implementing object detection using TensorFlow and TypeScript. As a Senior Software Engineer specializing in Web App Development, I have leveraged the power of TensorFlow to develop advanced computer vision models for object detection tasks. Discover how I utilize TensorFlow, TypeScript, ReactJS, and other technologies to create efficient and accurate object detection solutions.',
        keywords:
            'Work, Portfolio, Object Detection, TensorFlow, Computer Vision, Deep Learning, Convolutional Neural Networks (CNN), Image Processing, Object Tracking, Image Classification, Feature Extraction, Model Training, Data Annotation, Data Preprocessing,Real-time Object Detection,',
    },
    '/work/face-detection': {
        title: 'Work - Face Detection with Face API |',
        description:
            'Hi I`m Neeraj Vageele. Explore my work on implementing face detection using Face API and TypeScript. As a Senior Software Engineer specializing in Web App Development, I have leveraged the power of Face API to develop advanced computer vision models for object detection tasks. Discover how I utilize TensorFlow, TypeScript, ReactJS, and other technologies to create efficient and accurate object detection solutions.',
        keywords:
            'Work, Portfolio, Face Detection, Face API, Face Detection, Computer Vision, Facial Recognition, Deep Learning, Convolutional Neural Networks (CNN), Image Processing, Face Localization, Facial Landmark Detection, Emotion Recognition, Age Estimation, Gender Classification, Face Verification, Face Tracking, Biometrics, Data Annotation,Facial Expression Analysis, Face Mask Detection, Facial Attribute Analysis,Facial Makeup Transfer, Facial Feature Extraction, Medical Imaging, Security Systems, Human-Computer Interaction,',
    },
    '/work/face-recognition': {
        title: 'Work - Face Recognition with Face API |',
        description:
            'Hi I`m Neeraj Vageele. Enhance your face recognition capabilities with the powerful Face API. Unlock advanced facial analysis and identification features for improved security and personalized user experiences. Learn more at neerajvageele.com',
        keywords:
            'Work, Portfolio, Face Recognition, Face API, facial analysis, facial identification, computer vision, biometric technology, Computer Vision, Deep Learning, Convolutional Neural Networks (CNN), Facial Biometrics, Face Identification, Face Verification, Facial Landmark Detection, Face Matching, Face Embeddings, Facial Feature Extraction, Image Processing, OpenCV, TensorFlow, PyTorch, Dlib, Face Detection, Face Tracking, Age Estimation, Gender Classification, Emotion Recognition, Face Clustering, Facial Expression Analysis, Facial Attribute Analysis, Face Mask Recognition, Real-time Face Recognition, Video Analysis, Augmented Reality (AR), Privacy Protection, Security Systems, Access Control, Surveillance Systems, Biometric Authentication, Facial Re-identification, Forensic Facial Recognition, Medical Imaging, Human-Computer Interaction,',
    },
};

export const RESPONSIVE_CAROUSEL_CONFIG = {
    superLargeDesktop: {
        breakpoint: { max: 2000, min: 1800 },
        items: 5,
    },
    desktop: {
        breakpoint: { max: 1800, min: 1400 },
        items: 4,
    },
    smallDesktop: {
        breakpoint: { max: 1400, min: 1024 },
        items: 3,
    },
    tablet: {
        breakpoint: { max: 1024, min: 550 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 550, min: 0 },
        items: 1,
    },
};

export const WORK_LIST = [
    {
        title: 'Face recognition using face-api.js',
        category: 'Personal',
        image: FaceRecognitionImage.src,
        link: 'face-recognition',
    },
    {
        title: 'Detect face and emotion recognition using face-api.js',
        category: 'Personal',
        image: FaceDetectionImage.src,
        link: 'face-detection',
    },
    {
        title: 'Detect Object from Image using TensorFlow',
        category: 'Personal',
        image: ObjectDetectionImage.src,
        link: 'object-detection',
    },
    {
        title: 'Element IO | Secure collaboration and messaging',
        category: 'Open Source Contribution',
        image: ElementImage.src,
        link: 'https://app.element.io/',
        absoluteLink: true,
    },
];

export const REVIEWS: ReviewType[] = [
    {
        image: AnkushChavan,
        text: `<p>Throughout our time working together, Neeraj demonstrated an outstanding ability to grasp complex concepts swiftly and tackle challenges with remarkable problem-solving skills. His commitment to delivering high-quality work, attention to detail, and enthusiasm for taking on new responsibilities made a significant impact on our team's success.

        <p>Neeraj consistently exhibited a positive attitude and was a valuable team player, always willing to lend a hand and share his expertise to help others succeed. His excellent communication skills ensured that everyone on the team was well-informed and on the same page, fostering a collaborative and efficient work environment.
        
        <p>I was particularly impressed by Neeraj's ability to remain composed under pressure and handle difficult situations with grace and maturity. His ability to maintain a clear focus on the end goal and execute tasks efficiently while navigating challenges was truly commendable.
        
        <p>Furthermore, Neeraj's passion for professional growth was evident in his proactive approach to learning and development. He is constantly seeking opportunities to expand his skill set and knowledge, which not only benefitted him personally but also added value to the entire team.
        
        <p>Neeraj Vageele is an exceptional individual who not only excels in his technical abilities but also possesses the interpersonal skills to build strong relationships with colleagues and clients alike. He positive influence on the team culture and dedication to achieving excellence make them an asset to any organization.
        
        <p>I have no doubt that Neeraj will continue to achieve great success in his future endeavors. It is without reservation that I highly recommend Neeraj Vageele to any prospective employer or collaborator. He will undoubtedly be a valuable addition to any team.`,
        name: 'Ankush Chavan',
        designation: 'Senior Engineer',
        company: 'Movate',
    },
    {
        image: KrunalShah,
        text: `<p>Neeraj, a highly skilled MERN stack developer whom I have had the privilege of working with for the past five years. He is an exceptional problem solver with a remarkable ability to tackle complex challenges head-on. His dedication to finding innovative solutions and his meticulous attention to detail has greatly contributed to the success of our projects. Neeraj possesses a deep understanding of the MERN stack, and his technical expertise is truly impressive.
        
        <p>What sets Neeraj apart is not just his technical proficiency but also his exceptional leadership and teamwork skills. He has a natural ability to inspire and guide his team, creating an environment that fosters collaboration and encourages the best ideas to flourish. Neeraj's effective communication skills ensure that everyone on the team feels heard and valued, leading to improved productivity and overall project success.
        
        <p>I have always been impressed by Neeraj's professionalism and his ability to handle challenging situations with calm and composure. He consistently demonstrates a high level of integrity, always striving to deliver quality work that exceeds expectations. Neeraj's commitment to continuous learning and staying up-to-date with the latest industry trends makes him a valuable asset to any organization.
        
        <p>In summary, Neeraj is an exceptional MERN stack developer with outstanding problem-solving skills, keen attention to detail, and strong leadership abilities. I have no doubt that he will continue to excel in his career and make significant contributions to any team or project he becomes a part of. I wholeheartedly recommend Neeraj for any opportunity that requires a highly skilled and dedicated professional.`,
        name: 'Krunal Shah',
        designation: 'CTO',
        company: 'Third Rock Techkno',
    },
    {
        image: AffanJilani,
        text: `<p>I had the pleasure of directly working with Neeraj when I was running a tech start up. His technical proficiency and extensive knowledge of web development was felt immediately throughout the company, as he single handedly increased the rate at which we were developing features. His attention to detail, his knowledge of best practices, as well as his resourcefulness set the tone for the entire development team.

        <p>Beyond his technical proficiency, his ability to communicate complex design decisions and break down use cases were an additional asset that enabled development to be cohesive and organic. Furthermore, his amazing and personable attitude made working with him a treat.
        
        ,p>Any company would be extremely fortunate to have Neeraj on their team.`,
        name: 'Affan Jilani',
        designation: 'Co-Founder',
        company: 'Joyn',
    },
];

export const SKILLS = [
    {
        id: 1,
        skill: 'React',
        rating: '90%',
    },
    {
        id: 2,
        skill: 'Node',
        rating: '75%',
    },
    {
        id: 3,
        skill: 'JavaScript',
        rating: '70%',
    },
    {
        id: 4,
        skill: 'NextJS',
        rating: '70%',
    },
    {
        id: 5,
        skill: 'HTML',
        rating: '70%',
    },
    {
        id: 6,
        skill: 'CSS',
        rating: '60%',
    },
];

export const PROJECT_TOOLS = [
    {
        id: 11,
        skill: 'Jira',
        rating: '90%',
    },
    {
        id: 12,
        skill: 'Bitbucket',
        rating: '95%',
    },
    {
        id: 13,
        skill: 'Git',
        rating: '95%',
    },
    {
        id: 14,
        skill: 'Figma',
        rating: '70%',
    },
    {
        id: 15,
        skill: 'AWS',
        rating: '70%',
    },
];

export const CERTIFICATES: Array<Certificate> = [
    {
        id: 'SRPS34ABTGXM',
        image: FrontendDevelopmentCertificate,
        issuedBy: 'Meta',
        title: 'Introduction to Front-End Development',
        url: 'https://www.coursera.org/account/accomplishments/certificate/SRPS34ABTGXM',
    },
    {
        id: '1a60eb81e197',
        image: ReactBasicCertificate,
        issuedBy: 'HackerRank',
        title: 'React (Basic)',
        url: 'https://www.hackerrank.com/certificates/1a60eb81e197',
    },
    {
        id: '472eb4d222cb',
        image: JavaScriptIntermediateCertificate,
        issuedBy: 'HackerRank',
        title: 'JavaScript (Intermediate)',
        url: 'https://www.hackerrank.com/certificates/472eb4d222cb',
    },
    {
        id: '97c7b57bdbf2',
        image: JavaScriptBasicCertificate,
        issuedBy: 'HackerRank',
        title: 'JavaScript (Basic)',
        url: 'https://www.hackerrank.com/certificates/97c7b57bdbf2',
    },
];
