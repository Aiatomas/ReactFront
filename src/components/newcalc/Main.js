import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchPrices2} from "../../actions/pricesAction";
import Loader from "../calc/Loader";
import Form from "react-bootstrap/Form";

const Main = () => {
    const dispatch = useDispatch();
    const prices2 = useSelector(state => state.prices.prices2);
    const pricesIsLoading2 = useSelector(state => state.prices.pricesIsLoading2);
    const pricesError2 = useSelector(state => state.prices.pricesError2);
    useEffect(() => {
        dispatch(fetchPrices2())
    }, [])
    console.log(prices2);
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

    if(prices2){
        return (
            <div>
                <div className="d-flex flex-column align-items-center">
                    <div className="d-flex">
                        <div className="d-flex">
                            FORMAT:
                            <Form.Select name="pagination">
                                <option value="A7">A7</option>
                                <option value="A6">A6</option>
                                <option value="A5">A5</option>
                                <option value="A4">A4</option>
                                <option value="A3">A3</option>
                            </Form.Select>
                        </div>

                        <div className="d-flex">
                            PAPER:
                            <Form.Select name="pagination">
                                {prices2[1].variants.map((item) => (
                                    <option value={item[0]}>{item[0]}</option>
                                ))}
                            </Form.Select>
                        </div>
                    </div>

                    <div className="">
                        DOP:
                        <div className="d-flex flex-column">
                            <p className="bg-info p-2">втереть дичь
                                <Form.Select name="pagination">
                                    {prices2[1].variants.map((item) => (
                                        <option value={item[0]}>{item[0]}</option>
                                    ))}
                                </Form.Select>
                            </p>
                            <p className="bg-info p-2">станцевать
                                <Form.Select name="pagination">
                                    {prices2[1].variants.map((item) => (
                                        <option value={item[0]}>{item[0]}</option>
                                    ))}
                                </Form.Select>
                            </p>
                            <p className="bg-info p-2">люверсы в носу
                                <Form.Select name="pagination">
                                    {prices2[1].variants.map((item) => (
                                        <option value={item[0]}>{item[0]}</option>
                                    ))}
                                </Form.Select>
                            </p>
                            <p className="bg-info p-2">белочка
                                <Form.Select name="pagination">
                                    {prices2[1].variants.map((item) => (
                                        <option value={item[0]}>{item[0]}</option>
                                    ))}
                                </Form.Select>
                            </p>
                            <p className="bg-info p-2">сказать "пу-пу-пуууу.."
                                <Form.Select name="pagination">
                                    {prices2[1].variants.map((item) => (
                                        <option value={item[0]}>{item[0]}</option>
                                    ))}
                                </Form.Select>
                            </p>
                        </div>
                    </div>
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