import React, { Component } from "react";

class UserGreeting extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn: true
        }
    }

    render() {

        return this.state.isLoggedIn && <div>Hello Welcome</div>
        
        
        
        // return this.state.isLoggedIn ? ( <div>Hello Welcome</div>) : (<div>Welcome Guest</div>)

        
        
        // let message 
        // if (this.state.isLoggedIn) {
        //     message = <div> Hello Welcome</div>
        // }
        // else {
        //     message = <div>Welcome Guest</div>
        // }
        // return <div>{message}</div>




        // if(this.state.isLoggedIn) {
        //     return (
        //         <div>
        //             Hello Welcome
        //         </div>
        //     )
        // }
        // else {
        //     return (
        //         <div>
        //             Welcome Guest
        //         </div>
        //     )   
        // }

        // return (
        //     <div>
        //         <div>
        //             Hello Welcome
        //         </div>
        //         <div>
        //             Welcome Guest
        //         </div>
        //     </div>
        // )
    }
}
export default UserGreeting 