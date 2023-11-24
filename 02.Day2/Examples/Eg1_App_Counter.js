import logo from './logo.svg';
import React from 'react';
import {useState} from 'react';
import './App.css';


function App() {


  const [count, setCount] = useState(1);


  function buttonClick()
  {
     setCount(count  + 1);
  }


  return (
    <>
      <h3>State Management in Function Components using Hooks</h3>
      <hr/>
      
      <h1>Count   :  {count}</h1>
      <input type="button"  value="Update Count"  onClick={buttonClick}  />

    </>
  );

}

export default App;
