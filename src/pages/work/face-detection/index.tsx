import Image from 'next/image';
import * as faceAPI from 'face-api.js';
import { useEffect, useRef, useState } from 'react';
import friendsReunionImg from './images/friendsreunion.jpg';
import styles from './faceDetection.module.scss';
import { Button } from '@components/index';
import { Spinner } from '@assets/images/icons';

export default function FaceDetection() {
    const MODEL_URL = '/models';
    const THRESHOLD = 0.6;

    const originalImgElement = useRef(null);
    const canvasElement = useRef(null);
    const [faceDescriptions, setFaceDescriptions] = useState<any>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        loadModels();
    }, []);

    const loadModels = async () => {
        if (faceAPI) {
            console.log('load loadSsdMobilenetv1Model');
            await faceAPI.loadSsdMobilenetv1Model(MODEL_URL);
            console.log('load loadFaceLandmarkModel');
            await faceAPI.loadFaceLandmarkModel(MODEL_URL);
            console.log('load loadFaceRecognitionModel');
            await faceAPI.loadFaceRecognitionModel(MODEL_URL);
            console.log('load loadFaceExpressionModel');
            await faceAPI.loadFaceExpressionModel(MODEL_URL);

            await mapDimensions();
        }
    };

    const mapDimensions = async () => {
        if (originalImgElement.current && canvasElement.current) {
            console.log('allFaceData loading');
            const allFaceData = await faceAPI
                .detectAllFaces(originalImgElement.current)
                .withFaceLandmarks()
                .withFaceDescriptors()
                .withFaceExpressions();

            console.log('Match dimensions');

            await faceAPI.matchDimensions(
                canvasElement.current,
                originalImgElement.current
            );

            if (originalImgElement.current && canvasElement.current) {
                console.log('fetch results');
                const result = faceAPI.resizeResults(allFaceData, {
                    width: (originalImgElement.current as HTMLImageElement)
                        .width,
                    height: (originalImgElement.current as HTMLImageElement)
                        .height,
                });
                setFaceDescriptions(result);
            }
            setIsLoading(false);
        }
    };

    const detectFace = () => {
        if (originalImgElement.current && canvasElement.current) {
            clearCanvas();
            setIsLoading(true);
            faceAPI.draw.drawDetections(
                canvasElement.current,
                faceDescriptions
            );
            faceAPI.draw.drawFaceExpressions(
                canvasElement.current,
                faceDescriptions
            );

            setIsLoading(false);
        }
    };

    const recognizeFace = async () => {
        setIsLoading(true);
        clearCanvas();
        const labels = [
            'ross',
            'rachel',
            'chandler',
            'monica',
            'phoebe',
            'joey',
        ];

        const labeledFaceDescriptors = await Promise.all(
            labels.map(async (label) => {
                const imgUrl = `images/${label}.jpg`;
                const img = await faceAPI.fetchImage(imgUrl);

                const faceDescription = await faceAPI
                    .detectSingleFace(img)
                    .withFaceLandmarks()
                    .withFaceDescriptor();
                if (!faceDescription) {
                    throw new Error(`no faces detected for ${label}`);
                }

                const faceDescriptors = [faceDescription.descriptor];
                return new faceAPI.LabeledFaceDescriptors(
                    label,
                    faceDescriptors
                );
            })
        );

        loadRecognizedFaces(labeledFaceDescriptors);
    };

    const loadRecognizedFaces = (labeledFaceDescriptors: any) => {
        const faceMatcher = new faceAPI.FaceMatcher(
            labeledFaceDescriptors,
            THRESHOLD
        );

        const results = faceDescriptions.map((fd: any) =>
            faceMatcher.findBestMatch(fd.descriptor)
        );
        results.forEach((bestMatch: any, i: number) => {
            const box = faceDescriptions[i]?.detection.box;
            const text = bestMatch.toString();
            const drawBox = new faceAPI.draw.DrawBox(box, { label: text });
            canvasElement.current && drawBox.draw(canvasElement.current);
        });

        setIsLoading(false);
    };

    const clearCanvas = () => {
        if (canvasElement.current) {
            const canvasEle = (canvasElement.current as any).getContext('2d');
            canvasEle?.reset();
        }
    };

    return (
        <>
            <div className={styles.container}>
                {isLoading && (
                    <div className={styles.loader}>
                        <Image src={Spinner} alt='loader' />
                    </div>
                )}
                <Image
                    src={friendsReunionImg}
                    ref={originalImgElement}
                    alt='friendsReunionImg'
                />
                <canvas
                    ref={canvasElement}
                    className={styles.canvasOverlay}></canvas>

                <Button variant='primary' onClick={() => recognizeFace()}>
                    Recognition Face
                </Button>
                <Button variant='primary' onClick={() => detectFace()}>
                    Recognition Emotion
                </Button>
            </div>
        </>
    );
}
