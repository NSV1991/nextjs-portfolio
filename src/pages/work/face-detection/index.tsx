import { Button, Loader } from '@components/index';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styles from './faceDetection.module.scss';
import { MODEL_URL } from '../../../constants';
import {
    detectAllFaces,
    draw,
    loadFaceExpressionModel,
    loadFaceLandmarkModel,
    loadFaceRecognitionModel,
    loadSsdMobilenetv1Model,
    matchDimensions,
    resizeResults,
} from 'face-api.js';

const FaceDetection = () => {
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
        setLoaderMsg('Please wait while SSD Mobile net model is loading...');
        await loadSsdMobilenetv1Model(MODEL_URL);
        setLoaderMsg('Please wait while face landmark model is loading...');
        await loadFaceLandmarkModel(MODEL_URL);
        setLoaderMsg('Please wait while face expression model is loading...');
        await loadFaceRecognitionModel(MODEL_URL);
        await loadFaceExpressionModel(MODEL_URL);
        setIsLoading(false);
    };

    const mapDimensions = async () => {
        if (originalImgElement.current && canvasElement.current) {
            setNoFaceDetected(false);
            setIsLoading(true);
            const allFaceData = await detectAllFaces(originalImgElement.current)
                .withFaceLandmarks()
                .withFaceDescriptors()
                .withFaceExpressions();

            setLoaderMsg('Please wait while canvas dimensions are matched...');
            await matchDimensions(
                canvasElement.current,
                originalImgElement.current
            );

            if (originalImgElement.current && canvasElement.current) {
                const results = await resizeResults(allFaceData, {
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
            draw.drawDetections(canvasElement.current, faceDescriptions);

            setLoaderMsg('Please wait while detecting face expressions...');
            draw.drawFaceExpressions(canvasElement.current, faceDescriptions);

            setIsLoading(false);
        }
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
                <h1>Face Detection</h1>
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
                    <div className={styles.buttonContainer}>
                        <label
                            htmlFor='fileSelect'
                            className={styles.fileUpload}>
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

                        <Button
                            variant='primary'
                            onClick={() => detectFace()}
                            disabled={noFaceDetected}>
                            Detect Face and Recognition Emotion
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FaceDetection;
