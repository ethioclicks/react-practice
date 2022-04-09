import React from 'react';
const Hello = () => {
    // return (
    //     <div>
    //         <h1>Hello from Hello.js</h1>
    //     </div>
    // )

    //return React.createElement('div', null, 'Hello Hello' )  // writes hello world with a small heading that the one with h1 tag.

    return React.createElement('div', null, 
        React.createElement('h1', null, 'Hello from H1') 
    )// writes hello world with a heading that the one with h1 tag in the div.
}
export default Hello