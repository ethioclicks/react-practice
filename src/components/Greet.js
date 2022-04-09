import React from "react";

// function Greet() {
//     return <h1> Hello From the Functional Component.</h1>
// }

// const Greet = () => <h1> Hello From Functional Component using ES6.</h1>

const Greet = props => {
    return (
        <div>
            <h1>
                Hello {props.name} a.k.a {props.heroName}
            </h1>
            {props.children}
        </div>
    )
}
export default Greet