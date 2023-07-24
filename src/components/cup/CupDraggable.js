import React, {useEffect, useRef, useState} from 'react';
import Draggable, {DraggableData} from 'react-draggable';
import { Resizable, ResizableBox } from 'react-resizable';
import "react-resizable/css/styles.css";
import styled from 'styled-components';

// const StyledResizableBox = styled(ResizableBox)`
//   position: relative;
//   border: 2px dashed #ccc;
//   .react-resizable-handle {
//     position: absolute;
//     width: 10px;
//     height: 10px;
//     background-color: #fff;
//     border: 1px solid #ccc;
//   }
//   .react-resizable-handle-sw {
//     bottom: -5px;
//     left: -5px;
//     cursor: sw-resize;
//   }
//   .react-resizable-handle-se {
//     bottom: -5px;
//     right: -5px;
//     cursor: se-resize;
//   }
// `;
//
// const ResizeHandle = styled.div`
//   position: absolute;
//   width: 10px;
//   height: 10px;
//   background-color: #fff;
//   border: 1px solid #ccc;
// `;

const CupDraggable = () => {

    const [width, setWidth] = useState(71);
    const [height, setHeight] = useState(100);
    const [isDragging, setIsDragging] = useState(false);

    const handleDrag = (e, ui) => {
        setIsDragging(true);
    };
    const handleStop = () => {
        setIsDragging(false);
    };


    const onDrag = (event, { data }) => {

    };

    const onResize = (e, { size }) => {
        // console.log(size);
        // setIsDragging(true)
        // if(e.target.className !== "notDrag"){
        //     setIsDragging(false)
        // }
        // setWidth(size.width)
        // setHeight(size.height)
    };

    return (
        <div style={{ width: '800px', height: '400px', border: '1px solid #ccc', position: 'relative', overflow: 'hidden'}}>
            <Draggable onDrag={onDrag} cancel={isDragging ? '' : '.react-resizable-handle'}
                       onStart={handleDrag}
                       onStop={handleStop}>
                <ResizableBox
                    width={width}
                    height={height}
                    onResize={onResize}
                    minConstraints={[30, 30]} // Минимальные размеры фото
                    // maxConstraints={[400, 400]} // Максимальные размеры фото
                    resizeHandles={["se"]}
                    // cancel={isDragging ? '' : '.react-draggable'}
                    axis="both" // Позволяет изменять размеры по горизонтали и вертикали
                    className="ResizableBoxC"
                >
                    <img
                        src="files/data/notfile2.png"
                        alt="Draggable Photo"
                        style={{ width: '100%', height: '100%', objectFit: 'unset' }}
                        className="notDrag"
                    />
                </ResizableBox>
            </Draggable>
        </div>
    );
};

export default CupDraggable;