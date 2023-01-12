import React from 'react';
import Accordion from './components/Accordion/Accordion';
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
      <AppTitle />
      <Rating />
      <Accordion />
      <Rating />
    </div>
  );
}

//<> fragment tag - an placeholder for an html element
function AppTitle() {
  return (
    <>This is the App component</>
  );
}

function Rating() {
  console.log('rating rendered');
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



function Star() {
  return (
    <span>★</span>
  )
}