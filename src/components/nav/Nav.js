import React from "react";
import Logo from "./logo/Logo";
import {Link} from "react-router-dom";

const Nav = () => {
    // const count = useSelector((state) => state.count);
    // const dispatch = useDispatch();

    return (
        <div className="navbar">
            <Logo/>
            {/*<Link to="/react/counter"><button className="btn">0</button></Link>*/}
            <Link to="/react"><button className="btn">(1)</button></Link>
            <Link to="/react/files"><button className="btn">(2)</button></Link>
            <Link to="/react/createOrder"><button className="btn">(3)</button></Link>
        </div>
    );
};

export default Nav;