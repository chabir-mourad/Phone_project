import React, { useEffect } from 'react';
import { useSelector, useDispatch, connect } from 'react-redux';
import Slider from '../Slider/Slider';
import Main from '../Main/Main';

import Navbarmenu from '../Navbarmenu/Navbarmenu';
import Footer from "../Footer/Footer";
import {Card , Col , Container , Row , Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'


import { getProducts} from '../../actions/products';
const Phones = (props) => {
  const isLoading = useSelector((state) => state.products.isLoading);
  const productList = useSelector((state) => state.products.productList);
 
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
    return () => {};
  }, [dispatch]);
 
  return isLoading ? (
    <div className='row justify-content-md-center'>
      <div className='spinner-border' role='status'>
        <span className='sr-only'>Loading...</span>
      </div>
    </div>
  ) : (
    <>
    <Navbarmenu/>
    <Slider/>
<Main/>
   <Container>
   <Row>
  
      {props.inputSearch  ? productList.filter(el=>el.name.toLowerCase().includes(props.inputSearch.toLowerCase().trim()))

      :  productList
.map((phone, key) => (
        
        <Col lg={3} md={6} key={key}>*
        <Link to={`/product/` + phone._id}>
        <Card
                border="light"
                className="item-card"
                style={{ width: "18rem" }}
                key={key}
              >
                <Card.Img variant="top" className="card-img" src={phone.image} />
                <Card.Body>
                  <Card.Title className="card-titre"> {phone.name}</Card.Title>
                  <Card.Text className="card-desc"><span>Stockage :{phone.storage}</span> <span>Ram :{phone.ram}</span> <span>Processeur :{phone.processor}</span></Card.Text>
             
                  <Button variant="primary" value={phone._id} type="submit"> {phone.price}</Button>
               
                </Card.Body>
              </Card>
              </Link>
              </Col>
      ))}
     
      </Row>
      </Container>
      <Footer/>
      </>
  )
 
};

const mapStateToProps = state => {
  return {
    inputSearch : state.products.inputSearch
  }
}

export default connect(mapStateToProps)(Phones);