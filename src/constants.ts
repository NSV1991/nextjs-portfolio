import ObjectDetectionImage from '@assets/images/work/objectDetection.webp';
import FaceDetectionImage from '@assets/images/work/faceDetection.webp';
import FaceRecognitionImage from '@assets/images/work/faceRecognition.webp';
import ElementImage from '@assets/images/work/element.webp';

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
