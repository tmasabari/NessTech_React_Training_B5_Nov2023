import React, { Component, useState } from 'react';
import Demo from './Demo';
import DeptList from './DeptList';
 
export var userDetailsContext  = React.createContext(null);


function App(){

  let [userObj, setUserObj] = useState({ name : "Scott", age : 25, email : "scott@gmail.com"});
   
    return (
      <div style={{margin:"10px", border:"2px solid Blue"}}>  
        <h3>This is the Parent Component</h3>    
        <hr/>
        <userDetailsContext.Provider  value={userObj}>
            <Demo />
        </userDetailsContext.Provider>  
          
      </div>
    );   
}

export default App;
