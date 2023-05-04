import React from "react";
import big from "./BIGprint/BIG_print_1.svg"
import cup from "./cupprint/cup_print_1.svg"
import color from "./colorprint/color_print_1.svg"
import photo from "./photoprint/photo_print_1.svg"
import post from "./postpress/post_press_1.svg"
import "./MainWindow.css"
import colorA from './colorprint/color_print.json'
import bigA from './BIGprint/big_print.json'
import cupA from './cupprint/cup_print.json'
import photoA from './photoprint/photo_print.json'
import postA from './postpress/post_press.json'
import BodymovinAnimation from "./BodymovinAnimation";
import {useDispatch} from "react-redux";
import {addCalc} from "../../actions/actions";

const MainWindow = () => {
    // const files = useSelector((state) => state.allFiles.allFiles);
    const dispatch = useDispatch();
    const addDigital = () => {
        dispatch(addCalc("digital", "Кольоровий друк", "clientOnly"));
    }
    const addWide = () => {
        dispatch(addCalc("wide", "Широкоформатний друк", "clientOnly"));
    }
    const addPhoto = () => {
        dispatch(addCalc("photo", "Фото друк", "clientOnly"));
    }
    const addCup = () => {
        dispatch(addCalc("cup", "Друк на чашках", "clientOnly"));
    }
    const addPost = () => {
        dispatch(addCalc("post", "Пост-пресс", "clientOnly"));
    }

    return (
        <div>
            <div>Choose service</div>
            <div>
                <div onClick={addDigital} className="cursorPointer gif digitalPrintContainer">
                    <BodymovinAnimation animationData={colorA} classname="card-img-top anim" />
                    <img src={color} className="card-img-top noanim" alt="..."/>
                </div>
                <div onClick={addWide} className="cursorPointer gif widePrintContainer">
                    <BodymovinAnimation animationData={bigA} classname="card-img-top anim" />
                    <img src={big} className="card-img-top noanim" alt="..."/>
                </div>
                <div onClick={addPhoto} className="cursorPointer gif photoPrintContainer">
                    <BodymovinAnimation animationData={photoA} classname="card-img-top anim" />
                    <img src={photo} className="card-img-top noanim" alt="..."/>
                </div>
            </div>
            <div>
                <div onClick={addCup} className="cursorPointer gif cupPrintContainer">
                    <BodymovinAnimation animationData={cupA} classname="card-img-top anim" />
                    <img src={cup} className="card-img-top noanim" alt="..."/>
                </div>
                <div onClick={addPost} className="cursorPointer gif postPrintContainer">
                    <BodymovinAnimation animationData={postA} classname="card-img-top anim" />
                    <img src={post} className="card-img-top noanim" alt="..."/>
                </div>
            </div>
        </div>
    );
};

export default MainWindow;