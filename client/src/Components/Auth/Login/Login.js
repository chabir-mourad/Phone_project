import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect  } from 'react-redux';
import PropTypes from 'prop-types';
import '../Login/Login.css'
import { login } from '../../../actions/auth';
import {Form , Card , InputGroup , FormControl} from 'react-bootstrap'
import { setAlert } from '../../../actions/alert';
import { Button } from 'react-bootstrap';
const Login = ({ login, isAuthenticated  }) => {

  
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();

    login(email, password);
  }


  if (isAuthenticated){
    
    return <Redirect to="/payement/:id"/>;
  }

 

  return (
    <Fragment>
    <div className="login_page">
    <Card  className="bf"style={{ width: '18rem' }}>
    <Card.Header>
        <h3>Sign In</h3>
      
        </Card.Header>
    <Card.Body>
    <Form onSubmit={onSubmit}>
    <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text id="basic-addon1"><i className="fas fa-user" /></InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl
      placeholder="Enter your Email" name="email"
      aria-label="Username"
      aria-describedby="basic-addon1"
   value={email} onChange={onChange} />
  </InputGroup>
   


  
  <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text id="basic-addon1"><i className="fas fa-key"/></InputGroup.Text>
    </InputGroup.Prepend>
    
    <Form.Control type="password" 
    placeholder="Enter your Password" name="password"
    aria-describedby="basic-addon1" value={password} onChange={onChange} />
  
  </InputGroup>
  <Form.Group controlId="formBasicCheckbox" className="forms">
    <Form.Check type="checkbox" /> <p className="cookies_handler" >Remember Me</p> 
    
  </Form.Group>
  <Button variant="warning" type="submit" className="btn-login">
    Login
  </Button>
</Form>
    </Card.Body>
    <Card.Footer>
    <div class="d-flex justify-content-center links">
        <span className="link_registerPage">  Don't have an account?</span> <Link to="/register">Sign Up</Link>
        </div>
        
    </Card.Footer>
  </Card>
  </div>
  </Fragment>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
  setAlert: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
  
});

export default connect(mapStateToProps, { login , setAlert })(Login);