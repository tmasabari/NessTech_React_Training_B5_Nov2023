import React, {useState} from 'react';


function Login() {   

    const [uid, setUserId]  = useState("");
    const [pwd, setPassword]  = useState("");
    const [result, setResult]  = useState("");


    function loginButton_click()
    {
        if(uid == "admin" && pwd == "admin123")
        {
            setResult("Welcome to Admin");
        }
        else
        {
            setResult("Invalid User Id or Password");
        }
    }


  return (
    <>
      <h3>State Management in Function Components using Hooks</h3>
      <hr/>

      <fieldset>
                <legend>User Login</legend>

                <label>User Id  : </label>
                <input type="text" onChange={(event) => setUserId(event.target.value)} />
                <br/><br/>

                <label>Password  : </label>
                <input type="password"  onChange={(event) => setPassword(event.target.value)} />
                <br/><br/>

                <input type="button"  onClick={loginButton_click}  value="Login"    />

                <p>{result}</p>    



       </fieldset>


      
     

    </>
  );

}

export default Login;
