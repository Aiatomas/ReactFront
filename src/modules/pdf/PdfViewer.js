import React, { useEffect, useState, useRef, useCallback } from 'react';
import * as pdfjsLib from 'pdfjs-dist/webpack';
// import pdfjsLib from "pdfjs-dist/build/pdf";
import pdfjsWorker from "pdfjs-dist/build/pdf.worker";
import {useSelector} from "react-redux";
import {MDBInput} from "mdb-react-ui-kit";

export default function PdfViewer({url}){
    const thisFile = useSelector(state => state.files.thisFile);
    const urlF = useSelector(state => state.files.thisFile.url.url);
    const allFiles = useSelector(state => state.files.allFiles);
    const canvasRef = useRef();
    pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker;

    const [pdfRef, setPdfRef] = useState();
    const [currentPage, setCurrentPage] = useState(1);
    const [height, setHeight] = useState(0);
    const [width, setWidth] = useState(0);

    const renderPage = useCallback((pageNum, pdf=pdfRef) => {
        pdf && pdf.getPage(pageNum).then(function(page) {
            const viewport = page.getViewport({scale: 1.5});
            // const viewport = page.getViewport();
            const canvas = canvasRef.current;
            canvas.height = viewport.height;
            setHeight(viewport.height)
            canvas.width = viewport.width;
            setWidth(viewport.width)
            const renderContext = {
                canvasContext: canvas.getContext('2d'),
                viewport: viewport
            };
            page.render(renderContext);
        });
    }, [pdfRef]);

    useEffect(() => {
        renderPage(currentPage, pdfRef);
    }, [pdfRef, currentPage, renderPage]);

    useEffect(() => {
        const loadingTask = pdfjsLib.getDocument(url);
        loadingTask.promise.then(loadedPdf => {
            setPdfRef(loadedPdf);
        }, function (reason) {
            console.error(reason);
        });
    }, [url]);

    const setPage = (value) => {
        if(value > 0){
            if(value <= pdfRef.numPages){
                setCurrentPage(value)
                renderPage(currentPage, pdfRef);
            }
        }
    }

    const nextPage = () => pdfRef && currentPage < pdfRef.numPages && setCurrentPage(currentPage + 1);

    const prevPage = () => currentPage > 1 && setCurrentPage(currentPage - 1);

    if(pdfRef){
        let imgInServerStyles = {};
        let cardForEtalonStyles = {opacity: "1"};
        let list1Styles = {transform: "", opacity: "1",};
        let prevStyles = {opacity: "1"};
        let nextStyles = {opacity: "1"};
        let containerForImgInServerStyles = {transform: ""};
        let containerForPdfInServerStyles = {transform: ""};
        let pdfRendererStyles = {};
        let he = 0;
        let wi = 0;

        let cardSizeW = 86;
        let cardSizeH = 54;
        let imgWidth = width;
        let imgHeight = height;
        if (thisFile.x > 0 && thisFile.y > 0) {
            console.log("render!!!");
            let x = thisFile.x;
            let y = thisFile.y;
            let etalon = 30;
            let coef = y / x
            let width = etalon / coef;
            let etalonForRender = 30
            let cardWCoef = thisFile.x / cardSizeW
            cardForEtalonStyles = {
                opacity: "1",
                width: width / cardWCoef + "vh"
            }
            let imgCoef = imgHeight / imgWidth
            let pdfCoef = 1
            imgInServerStyles = {}
            if (imgCoef >= coef) {
                let newImgCoef = 100 * coef / imgCoef
                imgInServerStyles = {
                    width: newImgCoef + "%"
                }
            } else {
                imgInServerStyles = {
                    width: 100 + "%"
                }
            }
            if (pdfCoef >= coef) {
                let newPdfCoef = 100 * coef / pdfCoef
                pdfRendererStyles = {
                    width: newPdfCoef + "%"
                }
            } else {
                pdfRendererStyles = {
                    width: 100 + "%"
                }
            }
            if (coef < 1) {
                let newImgCoef = 100 * coef / imgCoef
                let newPdfCoef = 100 * coef / pdfCoef
                let coef1 = coef
                coef = x / y
                width = etalon / coef;
                let cardWCoef = thisFile.y / cardSizeW
                cardForEtalonStyles = {
                    width: width / cardWCoef + "vh"
                }
                containerForImgInServerStyles = {
                    transform: `rotate(-90deg)`
                }
                containerForPdfInServerStyles = {
                    transform: `rotate(-90deg)`
                }
                list1Styles = {
                    transform: "rotate(90deg)"
                }
                if (imgCoef >= coef1) {
                    imgInServerStyles = {
                        width: newImgCoef * coef + "%"
                    }
                } else {
                    imgInServerStyles = {
                        width: 100 / coef1 + "%"
                    }
                }

                if (pdfCoef >= coef1) {
                    pdfRendererStyles = {
                        width: newPdfCoef * coef + "%"
                    }
                } else {
                    pdfRendererStyles = {
                        width: 100 / coef1 + "%"
                    }
                }
            } else {
                containerForImgInServerStyles = {
                    transform: `rotate(0deg)`
                }
                containerForPdfInServerStyles = {
                    transform: `rotate(0deg)`
                }
            }
            list1Styles.width = width + "vh";
            list1Styles.minWidth = width + "vh";
            list1Styles.height = etalonForRender + "vh";
            list1Styles.minHeight = etalonForRender + "vh";
            if (coef <= 1) {

            }


        return (
            <div className="fileViewContainer">
                <div className="listAndCard invisible m-auto">
                    <div className="list m-auto visible cursorPointer" style={list1Styles}>
                        {/*<canvas className="pdfRenderer visible" ref={canvasRef} style={imgInServerStyles}></canvas>*/}
                        <div className="containerForImgInServer" style={containerForImgInServerStyles}>
                            {/*<canvas className="visible" ref={canvasRef} style={imgInServerStyles}></canvas>*/}
                            <div className="imgInServer notMDr">
                                <div className="myPdfViewer">
                                    <div className="theCanvas">
                                        <canvas className="pdfRenderer visible" ref={canvasRef} style={imgInServerStyles}></canvas>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="navContainer">
                    <div id="navPanel" className="d-flex flex-column position-absolute navPanel">
                        <div id="navigation_controls"
                             className="input-group d-flex justify-content-center align-items-center">
                            <div className="input-group-text gray navDrag" id="navDrag">
                                <img src="" alt="d" className="mouseScroll"/>
                            </div>
                            <button id="page_count" className="input-group-text gray">{thisFile.countInFile}</button>
                            <button className="input-group-text gray">стр.</button>
                            <MDBInput className="input-group-text gray inputs inputFormat"
                                      onChange={(e) => setPage(e.currentTarget.value)} label='' id='typeNumber'
                                      type='number' value={currentPage}/>
                            <button className="btn btn-sm input-group-text gray m-2 invisible">
                                Завантажити файл
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <canvas className="pdfRenderer visible" ref={canvasRef}></canvas>
    )
}}