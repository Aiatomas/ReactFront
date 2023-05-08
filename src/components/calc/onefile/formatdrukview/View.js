import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {MDBInput} from "mdb-react-ui-kit";

export const View = () => {
    const thisFile = useSelector(state => state.files.thisFile);
    const allFiles = useSelector(state => state.files.allFiles);
    const dispatch = useDispatch();
    const [data, setData] = useState(null);


    let imgInServerStyles = {};
    let cardForEtalonStyles = {opacity: "1"};
    let list1Styles = {transform: "", opacity: "1",};
    let prevStyles = {opacity: "1"};
    let nextStyles = {opacity: "1"};
    let containerForImgInServerStyles = {transform: ""};
    let containerForPdfInServerStyles = {transform: ""};
    let pdfRendererStyles = {};

    useEffect(() => {
        const img = new Image();
        img.src = thisFile.url.url;
        img.onload = handleImageLoad(img);
    }, []);

    let cardSizeW = 86;
    let cardSizeH = 54;
    const handleImageLoad = (img) => {
        let imgWidth = img.naturalWidth;
        let imgHeight = img.naturalHeight;
        let src = img.src;
        if (thisFile.x && thisFile.y) {
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
            list1Styles = {
                width: width + "vh",
                minWidth: width + "vh",
                height: etalonForRender + "vh",
                minHeight: etalonForRender + "vh"
            }
            if (coef <= 1) {

            }
            setData(
                <div className="fileViewContainer">
                    <div className="listAndCard invisible m-auto">
                        <div className="list m-auto visible cursorPointer" style={list1Styles}>
                            <div className="containerForImgInServer" style={containerForImgInServerStyles}>
                                <img src={src} alt="" className="imgInServer" style={imgInServerStyles}
                                     draggable="false"/>
                            </div>

                            <div className="containerForImgInServer d-none" style={containerForPdfInServerStyles}>
                                <div className="imgInServer notMDr">
                                    <div className="myPdfViewer">
                                        <div className="theCanvas">
                                            <canvas className="pdfRenderer" style={pdfRendererStyles}></canvas>
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
                                <button id="page_count" className="input-group-text gray"></button>
                                <button className="input-group-text gray">стр.</button>
                                <MDBInput className="input-group-text gray inputs inputFormat"
                                          onChange={(e) => setPage(e.currentTarget.value)} label='' id='typeNumber'
                                          type='number' value={1}/>
                                <button className="input-group-text gray">{imgWidth}</button>
                                <button className="input-group-text gray">{imgHeight}</button>
                                <button className="btn btn-sm input-group-text gray m-2 invisible">
                                    Завантажити файл
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            let list1Styles = {
                transform: "",
                opacity: "0",
            }
            let prevStyles = {
                opacity: "0"
            }
            let nextStyles = {
                opacity: "0"
            }
            let cardForEtalonStyles = {
                opacity: "0"
            }
        }
    };

    const setPage = (value) => {

    }
    return (<div>
        {data ? (
            data
        ) : (
            <div>Loading...
                <img onLoad={handleImageLoad} src={thisFile.url.url} alt="" className="imgInServer d-none" draggable="false"/>
            </div>
        )}
    </div>)
};