import React, { useState, useMemo, useCallback } from 'react';
import { MemoizedChildFive } from './ChildFive';

const ParentFour = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('Hello')
    const person = {
        fname: 'Bruce',
        lname: 'Wayne'
    }
    const memoizedPerson = useMemo(() => person, [])

    const handleClick = () => {}

    const memoizedhandleClick = useCallback(handleClick, [])
    console.log('ParentFour Render')
    return (
        <div>
            <button onClick={() => setCount((c) => c + 1)}>Count - {count}</button>
            <button onClick={() => setName('World')}>Change name</button>
            {/* <MemoizedChildFive name={name} person={memoizedPerson}/> */}
            <MemoizedChildFive name={name} handleClick={memoizedhandleClick}/>
        </div>
    )
}

export default ParentFour;