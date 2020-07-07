import React from 'react'
import './Main.css'
import {Container , Col , Row} from 'react-bootstrap'

function Main() {
    return (
       

        
         <Container>
         <Row>
      
    
       <h1 className="title1"> SMARTPHONES</h1>

         </Row>
         <Row>
         <p className="parag"> SmartTech est une société mettant en vente les meilleurs smartphones en Tunisie.<br/> 
         Vous pouvez découvrir tous ces produits sur notre site marchand de SmartTech </p>
         </Row>
  <Row>
    <Col sm={6}> <h1 className="title2"> LES PROMOTIONS</h1></Col>
    <Col sm={6}><h1  className="title3"> LES NOUVEAUX PRODUITS</h1></Col>
  </Row>
  
</Container>
        
            
    

      
    )
}

export default Main