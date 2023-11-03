import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchPrices2} from "../../actions/pricesAction";
import Loader from "../calc/Loader";
import Form from "react-bootstrap/Form";
import {Accordion} from "react-bootstrap";

const Main = () => {
    const dispatch = useDispatch();
    const prices2 = useSelector(state => state.prices.prices2);
    const pricesIsLoading2 = useSelector(state => state.prices.pricesIsLoading2);
    const pricesError2 = useSelector(state => state.prices.pricesError2);

    const [format, setFormat] = useState("A4");
    const [allFormats, setAllFormats] = useState([]);
    const [x, setX] = useState(210);
    const [y, setY] = useState(297);
    const [material, setMaterial] = useState("Choose material");
    const [allMaterials, setAllMaterials] = useState([]);
    const [count, setCount] = useState(1);
    const [oneElementPrice, setOneElementPrice] = useState(0);
    const [price, setPrice] = useState(0);

    const [selectedPrinter, setSelectedPrinter] = useState(null);
    const [selectedPrinterId, setSelectedPrinterId] = useState(null);
    const [selectedPrinterPrice, setSelectedPrinterPrice] = useState(0);

    useEffect(() => {
        dispatch(fetchPrices2())
    }, [])
    // console.log(prices2);
    if(pricesIsLoading2){
        return (
            <div>
                <Loader/>
            </div>
        )
    }

    if(pricesError2){
        return (
            <div>
                <p>{pricesError2.toString()}</p>
            </div>
        )
    }

    let formats = [];
    formats.push(["A7", 74, 105])
    formats.push(["A6", 105, 148])
    formats.push(["A5", 148, 210])
    formats.push(["A4", 210, 297])
    formats.push(["A3", 297, 420])
    formats.push(["A2", 420, 594])
    formats.push(["A1", 594, 841])
    formats.push(["A0", 841, 1189])
    formats.push(["10х15", 100, 150])
    formats.push(["15х21", 150, 210])
    formats.push(["13х18", 130, 180])

    const changeFormatFunc = (e) => {
        setFormat(e.target.value)
        for (let i = 0; i < formats.length; i++) {
            if(e.target.value === formats[i][0]){
                setX(formats[i][1])
                setY(formats[i][2])
                break;
            }
        }
        changePriceFunc()
    };

    const changeXFunc = (e) => {
        setX(parseInt(e.target.value))
        setFormat("Custom format")
        changePriceFunc()
    };
    const changeYFunc = (e) => {
        setY(e.target.value)
        setFormat("Custom format")
        changePriceFunc()
    };
    const changeMaterialFunc = (e) => {
        setMaterial(e.target.value)
        changePriceFunc()
    };

    const changePriceFunc = () => {
        // setPrice(0)
        let coef = 1 - (count - 1) / 1000;
        let price = selectedPrinterPrice * coef;
        let okrugPrice = Math.round(price * 100) / 100;
        let okrugAllPrice = Math.round((price*count) * 100) / 100;
        setOneElementPrice(okrugPrice)
        setPrice(okrugAllPrice)
    };

    const changeCountFunc = (e) => {
        if(e.target.value > 0){
            setCount(e.target.value)
        } else {
            setCount(1)
        }
        changePriceFunc()
    };

    const changeSelectPrinterFunc = (element1, element2, element3) => {
        setSelectedPrinter(element1);
        setSelectedPrinterPrice(element3);
        let allMaterials = [];
        let newArray;
        for (let i = 0; i < prices2[1].variants.length; i++) {
            newArray = prices2[1].variants[i][1].split("|");
            for (let a = 0; a < newArray.length; a++){
                if(element2.toString() === newArray[a].toString()){
                    allMaterials.push(prices2[1].variants[i])
                }
            }
        }
        setAllMaterials(allMaterials)
        changePriceFunc()
    };

    if(prices2){
        return (
            <div>
                <div className="d-flex flex-column align-items-center">
                    <div className="p-3 bg-danger">
                        {prices2[0].variants.map((item) => (
                            <button
                                key={item[0]}
                                className={selectedPrinter === item[0] ? 'btn btn-dark' : 'btn btn-light'}
                                onClick={() => changeSelectPrinterFunc(item[0], item[3], item[2])}
                            >{item[0]}
                            </button>
                        ))}
                    </div>
                    <div className="d-flex p-3 bg-success">
                        <div className="d-flex">
                            <div className="btn">Формат:</div>
                            <Form.Select name="format" value={format} onChange={changeFormatFunc}>
                                {formats.map((item) => (
                                    <option key={item[0]}>{item[0]}</option>
                                ))}
                                <option disabled >Custom format</option>
                            </Form.Select>
                        </div>

                        <div className="d-flex">
                            <div className="btn">X:</div>
                            <Form.Control name="x" type="number" value={x} onChange={changeXFunc}>

                            </Form.Control>
                            <div className="btn">Y:</div>
                            <Form.Control name="y" type="number" value={y} onChange={changeYFunc}>

                            </Form.Control>
                        </div>
                    </div>

                    <div className="d-flex p-3 bg-light">
                        <div className="btn">Матеріал:</div>
                        <Form.Select value={material} name="material" onChange={changeMaterialFunc}>
                            <option disabled >Choose material</option>
                            {allMaterials.map((item) => (
                                <option key={item[0]}>{item[0]}</option>
                            ))}
                        </Form.Select>
                    </div>
                    <div className="d-flex p-3 bg-warning">
                        <div className="btn">Кількість:</div>
                        <Form.Control name="count" type="number" value={count} onChange={changeCountFunc}>

                        </Form.Control>
                    </div>

                    <Accordion className="">
                        <Accordion className="" eventkey="0">
                            <Accordion.Button className="btn btnm moreOptions dopOptionsContainer">Додаткові опції:</Accordion.Button>
                            <Accordion.Body>

                                <div className="p-3 bg-warning">
                                    <div className="d-flex flex-column">
                                        <p className="bg-info p-2">втереть дичь
                                            <Form.Select name="pagination">
                                                {prices2[1].variants.map((item) => (
                                                    <option key={item[0]}>{item[0]}</option>
                                                ))}
                                            </Form.Select>
                                        </p>
                                        <p className="bg-info p-2">станцевать
                                            <Form.Select name="pagination">
                                                {prices2[1].variants.map((item) => (
                                                    <option key={item[0]}>{item[0]}</option>
                                                ))}
                                            </Form.Select>
                                        </p>
                                        <p className="bg-info p-2">люверсы в носу
                                            <Form.Select name="pagination">
                                                {prices2[1].variants.map((item) => (
                                                    <option key={item[0]}>{item[0]}</option>
                                                ))}
                                            </Form.Select>
                                        </p>
                                        <p className="bg-info p-2">белочка
                                            <Form.Select name="pagination">
                                                {prices2[1].variants.map((item) => (
                                                    <option key={item[0]}>{item[0]}</option>
                                                ))}
                                            </Form.Select>
                                        </p>
                                        <p className="bg-info p-2">сказать "пу-пу-пуууу.."
                                            <Form.Select name="pagination">
                                                {prices2[1].variants.map((item) => (
                                                    <option key={item[0]}>{item[0]}</option>
                                                ))}
                                            </Form.Select>
                                        </p>
                                    </div>
                                </div>

                                {/*<Accordion className="">*/}
                                {/*    <Accordion className="" eventkey="1">*/}
                                {/*        <Accordion.Button className="btn btnm moreOptionsIn">Порізка: {thisFile.cuttingSamokleika}</Accordion.Button>*/}
                                {/*        <Accordion.Body>*/}
                                {/*            {cuttingSamokleika.map((item) => (*/}
                                {/*                <button*/}
                                {/*                    value={item[0]}*/}
                                {/*                    className={thisFile.cuttingSamokleika === item[0] ? 'btn btnm fileActive' : 'btn btnm'}*/}
                                {/*                    onClick={(e) => updateThisFilecuttingSamokleika(e.currentTarget.value)}*/}
                                {/*                    key={item[0]}>*/}
                                {/*                    {item[0]}*/}
                                {/*                </button>*/}
                                {/*            ))}*/}
                                {/*        </Accordion.Body>*/}
                                {/*    </Accordion>*/}
                                {/*</Accordion>*/}

                            </Accordion.Body>
                        </Accordion>
                    </Accordion>


                    <p className="bg-info p-3">Price one elem:
                        <Form.Control disabled name="price" value={oneElementPrice}>

                        </Form.Control>
                    </p>
                    <p className="bg-info p-3">Price:
                        <Form.Control disabled name="price" value={price}>

                        </Form.Control>
                    </p>
                </div>
            </div>
        )
    }

    return (
        <div>ут должны быть ваши услуги)</div>
    )
    // return (
    //     <div>
    //         <div className="d-flex">
    //             <div className="d-flex flex-column m-1">
    //                 <div className="btn bg-info mt-1">MACHINES</div>
    //                 <div className="btn btn-light mt-1">digital</div>
    //                 <div className="btn btn-light mt-1">wide</div>
    //                 <div className="btn btn-light mt-1">photo</div>
    //                 <div className="btn btn-light mt-1">aaaa</div>
    //             </div>
    //
    //             <div className="d-flex flex-column m-1">
    //                 <div className="btn bg-info mt-1">price of printing</div>
    //                 <Form.Control className="mt-1" type="number" placeholder="price.." />
    //                 <Form.Control className="mt-1" type="number" placeholder="price.." />
    //                 <Form.Control className="mt-1" type="number" placeholder="price.." />
    //                 <Form.Control className="mt-1" type="number" placeholder="price.." />
    //             </div>
    //
    //             <div className="d-flex flex-column m-1">
    //                 <div className="btn bg-info mt-1">materials</div>
    //                 <Form.Select name="pagination" className="mt-1">
    //                     <option value="Крейдований папір / 100-170 г/м2">Крейдований папір / 100-170 г/м2</option>
    //                     <option value="бездомный КОЩьКА">бездомный КОЩьКА</option>
    //                     <option value="БАМАГА ОБОСРАННАЯ">БАМАГА ОБОСРАННАЯ</option>
    //                     <option value="БАМАГА ТОЛСТАЯ">БАМАГА ТОЛСТАЯ</option>
    //                 </Form.Select>
    //                 <Form.Select name="pagination" className="mt-1">
    //                     <option value="Крейдований папір / 100-170 г/м2">Крейдований папір / 100-170 г/м2</option>
    //                     <option value="бездомный КОЩьКА">бездомный КОЩьКА</option>
    //                     <option value="БАМАГА ОБОСРАННАЯ">БАМАГА ОБОСРАННАЯ</option>
    //                     <option value="БАМАГА ТОЛСТАЯ">БАМАГА ТОЛСТАЯ</option>
    //                 </Form.Select>
    //                 <Form.Select name="pagination" className="mt-1">
    //                     <option value="Крейдований папір / 100-170 г/м2">Крейдований папір / 100-170 г/м2</option>
    //                     <option value="бездомный КОЩьКА">бездомный КОЩьКА</option>
    //                     <option value="БАМАГА ОБОСРАННАЯ">БАМАГА ОБОСРАННАЯ</option>
    //                     <option value="БАМАГА ТОЛСТАЯ">БАМАГА ТОЛСТАЯ</option>
    //                 </Form.Select>
    //                 <Form.Select name="pagination" className="mt-1">
    //                     <option value="Крейдований папір / 100-170 г/м2">Крейдований папір / 100-170 г/м2</option>
    //                     <option value="бездомный КОЩьКА">бездомный КОЩьКА</option>
    //                     <option value="БАМАГА ОБОСРАННАЯ">БАМАГА ОБОСРАННАЯ</option>
    //                     <option value="БАМАГА ТОЛСТАЯ">БАМАГА ТОЛСТАЯ</option>
    //                 </Form.Select>
    //             </div>
    //
    //             <div className="d-flex flex-column m-1">
    //                 <div className="btn bg-info mt-1">еще какая-то дичь или что там по плану..</div>
    //                 <Form.Control className="mt-1" type="text" placeholder="вотрите пожалуйста сюда вашу дичь" />
    //                 <Form.Control className="mt-1" type="text" placeholder="вотрите пожалуйста сюда вашу дичь" />
    //                 <Form.Control className="mt-1" type="text" placeholder="вотрите пожалуйста сюда вашу дичь" />
    //                 <Form.Control className="mt-1" type="text" placeholder="вотрите пожалуйста сюда вашу дичь" />
    //             </div>
    //         </div>
    //     </div>
    // );
};

export default Main;