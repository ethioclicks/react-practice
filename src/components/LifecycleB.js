import React, { Component } from 'react';

class LifecycleB extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Hello'
        }
        console.log('LifecycleB constructor')
    }
    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleB getDerivedStateFromProps')
        return null
    }
    componentDidMount(){
        console.log('LifecycleB componentdidmount')
    }
    render() {
        console.log('LifecycleB render')
        return (
            <div>
                LifecycleB
            </div>
        );
    }
}

export default LifecycleB;