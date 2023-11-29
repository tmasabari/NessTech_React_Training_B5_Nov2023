import axios from 'axios';
import React, { useContext } from 'react';
import { userDetailsContext } from './App';

function Demo(props) { 
    

 
  return <div style={{margin:"10px", border:"2px solid Green"}}>  
          <h3>This is Child Component</h3>
          <hr/>
          <GrandChild />
        

        </div>;
}

export default Demo;



function GrandChild(props) {     
    
  var  contextData  = useContext(userDetailsContext);
 
  return <div style={{margin:"10px", border:"2px solid Red"}}>  
          <h3>This is Grand Child Component</h3>       
          <hr/>

          <div>
              User Name  :  {contextData.name} <br/>
              User Age  :  {contextData.age} <br/>
              User Email  :  {contextData.email} <br/>
          </div>

        </div>;
}