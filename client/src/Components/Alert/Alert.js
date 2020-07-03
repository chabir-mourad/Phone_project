import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {Alert} from 'react-bootstrap'

const Alerts = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map(alert => (
  
 <Alert key={alert.id} variant='warning'>
    {alert.msg}
  </Alert>
  ));

Alerts.propTypes = {
  alerts: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  alerts: state.alert
});

export default connect(mapStateToProps)(Alerts);