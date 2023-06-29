import { useEffect, useRef, useState } from 'react';

import Image from 'next/image';
import styles from './objectDetection.module.scss';
import { Button } from '@components/Button/Button';
import * as tf from '@tensorflow/tfjs';
import { load as cocoModalLoad } from '@tensorflow-models/coco-ssd';
import { Loader } from '@components/index';

export default function ObjectDetection() {
    const canvasEle = useRef(null);
    const imageEle = useRef(null);
    const [objectDetector, setObjectDetectors] = useState(null);
    const [detectedObjects, setDetectedObjects] = useState([]);
    const [uploadedImage, setUploadedImage] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const draw = (ctx, objects) => {
        canvasEle.current.width = imageEle.current.width;
        canvasEle.current.height = imageEle.current.height;
        // Clear part of the canvas
        ctx.fillStyle = '#000000';
        ctx.fillRect(0, 0, imageEle.current.width, imageEle.current.height);

        ctx.drawImage(
            imageEle.current,
            0,
            0,
            imageEle.current.width,
            imageEle.current.height
        );
        for (let i = 0; i < objects.length; i += 1) {
            // Draw the background rectangle
            ctx.fillStyle = 'rgba(0, 128, 0, 0.5)';
            ctx.strokeStyle = 'white';
            ctx.fillRect(
                objects[i].bbox[0],
                objects[i].bbox[1],
                objects[i].bbox[2],
                20
            );

            ctx.font = '16px Arial';
            ctx.fillStyle = 'white';
            ctx.fillText(
                objects[i].class,
                objects[i].bbox[0] + 4,
                objects[i].bbox[1] + 16
            );

            ctx.beginPath();
            ctx.rect(
                objects[i].bbox[0],
                objects[i].bbox[1],
                objects[i].bbox[2],
                objects[i].bbox[3]
            );
            ctx.strokeStyle = 'green';
            ctx.stroke();
            ctx.closePath();
        }
    };

    const startDetecting = async () => {
        const image = tf.browser.fromPixels(imageEle.current);
        const predictions = await objectDetector.detect(image);

        setDetectedObjects(predictions);
        if (predictions && canvasEle.current) {
            draw(canvasEle.current.getContext('2d'), predictions);
        }
    };

    const loadOCRModel = async () => {
        const model = await cocoModalLoad();
        setObjectDetectors(model);
        setIsLoading(false);
    };

    useEffect(() => {
        loadOCRModel();
    }, []);

    const setImage = (event) => {
        if (event.target.files && event.target.files[0]) {
            const image = event.target.files[0];
            if (canvasEle.current) {
                const canvas = canvasEle.current.getContext('2d');
                canvas.reset();
            }
            setUploadedImage(URL.createObjectURL(image));
        }
    };

    return (
        <>
            <Loader
                loading={isLoading}
                text={'Please wait while model is loading...'}
            />
            <div className={styles.container}>
                <div className={styles.imageSection}>
                    <div className={styles.previewArea}>
                        {uploadedImage && (
                            <>
                                <Image
                                    ref={imageEle}
                                    src={uploadedImage}
                                    alt='sample image'
                                    width={500}
                                    height={500}
                                    style={{ objectFit: 'fill' }}
                                />
                                <canvas
                                    ref={canvasEle}
                                    className={styles.canvas}
                                    width={500}
                                    height={500}
                                />
                            </>
                        )}
                    </div>
                    <div>
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
                    </div>

                    {uploadedImage && (
                        <Button
                            variant='primary'
                            customClass={styles.detectionBtn}
                            onClick={startDetecting}>
                            Start detection
                        </Button>
                    )}
                </div>
                <div className={styles.dataSection}>
                    <h3>Results</h3>
                    <ul>
                        {detectedObjects.length > 0 ? (
                            detectedObjects.map((data, index) => (
                                <li key={`${data.label}-${index}`}>
                                    <p>
                                        <label>Object {index + 1}</label>:
                                        <span> {data.class}</span>
                                    </p>
                                    <p>
                                        <label>Confidence</label>:{' '}
                                        <span>
                                            {Math.abs(data.score * 100).toFixed(
                                                2
                                            )}
                                            %
                                        </span>
                                    </p>
                                </li>
                            ))
                        ) : (
                            <>
                                {imageEle.current && (
                                    <li>
                                        <p>No Result Found</p>
                                    </li>
                                )}
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </>
    );
}
