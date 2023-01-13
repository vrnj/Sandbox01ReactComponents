import React from 'react';
import Accordion from './components/Accordion/Accordion';
import { Rating as Rating} from './components/Rating/Rating';
import logo from './logo.svg';
//import './App.css';


function hello() {
  //debugger; //F10, works with browser console only
  alert('Hello world!');
}
  

hello();
//App component nesting Rating and Accordion components
function App() {
  //function operations

  //must return JSX (looks like HTML)
  return (
    <div className="App"> 
      <input />
      <input type="password" value={"yo"} checked={true} /> 
      <AppTitle title={"This is the App component"}/>
      <Rating value={3}/>
      <Accordion menuTitle={"First menu"}/>
      <Rating value={2}/>
      <Accordion menuTitle={"Second menu"}/>
    </div>
  );
}

//<> fragment tag - an placeholder for an html element
function AppTitle(props: any) {
  return (
    <>{props.title}</>
  );
}

export default App;