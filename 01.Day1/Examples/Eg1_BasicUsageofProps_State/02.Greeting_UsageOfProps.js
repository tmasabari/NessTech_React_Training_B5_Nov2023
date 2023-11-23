import React, { Component } from 'react';

class Greeting extends Component 
{  
  constructor(props)
  {
    super(props);       
  }

  render() 
  {     

    return (
    <div>
         <h1>Hi {this.props.uname}, Good morning</h1>
    </div>);
  }
}

export default Greeting;