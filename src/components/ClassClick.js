import React, { Component } from "react";

class ClassClick extends Component {
    clickHandler() {
        alert('Class Clicked me')
    }
    render() {
        return(
            <div>
                <button onClick={this.clickHandler}>Clcik me</button>
            </div>
        )
    }
}
export default ClassClick