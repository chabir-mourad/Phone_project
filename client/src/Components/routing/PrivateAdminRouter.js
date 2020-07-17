import React from 'react'
import { Route,Redirect } from 'react-router-dom';
import PropTypes from 'prop-types'
import {connect } from 'react-redux';

function PrivateAdminRouter({ component : Component, admin:{isAuthenticatedAdmin,loading},...rest}) {
    return (
        <div>
             <Route {...rest} render={ props=> !isAuthenticatedAdmin && !loading ?(<Redirect to ='/admin'/>):(<Component {...props}/> )}/>
        </div>
    )
}

PrivateAdminRouter.prototype = {
    admin : PropTypes.object.isRequired
}

const mapStateToProps= state=>({
    admin:state.admin
});

export default connect(mapStateToProps)(PrivateAdminRouter)
