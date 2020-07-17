import React, { Fragment } from 'react'

import "bootstrap/dist/css/bootstrap.min.css";
import {Navbar,Button , Nav } from 'react-bootstrap' ;
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {logout} from '../../actions/auth';

import './Navbarmenu.css'
import { Link } from 'react-router-dom';
import Search from '../Search/Search';

import img from './smartphone.png'




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
<Button variant="danger"><i class="fas fa-sign-in-alt" />{' '}LogIn</Button>
</Link>

<Link to="/register">
<Button variant="info" className="btn-inscription"> <i class="fas fa-user-plus" /> {' '}Inscription</Button></Link>
</>




)
  
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            
    <Navbar.Brand href="/"><img className="img_icon" src={img} alt="smartech_icon"/><span className="company_name">SmartTech</span> </Navbar.Brand>
  
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
 
    <Nav className="mr-auto">
<Search/>
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