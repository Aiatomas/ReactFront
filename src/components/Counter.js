// Counter.js
import React, {useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
    const count1 = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();
    // const [count, setCount] = useState((state) => state.count);
    // const handleClick = () => {
    //     console.log(1)
    // }

    return (
        <div>
            <h2>Count: {count1}</h2>
            <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
            <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
            {/*<button onClick={() => setCount(count + 1)}>*/}
            {/*    +*/}
            {/*</button>*/}
            {/*<button onClick={() => setCount(count - 1)}>*/}
            {/*    -*/}
            {/*</button>*/}
        </div>
    );
};

export default Counter;