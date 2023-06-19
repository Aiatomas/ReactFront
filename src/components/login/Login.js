import React, {useState} from "react";
import {Button, Form} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {loginSendCurrentUser} from "../../actions/currentUserActions";

export const Login = () => {
    const dispatch = useDispatch();

    const [login, setLogin] = useState();
    const [pass, setPass] = useState();
    let setLoginF = (event) => {
        setLogin(event.target.value)
    }
    let setPassF = (event) => {
        setPass(event.target.value)
    }

    let loginSend = (event) => {
        event.preventDefault();
        console.log(login);
        console.log(pass);
        dispatch(loginSendCurrentUser(login, pass))
    }

    return (
        <div className="text-center">
            <main className="">
                <Form>
                    <h4 className="titleLogin">Увійдіть будь ласка</h4>

                    <Form.Group className="" controlId="formBasicLogin">
                        {/*<Form.Label className="invisible">Логін</Form.Label>*/}
                        <Form.Control className="inputLogin" type="text" onChange={setLoginF} placeholder="Логін" />
                        {/*<Form.Text className="text-muted">*/}

                        {/*</Form.Text>*/}
                    </Form.Group>

                    <Form.Group className="" controlId="formBasicPassword">
                        {/*<Form.Label className="invisible">Пароль</Form.Label>*/}
                        <Form.Control className="inputLogin" type="password" onChange={setPassF} placeholder="Пароль" />
                    </Form.Group>
                    {/*<Form.Group className="mb-3" controlId="formBasicCheckbox">*/}
                    {/*    <Form.Check type="checkbox" label="Check me out" />*/}
                    {/*</Form.Group>*/}
                    <Button className="text-center buttonLogin" onClick={loginSend} variant="secondary" type="submit">
                        Увійти
                    </Button>
                </Form>
            </main>
        </div>
    )
}