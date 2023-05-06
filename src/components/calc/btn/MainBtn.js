import React from "react";
import './btn.css';

const MainBtn = (props) => {
    // const count = useSelector((state) => state.count);
    // const dispatch = useDispatch();

    return (
        <button className="btn">
            {props.text}
        </button>
    );
};

export default MainBtn;