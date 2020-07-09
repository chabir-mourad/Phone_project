import React from 'react'

import {Card , Button , Form } from 'react-bootstrap'
 

const Payement = () => {
 

    return (
        <Card style={{ width: '35rem' }}>
     
        <Card.Body>
          <Card.Title>Credit Card Payment</Card.Title>
          <Form.Control type="email" placeholder="Enter email" />
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
       
    )
}
Payement.propTypes={

}
export default Payement 