import React, { Component } from "react";

class EventBind extends Component {
    constructor(props) {
        super(props)
        this.state = {
            message: 'Hello'
        }
        //  this.clickHandler= this.clickHandler.bind(this);
    }
    // clickHandler(){
    //     this.setState ({   // at this moment the handler hasnt been bind of we didnt use .bind in our onClick method
    //         message: 'Goodbye!'
    //     })
    // }
    clickHandler = () =>
    {
        this.setState({
            message: 'Goodbye!'
        })
    }
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
                {/* <button onClick={() => this.clickHandler()}>Click</button> */}
                <button onClick={this.clickHandler}>Click</button>
                
            </div>
        )
    }
}
export default EventBind