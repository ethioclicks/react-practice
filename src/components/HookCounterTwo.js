import React, { useState } from 'react';

function HookCounterTwo() {
    const initalCount = 0
    const [count, setCount] = useState(initalCount)

    const incrementFive = () => {
        for (let i = 0; i < 5; i++){
            setCount(prevCount => prevCount + 1)
        }
    }
    return (
        <div>
            Count: {count}
            <div>
                <button onClick={() => setCount(initalCount)}>Reset</button>
                <button onClick={() => setCount(prevCount => prevCount + 1)}>increment</button>
                <button onClick={() => setCount(prevCount => prevCount - 1)}>decrement</button>
                <button onClick={incrementFive}>increment 5</button>
            </div>
        </div>
    );
}

export default HookCounterTwo;