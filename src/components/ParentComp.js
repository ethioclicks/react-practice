import React, { PureComponent } from 'react';
import PureComp from './PureComp';
import RegComp from './RegComp';

class ParentComp extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Hello'
        }
    }
    componentDidMount(){
        setInterval(() => {
            this.setState({
                name: 'World'
            })
        },2000)
    }
    render() {
        console.log('*****ParentComp render*****')
        return (
            <div>
                Parent Component
                <RegComp name = {this.state.name} />
                <PureComp name = {this.state.name} />
            </div>
        );
    }
}

export default ParentComp;


// import React, { Component } from 'react';
// import PureComp from './PureComp';
// import RegComp from './RegComp';

// class ParentComp extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             name: 'Hello'
//         }
//     }
//     componentDidMount(){
//         setInterval(() => {
//             this.setState({
//                 name: 'World'
//             })
//         },2000)
//     }
//     render() {
//             console.log('*****ParentComp render*****')
//         return (
//             <div>
//                 Parent Component
//                 <RegComp name = {this.state.name} />
//                 <PureComp name = {this.state.name} />
//             </div>
//         );
//     }
// }

// export default ParentComp;