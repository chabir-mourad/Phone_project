import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


import "./Footer.css";
import { Link } from "react-router-dom";
import Copyright from "../Copyright/Copyright";

 


function Footer() {
  return (
    <div className="foter">
      <Container className="footer">
        <Row>
          <Col sm className="part1">
         <h1 className="footer-title"> SmartTech</h1>
            <h4 className="mod-title"> Modalités de paiment</h4>
            <div className="imgs">
            <i className="far fa-credit-card  fa-2x" />
            <i className="fab fa-cc-visa  fa-2x" />
            <i className="fab fa-cc-mastercard  fa-2x"/>
              <br />

              <i className="fab fa-paypal  fa-2x" />
              <i className="fab fa-cc-amazon-pay fa-2x" />
              <i className="fa fa-truck fa-2x"></i>
            </div>
          </Col>
          <Col sm  className="part2">
            <h3 className="serv-titre"> SOCIETE</h3>
            <ul className="serv">
            
                <li>
                  <Link  to="/users/footer/aprops"> <span className="confidentalité"> A Propos de SmartTech  </span></Link>
                </li>
              
          
                <li>
                   <a className="footer-link" href="/users/footer/contacts">
                   <span className="confidentalité">Contacts</span> 
                  </a>
                </li>
              
            
                <li>
                <Link to="/users/footer/confidentialites" ><span className="confidentalité"> Politiques et confidentialités</span></Link>
                </li>
              
            </ul>
          </Col>
          <Col sm className="part3">
            <h3 className="prop-titre"> ASSISTANCE</h3>
            <ul className="prop">
             
                <li>
                  
                  <a className="footer-link" href="/users/footer/achat">
                    
                  <span className="confidentalité"> Comment Acheter </span>
                  </a>
                </li>
              
          
                <li>
                  
                  <a className="footer-link" href="/users/footer/paiements">
                
                  <span className="confidentalité"> Modalités de paiement </span>
                  </a>
                </li>
              
              
                <li>
                
                  <a className="footer-link" href="/users/footer/faq">
                 
                  <span className="confidentalité"> FAQ </span>
                  </a>
                </li>
             
                <li>
             
                  <a className="footer-link" href="/users/footer/annulation">
                  <span className="confidentalité"> Annulation et Retour </span>
                  </a>
                </li>
              
            </ul>
          </Col>
          <Col sm className=" part4">
            <h3 className="cont-titre"> Contacts</h3>
            <ul className=" cont-list">
              <li>Service clientèle</li>
              <li>
                
                <a href="tel: +216 29 851 745 ">+216 29 851 745 </a>
              </li>
            </ul>
            <ul className="email-list">
              <li>Email</li>
              <li>
                
                <a href="mailto:SmartTech.tn@gmail.com">
                  SmartTech.tn@gmail.com
                </a>
              </li>
            </ul>

            <ul>
              <li>Réseaux sociaux</li>

             <li><i className="fab fa-facebook fa-2x" />
              <i className="fab fa-youtube fa-2x" />
              <i className="fab fa-instagram fa-2x" /></li>
            </ul>
          </Col>
        </Row>
      </Container>
    <Copyright/>
    </div>
  );
}
export default Footer;