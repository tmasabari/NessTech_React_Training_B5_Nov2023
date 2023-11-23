import React from 'react';
 

class StateDemo  extends React.Component
{   
    constructor( props )
    {
       super(props);    
       this.state = { uname : "Scott", age:25 };  
       this.f1 = this.f1.bind(this);        
    }

    f1()
    {
       this.setState({ uname :"Smith", age :   30});      
    }

    
	render() { 
       
      return (
        <div>    
            <h3>Working with state object in React Component</h3>
            <hr/>

            <h3>State Data</h3>
            User Name  :  {this.state.uname}   <br/>
            User Age  :  {this.state.age}   <br/>
            <br/><br/>
            <input type="button" onClick={this.f1} value="Update Data"  />

        </div>  );
    }
}

export default StateDemo; 

