import React from 'react';

function ChildComponent(props) {
  return (
    <div>
        <button onClick={props.greetHandler}>Greet Parent with out child</button> <br></br>
        {/* <button onClick={() => props.greetHandler('child')}>Greet Parent with child</button> */}
    </div>
  )
}
export default ChildComponent