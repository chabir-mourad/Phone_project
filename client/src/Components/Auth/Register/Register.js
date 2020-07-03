import React  , {useState}from "react";
import { Button} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Register.css";
// import axios from  'axios'
import {connect} from 'react-redux'
import {setAlert} from '../../../actions/alert'
import {register} from '../../../actions/auth'
import PropTypes from 'prop-types';
import Alert from '../../Alert/Alert'
import {Redirect} from 'react-router-dom'



 const Register =({setAlert , register , isAuthenticated})=>  {
  
    const [formData, setFormData] = useState({
         name :"" ,
         email:"" ,
          password:"" ,
          adress:"" ,
           zipCode:"" ,
           phoneNumber: "" 
    })

  const {name , email , zipCode , phoneNumber , adress , password} = formData

 
const onChange = e=> setFormData({...formData ,[e.target.name] : e.target.value })

const onSubmit =async e=> {
    e.preventDefault()

register({name , email , zipCode , phoneNumber , adress , password})




}

// Redirect if login
if (isAuthenticated) {
  return <Redirect to="/SelectedPhone" />
}


  return (
    <div className="reg-container">
<Alert />
      <h1 className="reg-title"> REGISTER</h1> 
      <form onSubmit={e=> onSubmit(e)}>
        
        <input type="text"  name="name" value={name}  onChange={e=> onChange(e)}/><br />
        

     
        <input type="email" name="email" value={email} placeholder="Email Adress" onChange={e=> onChange(e)}/><br />

          
    
        <input type="password" name="password" value={password} placeholder="Password" autoComplete="true" onChange={e=> onChange(e)}/><br />
    
        
        <input type="text"  name="adress" value={adress} onChange={e=> onChange(e)}/><br />
        
        <input  value={phoneNumber} name="phoneNumber"  onChange={e=> onChange(e)}/> <br />
    
        <input  value={zipCode} name="zipCode" onChange={e=> onChange(e)}/> <br />
        <Button type="submit" variant="danger" className="sign-btn" >
          Register
        </Button>
      
      </form>
    </div>
  );
}

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps =state=> ({
  isAuthenticated: state.auth.isAuthenticated
})

 
export default connect(mapStateToProps,{setAlert , register})(Register)