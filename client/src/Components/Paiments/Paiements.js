import React, { Fragment } from 'react'
import Footer from '../Footer/Footer'
import { Container,Col,Row} from 'react-bootstrap'
import './Paiements.css'
import Navbarmenu from '../Navbarmenu/Navbarmenu'

 function Paiements() {
    return (
        <Fragment>
<Navbarmenu/>
        
        <div className="payer-box">
            <h1 className="mode1"> Modes de paiement</h1>
            <h2  className="mode2"> Pour le moment nous avons 3 modes de paiement:</h2>
            <ol className="order-list">
                <li> Virement bancaire,</li>
                <li> Payer avec un compte PayPal et</li>
                <li> Payer par carte de débit ou carte de crédit.</li>
            </ol>
            <Container>
                  <Col>
                  <Row className="boxes">
                      <h1 className="mode3"> 1. LE VIREMENT BANCAIRE</h1>
                      <div className="global1">
                      <p className="pay-para"> Le Virement bancaire est un mode de paiement que vous pouvez faire hors ligne. Il implique <br/>
                       le transfert de fonds à partir de votre compte bancaire (Euro) sur le compte bancaire de  <br/>
                       SmartTech. Les coordonnées bancaires de SmartTech vous sont envoyées après avoir <br/>
                        validé votre commande. Alors vous pouvez effectuer le paiement dans votre banque ou en <br/>
                         utilisant votre système e-banking (si vous en avez un). </p>
                         <img className="pay-image" src="https://selectra.info/sites/default/files/styles/article_hero/public/field/image/comment-faire-virement.png?itok=FO9gR9C7" alt="virement bancaire"/>
                         </div>
                        </Row>
                        <Row className="boxes">
                       <h1 className="mode3"> 2.PAYER AVEC UN COMPTE PAYPAL</h1>
                       <div className="global">
                       <p  className="pay-para"> Payer avec un compte PayPal est l'un des moyens de paiement le plus largement accepté sur Internet grace à son système <br/>
                        sophistiqué de prévention de la fraude. Lorsque vous êtes redirigé vers la page de PayPal veuillez choisir la première option et <br/>
                         entrer votre adresse e-mail et votre mot de passe afin de vous connecter à votre compte PP où vous pouvez effectuer votre <br/>
                          paiement.</p>
                          <img  className="pay-image" src="https://www.capitaine-banque.com/wp-content/uploads/2016/09/logo-paypal.png" alt="compte paypal"/>
                       </div>
                       </Row>
                       <Row className="boxes">
                           <h1 className="mode3"> 3.PAYER AVEC MASTERCARD /VISA CARD</h1>
                           <div className="global">
                           <p className="pay-para">
                           Payer avec un compte PayPal est l'un des moyens les plus acceptés de payer sur Internet en raison de sa fraude sophistiquée
                           système de prévention. Lorsque vous êtes redirigé vers la page PayPal, vous choisissez la première option et entrez un e-mail et un mot de passe pour vous connecter
                           votre compte PP où vous finissez votre paiement.</p>
                             <img className="pay-image" src="https://w7.pngwing.com/pngs/117/675/png-transparent-visa-and-mastercard-ads-mastercard-credit-card-american-express-visa-debit-card-mastercard-text-payment-logo.png" alt="masterCard et visaCard"/>
                             </div>
                       </Row>
                       </Col>
                       </Container>
                       <Footer/>
        </div>
        </Fragment>
    )
}
export default Paiements