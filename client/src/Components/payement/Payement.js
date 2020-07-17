import React  ,{useEffect} from 'react'

import {Card, Container,Col ,Row} from 'react-bootstrap'
import { useSelector,useDispatch } from 'react-redux'
import { getProductsById } from '../../actions/products'
import { Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import '../payement/Payment.css'


 
 

const Payement = (props) => {
  const products = useSelector((state) => state.products)
  const phone = useSelector(state=>state.products.phone)
  const id =props.match.params.id
  const {isLoading } = products
  const dispatch = useDispatch();
    
      useEffect(() => {
        
        dispatch(getProductsById(id));
        return () => {
    }
      // eslint-disable-next-line
      }, [dispatch]);
 

    return isLoading ? (
       
        <div className='row justify-content-md-center'>
          <div className='spinner-border' role='status'>
            <span className='sr-only'>Loading...</span>
          </div>
        </div>
     
       
      )  : (
      
         
         
         <Container className="contenu">
           <Row>
          <Col >
          <Card   style={{ width: '18rem' }}>
         <Card.Img variant="top" className="selection-img" src={phone.image} />
                    <Card.Body className="corps-selection">
                      <Card.Title className="selection-titre"> {phone.name}</Card.Title>
                      <Card.Text className="peyement-titre">  <span className="prix-titre">Price:</span> {phone.price} </Card.Text>        
         
        </Card.Body>
      </Card>
       </Col>
       
      <Col >
      <div className="elwess"> 
<Link to ='/'>
     <Button variant="success" size="lg" className="poursuivre-btn">
      Poursuivre Mes Achats
    </Button>
      </Link>
     
      <Button variant="danger" size="lg" className="continuer-btn">
      Continuer La Commande
    </Button>
    </div>
    </Col>
         </Row>
         </Container>
         
       
    )
}

export default Payement ;