import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import './Users.css';



function AjaxDemo2() {

    const [usersArray, setUsersArray] = useState([]);

    function getData() {
        let url = "https://reqres.in/api/users";
        axios.get(url).then(resData => {
            //  console.log(resData.data.data);
             setUsersArray(resData.data.data);
        });
    }


    var result  =  usersArray.map( item =>  
        <div className="card">
            <img src={item.avatar}   />   <br/>
            <span style={  {  fontSize : "10px", display : "block", marginBottom : "-2px" }  }> 
            
           <a href={item.avatar}>{item.first_name}{item.last_name}</a>
  
            </span> 
            <span className="email">{item.email}</span>
        </div> ); 

    return (
        <>
            <h3>AJAX Calls in React using Axios Package</h3>
            <hr />

            <input type="button" value="Get Data" onClick={getData} />
            <hr />
           
            {result}
        </>
    );

}

export default AjaxDemo2;
