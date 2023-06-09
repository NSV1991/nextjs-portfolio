import { useEffect, useRef, useState } from 'react';

import { Layout } from '@components/index';
import { Loader } from '@assets/images/icons';
import Image from 'next/image';
import styles from './objectDetection.module.scss';
import { Button } from '@components/Button/Button';

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
        console.log('ctx:', ctx);
        ctx.drawImage(
            imageEle.current,
            0,
            0,
            imageEle.current.width,
            imageEle.current.height
        );
        for (let i = 0; i < objects.length; i += 1) {
            ctx.font = '16px Arial';
            ctx.fillStyle = 'white';
            ctx.fillText(objects[i].label, objects[i].x + 4, objects[i].y + 16);

            ctx.beginPath();
            ctx.rect(
                objects[i].x,
                objects[i].y,
                objects[i].width,
                objects[i].height
            );
            ctx.strokeStyle = 'green';
            ctx.stroke();
            ctx.closePath();
        }
    };

    const startDetecting = () => {
        objectDetector.detect(imageEle.current, function (err, results) {
            if (err) {
                console.log(err);
                return;
            }
            setDetectedObjects(results);

            if (results && canvasEle.current) {
                draw(canvasEle.current.getContext('2d'), results);
            }
        });
    };

    const fetchML5 = async () => {
        const detector = (await import('ml5')).objectDetector;
        const objDetector = await detector('cocossd');
        setObjectDetectors(objDetector);
        setIsLoading(false);
    };

    useEffect(() => {
        fetchML5();
    }, []);

    const setImage = (event) => {
        if (event.target.files && event.target.files[0]) {
            const image = event.target.files[0];
            if (canvasEle.current) {
                const canvas = canvasEle.current.getContext('2d');
                canvas.clearRect(0, 0, canvas.width, canvas.height);
            }
            setUploadedImage(URL.createObjectURL(image));
        }
    };

    return (
        <Layout>
            {isLoading ? (
                <div className={styles.loader}>
                    <Loader />
                </div>
            ) : (
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
                        <div className={styles.fileUpload}>
                            <label htmlFor='fileSelect'>
                                <span>
                                    <i className='bi bi-upload'></i>
                                </span>
                                Upload an image
                            </label>
                            <input
                                id='fileSelect'
                                type='file'
                                onChange={setImage}
                            />
                        </div>

                        {uploadedImage && (
                            <Button onClick={startDetecting}>
                                Start detection
                            </Button>
                        )}
                    </div>
                    <div className={styles.dataSection}>
                        <ul>
                            {detectedObjects.length > 0 ? (
                                detectedObjects.map((data, index) => (
                                    <li key={`${data.label}-${index}`}>
                                        <p>
                                            <label>Object</label>:
                                            <span> {data.label}</span>
                                        </p>
                                        <p>
                                            <label>Confidence</label>:{' '}
                                            <span>
                                                {Math.round(
                                                    data.confidence * 100
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
            )}
        </Layout>
    );
}
