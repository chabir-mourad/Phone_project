import React  , {useState , Fragment}from "react";
import { Button , Card , Form , InputGroup , FormControl} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Register.css";
// import axios from  'axios'
import {connect} from 'react-redux'
import {setAlert} from '../../../actions/alert'
import {register} from '../../../actions/auth'
import PropTypes from 'prop-types';
// import Alert from '../../Alert/Alert'
import {Redirect , Link} from 'react-router-dom'
import '../Register/Register.css'


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
  if (zipCode.length <4) {
    setAlert("zip Code can not have less then 4 Numbers" , "danger")
  }
  else {
   
  
    register({name , email , zipCode , phoneNumber , adress , password})
  }


}

if (isAuthenticated) {
 return <Redirect to="/payement"></Redirect>
}





  return (
    <Fragment>
    <div className="register-page" >
    
    <Card  bg={'Success'.toLowerCase()} style={{ width: '30rem' }}>
    <Card.Header>
      <h3 className="title-register">Registration-Form</h3>
     </Card.Header>
      <Card.Body>
      <hr></hr>
  <Form onSubmit={e=> onSubmit(e)}>
  <InputGroup className="mb-3">
  <Form.Label>Username : </Form.Label>
  <FormControl
    placeholder="Enter your Name"
    aria-label="Username"
    aria-describedby="basic-addon1" name="name" value={name}  onChange={e=> onChange(e)}
  />
</InputGroup>
 
<InputGroup className="mb-3">
<Form.Label>Email adress:</Form.Label>
  
  <Form.Control type="email" 
  placeholder="Enter your Email"
  aria-describedby="basic-addon1" name="email" value={email}  onChange={e=> onChange(e)} />

</InputGroup>
<InputGroup className="mb-3">
<Form.Label>Password :</Form.Label>
  
  <Form.Control type="password" 
  placeholder="Enter your Password"
  aria-describedby="basic-addon1" name="password" value={password}  onChange={e=> onChange(e)} />

</InputGroup>
<InputGroup className="mb-3">
<Form.Label> Address</Form.Label>
  
  <Form.Control type="adress" 
  placeholder="Enter your Adress"
  aria-describedby="basic-addon1 " name="adress" value={adress}  onChange={e=> onChange(e)}/>

</InputGroup>
<InputGroup className="mb-3">
<Form.Label>Code postal  : </Form.Label>
  
  <Form.Control type="adress" 
  placeholder="Enter your zipCode"
  aria-describedby="basic-addon1" name="zipCode" value={zipCode}  onChange={e=> onChange(e)} />

</InputGroup>
<InputGroup className="mb-3">
<Form.Label>Téléphone mobile  :</Form.Label>
  
  <Form.Control type="phone" 
  placeholder="Enter your PhoneNumber"
  aria-describedby="basic-addon1"  name="phoneNumber" value={phoneNumber}  onChange={e=> onChange(e)}/>

</InputGroup>
<Button variant="warning" type="submit" className="btn-register" >
  Register
</Button>
</Form>
</Card.Body>
 
  <Card.Footer>
    
<span>
DÉJÀ INSCRIT?

</span> <span>
   <Link to="/login">Login</Link>
</span>



</Card.Footer>

  
  </Card>

</div>
</Fragment>
    
    
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