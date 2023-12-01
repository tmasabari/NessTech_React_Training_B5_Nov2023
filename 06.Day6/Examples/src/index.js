import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Routes, Route, Link, BrowserRouter as Router } from 'react-router-dom';

import Emps from './Components/Emps';
import Depts from './Components/Depts';
import About from './Components/About';
import Contact from './Components/Contact';
import NotFound from './Components/NotFound';
import Details from './Components/Details';
import ProtectedRoute from './ProtectedRoute';
import Login from './Login';

const routing = (       
<Router>	
      <h3 style={{textAlign:"center"}} >Routing Implementation in React Applications</h3>
      <hr/>

      <div style={{textAlign:"center"}} >
              <Link    to="/">Home</Link>  |  
              <Link    to="/Emps">Employees</Link> | 
              <Link    to="/Depts">Departments</Link> |
              <Link    to="/Aboutus">About Us</Link> |
              <Link    to="/Contactus">Contact Us</Link> |
              <Link    to="/Hello">Invalid</Link> |
              <Link    to="/Login">Login</Link> |
      </div>
      <hr/>
          <Routes>
              <Route path="/" 	element= { <App />  }  />
              
              <Route path="/Emps"  element={
                <ProtectedRoute  returnUrl="/Emps">
                    <Emps />
                </ProtectedRoute>
              } />
              
              <Route path="/Depts"  element={
                <ProtectedRoute  returnUrl="/Depts">
                    <Depts />
                </ProtectedRoute>
              } />	            


              <Route path="/Aboutus" element= { <About />  }  /> 	
              <Route path="/Contactus" element= { <Contact />  }  /> 	
              <Route path="/Login" element= { <Login />  }  /> 	
              <Route path="/Details/:id" element= { <Details />  }  /> 	
              <Route path="*" element= { <NotFound />  }  /> 	             
		  </Routes>
</Router>
);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   {routing}
  </React.StrictMode>
);
