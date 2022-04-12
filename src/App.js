import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import { Component } from 'react';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
class App extends Component { //in the latest react app we start our app with function but we have changed it to class component.
  render () {
    return (
      <div className="App">
        <EventBind />
        {/* <FunctionClick />
        <ClassClick /> */}
        {/* <Counter /> */}
        {/* <Message /> */}
        {/* <Greet name="Bruce" heroName ="Batman"/>
          <p>This is a children props of Bruce</p>
        <Greet name="Clark" heroName ="Superman"/>
          <button>Action</button>*/}
        {/* <Greet name="Diana" heroName ="Wonder Women"/>
        <Welcome name="Bruce" heroName ="Batman"/> */}
        {/* <Welcome name="Clark" heroName ="Superman"/>
        <Welcome name="Diana" heroName ="Wonder Women"/>  */}
        
        {/* <Hello/> */}
      </div>
    );
  }
}

export default App;
