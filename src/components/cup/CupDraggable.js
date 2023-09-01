import React, {createRef, useEffect, useRef, useState} from 'react';
import Draggable, {DraggableData} from 'react-draggable';
import { Resizable, ResizableBox } from 'react-resizable';
import "react-resizable/css/styles.css";
import ThreeScene from "../../modules/three/ThreeScene";

const CupDraggable = () => {

    const [imgWidth, setImgWidth] = useState(100);
    const [imgHeight, setImgHeight] = useState(100);

    const [isDragging, setIsDragging] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    // const [imageAspectRatio, setImageAspectRatio] = useState(null);

    const imageRef = useRef(null);
    const inputRef = useRef(null);
    const dragRef = useRef(null);

    const handleImageChange = (event) => {
        const imageFile = event.target.files[0];
        let imgObject = URL.createObjectURL(imageFile)
        setSelectedImage(imgObject);

        if (imageRef.current) {
            const imageRefWidth = imageRef.current.width
            const imageRefHeight = imageRef.current.height
            const aspectRatio = imageRefWidth / imageRefHeight;

            const containerWidth = window.innerWidth * 0.57; // Пример: 50vw
            const containerHeight = window.innerWidth * 0.285; // Пример: 50vw

            setImgHeight(imageRefHeight);
            setImgWidth(imageRefWidth);

            if(imageRefWidth > containerWidth){
                setImgWidth(containerWidth);
                setImgHeight(containerHeight * aspectRatio);
            }
            if(imageRefHeight > containerHeight){
                setImgHeight(containerHeight);
                setImgWidth(containerWidth / aspectRatio);
            }
        }
    };

    const handleDrag = (e, ui) => {
        setIsDragging(true);
    };
    const handleStop = () => {
        setIsDragging(false);
    };


    const onDrag = (e, data) => {

    };

    const onResize = (e, { size }) => {
        setImgHeight(size.height);
        setImgWidth(size.width);
    };

    return (
        <div>
            <input type="file" ref={inputRef} accept="image/*" onChange={handleImageChange} />
            <div style={{ width: '60vw', height: '30vw', border: '1px solid #ccc', position: 'relative', overflow: 'hidden'}}>
                {/*<Draggable onDrag={onDrag} cancel={isDragging ? '' : '.react-resizable-handle'}*/}
                <Draggable
                    ref={dragRef}
                    onDrag={onDrag}
                    // cancel={isDragging ? '' : '.react-resizable-handle'}
                    onStart={handleDrag}
                    className="DraggableBoxC"
                    onStop={handleStop}
                >
                    <ResizableBox
                        width={imgWidth}
                        height={imgHeight}
                        onResize={onResize}
                        minConstraints={[100, 100]} // Минимальные размеры фото
                        // maxConstraints={[400, 400]} // Максимальные размеры фото
                        resizeHandles={["se"]}
                        // resizeHandles={["se", "ne", "sw", "nw"]}
                        // cancel={isDragging ? '' : '.react-draggable'}
                        axis="both" // Позволяет изменять размеры по горизонтали и вертикали
                        className="ResizableBoxC"
                        // className={`${isImageOverflowing() ? '' : ''}`}
                    >
                        {/*<img*/}
                        {/*    src="files/data/notfile2.png"*/}
                        {/*    alt="Draggable Photo"*/}
                        {/*    style={{ width: '100%', height: '100%', objectFit: 'unset' }}*/}
                        {/*    className="notDrag"*/}
                        {/*/>*/}
                        {selectedImage && (
                            // <div
                            //     // className="imgInCup"
                            //     // className={`${isImageOverflowing() ? 'overflow' : ''}`}
                            //     //  style={{ padding: `1wv` }}
                            //     //  style={{ width:`${width}`, height:`${height}` }}
                            //     //  style={{ width: width, height: height }}
                            // >
                            //     <img ref={imageRef} src={selectedImage} style={{ width: width, height: height }} className="notDrag" alt="Выбранное изображение" />
                            // </div>
                            <img ref={imageRef} src={selectedImage} style={{ width: imgWidth, height: imgHeight }} className="notDrag" alt="Выбранное изображение" />
                        )}
                    </ResizableBox>
                </Draggable>
            </div>
            {/*<ThreeScene />*/}
        </div>
    );
};

export default CupDraggable;