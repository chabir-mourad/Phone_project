import React from 'react'
import { Container ,Col,Row} from  'react-bootstrap'
import Footer from '../Footer/Footer'
import './Contacts.css'

function Contacts() {
    return (
    <div className="contact-box">
            <Container className="box">
                <Row >
                <h1 className="t2"> Contacts</h1> 
                <Col sm  className="box1"> 
                
                <h3  className="t1"> Information Génerale:</h3>
                <div className="para">
                <p>  Ben Ftima Wassim 28 ans<br/> Tozeur/Tunis</p> 
                <p>  Chabir Mourad 26 ans<br/> Gabes/Tunis</p> 
                </div>
                </Col>
                <Col sm className="box2" >
                    <h3 className="t1"> Soutien à la Clientèle:</h3>
                    <div className="box2-1">
                    <a className="link" href="mailto:SmartTech.tn@gmail.com"> SmartTech.tn@gmail.com</a>
                    <p className="tel-para"> Tél: 29851745</p>
                    <p> Du Lundi au Vendredi,</p>
                    <p> de 08h30 à 14h30</p>
                    </div>
                </Col>
                <Col sm  className="box3">
                    <h3 className="t1"> La gestion des Garanties:</h3>
                    <p className="parap"> En ce qui concerne l'adresse postale correcte  
                    pour retourner la marchandise et le service après 
                     vente veuillez contacter notre service à la clientèle sur:</p>
                     <a  className="link" href="mailto:SmartTech.tn@gmail.com"> SmartTech.tn@gmail.com</a>

                </Col>
                </Row>
            </Container>
            <Footer/>
            </div>
            
    )
}

export default Contacts