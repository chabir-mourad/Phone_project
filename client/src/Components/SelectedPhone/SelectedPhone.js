import React ,{useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './SelectedPhone.css'
import "bootstrap/dist/css/bootstrap.min.css"

import {Card , Button, Container,Col,Row} from 'react-bootstrap'


import { getProductsById } from '../../actions/products'
import {Link} from 'react-router-dom'






const SelectedPhone=(props)=> {

    const products = useSelector((state) => state.products);
    const phone = useSelector(state=>state.products.phone)
    
     const id =props.match.params.id

    const {isLoading  } = products
   

 
 
    const dispatch = useDispatch();
    
      useEffect(() => {
      


        dispatch(getProductsById(id));
        return () => {
    }
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [dispatch]);
      
    
      return isLoading ? (
       
        <div className='row justify-content-md-center'>
          <div className='spinner-border' role='status'>
            <span className='sr-only'>Loading...</span>
          </div>
        </div>
     
       
      )  : (
     <Container className="hbo" >
       <Row>
         <Col >
            <Card border="light" className="select-item" style={{ width: "18rem" }}>
                    <Card.Img variant="top" className="select-img" src={phone.image} />
                    <Card.Body className="corps-select">
                      <Card.Title className="select-titre"> {phone.name}</Card.Title>
                      <Card.Text className="select-desc"><span>Stockage :{phone.storage}</span> <span>Ram :{phone.ram}</span> <span>Processeur :{phone.processor}</span></Card.Text>
                     <div className="selects-btn">
                      <Button variant="primary" className="price-select">{phone.price}</Button> 
                      <Link to ={"/payement/" + phone._id}>
                      <Button variant="success" className="acheter-select"> <i className="fas fa-shopping-cart"/> Acheter </Button>
                      </Link>
                      </div>
                    
                    </Card.Body>
                  </Card>
                  </Col>
                  <Col>
                 <div  className="select-carac">
                  <Card.Text> <span className="fiche">Fiche Technique: </span>{phone.description} </Card.Text>
                  </div>
                  </Col>
                  </Row>
                  </Container>
             
      )
    }



export default SelectedPhone;