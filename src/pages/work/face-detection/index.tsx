import { Button, Loader } from '@components/index';
import { useEffect, useRef, useState } from 'react';
import * as faceAPI from 'face-api.js';
import Image from 'next/image';
import styles from './faceDetection.module.scss';

const FaceDetection = () => {
    const MODEL_URL = '/models';
    const THRESHOLD = 0.6;

    const [faceDescriptions, setFaceDescriptions] = useState<any>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [uploadedImage, setUploadedImage] = useState<string | null>(null);
    const [noFaceDetected, setNoFaceDetected] = useState(false);
    const [loaderMsg, setLoaderMsg] = useState('');

    const canvasElement = useRef(null);
    const originalImgElement = useRef(null);

    useEffect(() => {
        loadModels();
    }, []);

    useEffect(() => {
        if (uploadedImage) {
            mapDimensions();
        }
    }, [uploadedImage]);

    const loadModels = async () => {
        if (faceAPI) {
            setLoaderMsg(
                'Please wait while SSD Mobile net model is loading...'
            );
            await faceAPI.loadSsdMobilenetv1Model(MODEL_URL);
            setLoaderMsg('Please wait while face landmark model is loading...');
            await faceAPI.loadFaceLandmarkModel(MODEL_URL);
            setLoaderMsg(
                'Please wait while face expression model is loading...'
            );
            await faceAPI.loadFaceRecognitionModel(MODEL_URL);
            await faceAPI.loadFaceExpressionModel(MODEL_URL);
            setIsLoading(false);
        }
    };

    const mapDimensions = async () => {
        if (originalImgElement.current && canvasElement.current) {
            setNoFaceDetected(false);
            setIsLoading(true);
            const allFaceData = await faceAPI
                .detectAllFaces(originalImgElement.current)
                .withFaceLandmarks()
                .withFaceDescriptors()
                .withFaceExpressions();

            setLoaderMsg('Please wait while canvas dimensions are matched...');
            await faceAPI.matchDimensions(
                canvasElement.current,
                originalImgElement.current
            );

            if (originalImgElement.current && canvasElement.current) {
                const results = await faceAPI.resizeResults(allFaceData, {
                    width: (originalImgElement.current as HTMLImageElement)
                        .width,
                    height: (originalImgElement.current as HTMLImageElement)
                        .height,
                });
                setFaceDescriptions(results);
                results.length === 0 && setNoFaceDetected(true);
            }
            setIsLoading(false);
        }
    };

    const detectFace = () => {
        if (
            originalImgElement.current &&
            canvasElement.current &&
            faceDescriptions.length > 0
        ) {
            clearCanvas();
            setIsLoading(true);

            setLoaderMsg('Please wait while detecting faces...');
            faceAPI.draw.drawDetections(
                canvasElement.current,
                faceDescriptions
            );

            setLoaderMsg('Please wait while detecting face expressions...');
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

    const setImage = (event: any) => {
        if (event?.target?.files && event?.target?.files[0]) {
            const image = event.target.files[0];
            clearCanvas();
            setUploadedImage(URL.createObjectURL(image));
        }
    };

    return (
        <>
            <Loader loading={isLoading} text={loaderMsg} />
            <div className={`container ${styles.container}`}>
                <div className={styles.imageSection}>
                    <div className={styles.previewArea}>
                        {uploadedImage && (
                            <div>
                                <Image
                                    ref={originalImgElement}
                                    src={uploadedImage}
                                    alt='sample image'
                                    width={500}
                                    height={500}
                                />
                                <canvas
                                    ref={canvasElement}
                                    className={styles.canvas}
                                    width={500}
                                    height={500}
                                />
                            </div>
                        )}
                    </div>
                    {noFaceDetected && (
                        <div className='alert alert-danger' role='alert'>
                            No faces detected!
                        </div>
                    )}
                </div>

                <div className={styles.buttonContainer}>
                    <label htmlFor='fileSelect' className={styles.fileUpload}>
                        <span>
                            <i className='bi bi-upload'></i>
                        </span>
                        Upload an image
                    </label>
                    <input
                        id='fileSelect'
                        type='file'
                        onChange={setImage}
                        hidden
                    />

                    {/* <Button variant='secondary' onClick={() => recognizeFace()}>
                        Detect Face
                    </Button> */}
                    <Button
                        variant='secondary'
                        onClick={() => detectFace()}
                        disabled={noFaceDetected}>
                        Detect Face and Recognition Emotion
                    </Button>
                </div>
            </div>
        </>
    );
};

export default FaceDetection;
