import styles from './resizable.module.scss';
import { Responsive, WidthProvider } from 'react-grid-layout';
import '../../../../node_modules/react-grid-layout/css/styles.css';
import '../../../../node_modules/react-resizable/css/styles.css';
import { useState } from 'react';
import Image from 'next/image';

const ResponsiveGridLayout = WidthProvider(Responsive);

const SideMenu = () => {
    return (
        <div className={styles.menu}>
            <div
                draggable
                unselectable='on'
                onDragStart={(e) =>
                    e.dataTransfer.setData(
                        'text/plain',
                        JSON.stringify({
                            text: 'A',
                            bgColor: 'red',
                            w: 12,
                            h: 2,
                        })
                    )
                }>
                A
            </div>
            <div
                draggable
                unselectable='on'
                onDragStart={(e) =>
                    e.dataTransfer.setData(
                        'text/plain',
                        JSON.stringify({
                            text: 'B',
                            bgColor: 'green',
                            w: 6,
                            h: 2,
                        })
                    )
                }>
                B
            </div>
            <div
                draggable
                unselectable='on'
                onDragStart={(e) =>
                    e.dataTransfer.setData(
                        'text/plain',
                        JSON.stringify({
                            text: 'C',
                            bgColor: 'blue',
                            w: 6,
                            h: 2,
                        })
                    )
                }>
                C
            </div>
            <div
                draggable
                unselectable='on'
                onDragStart={(e) =>
                    e.dataTransfer.setData(
                        'text/plain',
                        JSON.stringify({
                            text: 'D',
                            bgColor: 'magenta',
                            w: 12,
                            h: 2,
                        })
                    )
                }>
                D
            </div>
        </div>
    );
};

const MainContainer = () => {
    const [items, setItems] = useState({});

    const handleImageUpload = (event: any, item: any) => {
        if (event.target.files) {
            const image = event.target.files[0];

            const updatedItems: any = {
                ...items,
                [item.key]: {
                    ...item,
                    image: URL.createObjectURL(image),
                },
            };
            setItems(updatedItems);
        }
    };

    const handleDrop = (layout: any, layoutItem: any, _event: any) => {
        const itemData = JSON.parse(_event.dataTransfer.getData('text/plain'));
        const itemId = crypto.randomUUID();
        const updatedItems: any = {
            ...items,
            [itemId]: {
                ...layoutItem,
                ...itemData,
                key: itemId,
            },
        };
        setItems(updatedItems);
    };

    return (
        <div className={styles.mainContainer}>
            <div className={styles.innerContainer}>
                <ResponsiveGridLayout
                    compactType={'horizontal'}
                    isBounded
                    preventCollision
                    className={styles.mainGrid}
                    breakpoints={{
                        lg: 1200,
                        md: 996,
                        sm: 768,
                        xs: 480,
                        xxs: 0,
                    }}
                    cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
                    isDroppable
                    onDrop={handleDrop}>
                    {Object.values(items).map((item: any) => (
                        <div
                            key={item.key}
                            data-grid={{ ...item }}
                            style={{ backgroundColor: item.bgColor }}>
                            {item.image ? (
                                <Image
                                    src={item.image}
                                    alt={item.text}
                                    width='100'
                                    height='30'
                                />
                            ) : (
                                <>
                                    <label htmlFor={`fileUpload-${item.key}`}>
                                        {item.text}
                                    </label>
                                    <input
                                        id={`fileUpload-${item.key}`}
                                        type='file'
                                        onChange={(event) =>
                                            handleImageUpload(event, item)
                                        }
                                        hidden
                                    />
                                </>
                            )}
                        </div>
                    ))}
                </ResponsiveGridLayout>
            </div>
        </div>
    );
};

const ResizeableContainers = () => {
    return (
        <div className={styles.pageContainer}>
            <SideMenu />
            <MainContainer />
        </div>
    );
};

export default ResizeableContainers;
