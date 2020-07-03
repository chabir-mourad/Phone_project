import React  , {useState}from "react";
import { Button} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css"
import {Link, Redirect} from 'react-router-dom'

// import axios from  'axios'
import {connect} from 'react-redux'

import PropTypes from 'prop-types';
import Alert from '../../Alert/Alert'
import {login} from '../../../actions/auth'



 const Login =({ login , isAuthenticated})=>  {
  
    const [formData, setFormData] = useState({
        
         email:"" ,
          password:"" ,
        
    })

  const { email , password} = formData

 
const onChange = e=> setFormData({...formData ,[e.target.name] : e.target.value })

const onSubmit =async e=> {
    e.preventDefault()
    console.log(e.target.value)
login({email,password})


}
// Redirect if login
if (isAuthenticated) {
  return <Redirect to="/SelectedPhone" />;
}

  return (
    <div className="reg-container">
<Alert />
      <h1 className="reg-title"> Login</h1> 
      <form onSubmit={e=> onSubmit(e)}>
        
        
        

     
        <input type="email" name="email" value={email} placeholder="Email Adress" onChange={e=> onChange(e)}/><br />

          
    
        <input type="password" name="password" value={password} placeholder="Password" autoComplete="true" onChange={e=> onChange(e)}/><br />
    
        
    
      
        <Button type="submit" variant="danger" className="sign-btn" >
          Login
        </Button>
      
      </form>
    </div>
  );
}

Login.propTypes = {
  
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};
const mapStateToProps = state =>({
  isAuthenticated: state.auth.isAuthenticated
})

 
export default connect(mapStateToProps , {login })(Login)