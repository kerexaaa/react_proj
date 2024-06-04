import React, {useState} from 'React'

export default function Counter() {

    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(count + 1);
    }

    const decrementCount = () => {
        setCount(count - 1);
    }

    const resetCount = () => {
        setCount(0);   
    }

    return(

        <>
            <h1 className="count">{count}</h1>
            <div className="button-container">
                <button className="button" onClick={decrementCount}>Decrement</button>
                <button className="button" onClick={resetCount}>Reset</button>
                <button className="button" onClick={incrementCount}>Increment</button>
            </div>
        </>
    );

}