import React from 'react'
import './Main.css'
import {Container , Col , Row} from 'react-bootstrap'

function Main() {
    return (
       

        
         <Container>
         <Row>
      
    
       <h1 className="smartphones"> SMARTPHONES</h1>

         </Row>
         <Row>
         <p className="smartech_definition"> SmartTech est une société mettant en vente les meilleurs smartphones en Tunisie.<br/> 
         Vous pouvez découvrir tous ces produits sur notre site marchand de SmartTech </p>
         </Row>
  <Row>
    <Col md={6}> <h1 className="promotion"> LES PROMOTIONS</h1></Col>
    <Col md={6}><h1  className="newProduct"> LES NOUVEAUX PRODUITS</h1></Col>
  </Row>
  
</Container>
        
            
    

      
    )
}

export default Main