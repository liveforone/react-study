import React, {useState, useReducer} from "react";

function numberReducer(state, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREASE':
            return state - 1;
        default:
            return state;
    }
}

function Counter() {
    // const [number, setNumber] = useState(0);
    const [number, dispatch] = useReducer(numberReducer, 0);

    const onIncrease = () => {
        // setNumber(prevNumber => prevNumber + 1);
        dispatch({type: 'INCREMENT'});
    };

    const onDecrease = () => {
        // setNumber(prevNumber => prevNumber - 1);
        dispatch({type: 'DECREASE'});
    };

    return (
        <>
            <h1>state 예제</h1>
            <div>
                <h3>{number}</h3>
                <button onClick={onIncrease}>+1</button>
                <button onClick={onDecrease}>-1</button>
            </div>
        </>
    );
}

export default Counter;