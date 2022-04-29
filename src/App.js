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
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appStyles.css';
import  styles from './appStyles.module.css';
import Form from './components/Form';
import LifecycleA from './components/LifecycleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import FRParentInput from './components/FRParentInput';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
import User from './components/User';
import CounterRender from './components/CounterRender';
import { UserProvider } from './components/userContext';
import ComponentC from './components/ComponentC';
import PostList from './components/PostList';
import PostForm from './components/PostForm';

class App extends Component { //in the latest react app we start our app with function but we have changed it to class component.
  render () {
    return (
      <div className="App">
        {/* <PostList/> */}
        
        <PostForm/>
        
        {/* <UserProvider value="Hello">
          <ComponentC/>
        </UserProvider> */}


        {/* <CounterRender>
          {(count, incrementCount)=> 
            <ClickCounterTwo count={count} incrementCount={incrementCount}/>}
        
        </CounterRender> 
          
        <CounterRender>
          {(count, incrementCount)=> 
            <HoverCounterTwo count={count} incrementCount={incrementCount}/>}
        
        </CounterRender> */}

       {/* <ClickCounterTwo/>
       <HoverCounterTwo/>
       <User render={(iLoggedIn) => isLoggedIn ? 'Hello' : 'Guest'}/> */}
        {/* <ClickCounter/>
        <HoverCounter  name="Hello"/> */}

        {/* <ErrorBoundary>
          <Hero heroName="Batman" />
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName="Superman" />
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName="Joker" />
        </ErrorBoundary> */}


        {/* <PortalDemo/> */}
        {/* <FRParentInput/> */}

        {/* <FocusInput /> */}
        
        
        {/* <RefsDemo /> */}
        
        {/* <ParentComp/> */}
        
        {/* <FragmentDemo/>
        <Table/> */}
        
        
        
        {/* <LifecycleA/> */}
        {/* <Form/> */}
        {/* <h1 className='error'>Error</h1>
        <h1 className={styles.success}>Success</h1> */}
        {/* <Inline/> */}
        {/* <Stylesheet primary = {true}/> */}
        {/* <NameList/> */}
        {/* <UserGreeting/> */}
        {/* <ParentComponent/> */}
        {/* <EventBind /> */}
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
