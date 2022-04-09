import React from "react";

// function Greet() {
//     return <h1> Hello From the Functional Component.</h1>
// }

// const Greet = () => <h1> Hello From Functional Component using ES6.</h1>

const Greet = props => {
    const {name, heroName} = props
    return (
        <div>
            <h1>
                Hello {name} a.k.a {heroName}
            </h1>
        </div>
    )
}
export default Greet