import React from 'react';
import logo from './logo.svg';
import './App.css';


function hello() {
  debugger; //F10, works with browser console only
  alert('Hello world!');
}
  

hello();
//App component nesting Rating and Accordion components
function App() {
  //function operations

  //must return JSX (looks like HTML)
  return (
    <div className="App"> 
      This is the App component
      <Rating />
      <Accordion />
    </div>
  );
}


function Rating() {
  return(
    <div>
      <Star />
      <Star />
      <Star />
      <Star />
      <Star />
    </div>
    
  );

}
export default App;

function Accordion() {
  return (
    <div>
      <h4>Menu</h4>
      <ul>
        <li>one</li>
        <li>two</li>
        <li>three</li>
      </ul>
    </div>
  );
}

function Star() {
  return (
    <span>★</span>
  )
}