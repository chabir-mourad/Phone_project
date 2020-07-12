import React, { Fragment } from 'react'

import "bootstrap/dist/css/bootstrap.min.css";
import {Navbar,Button , Nav,FormControl } from 'react-bootstrap' ;
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {logout} from '../../actions/auth';

import './Navbarmenu.css'
import { Link } from 'react-router-dom';






const Navbarmenu = ({ auth:{ isAuthenticated,loading},logout})=>{
        const authLinks=(
                <ul>
                     <li>
                     <a onClick={logout} href='#!'>
                      <i className="fas-fa-sign-out-alt"></i> {''}
                      <Button variant="danger">Logout</Button></a>

                     </li>   
                </ul>

        );
  

const guestLinks = (
    

<>
<Link to="/login">
<Button variant="danger"><i className="fas fa-user" />LogIn</Button>
</Link>

<Link to="/register">
<Button variant="info" className="btn-inscription"> <i className="fas fa-user" />Inscription</Button></Link>
</>




)
  
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <i className="fas fa-mobile-alt" />
    <Navbar.Brand href="#home">SmartTech</Navbar.Brand>
  
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
 
    <Nav className="mr-auto">
<FormControl  type="text" placeholder="rechercher" className="mr-sm-2" />
<Button variant="outline-info" className="search-btn"><i className="fas fa-search" /></Button>
</Nav>


{!loading &&( <Fragment>{isAuthenticated ? authLinks : guestLinks} </Fragment>)}
    

</Navbar.Collapse>

</Navbar>


        )
    
}
Navbarmenu.propTypes={
        logout:PropTypes.func.isRequired,
        auth:PropTypes.object.isRequired
};


const mapStateToProps = state=>({
        auth:state.auth

});

export default connect(mapStateToProps,{logout})(Navbarmenu)