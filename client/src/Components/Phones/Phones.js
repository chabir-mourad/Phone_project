import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {Card , Col , Container , Row , Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

import { getProducts } from '../../actions/products';
const Phones = () => {
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
   <Container>
   <Row>
  
      {productList.map((phone, key) => (
        <Col lg={3} md={6} key={key}>
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
                  <Link to={`/${phone._id}`}>
                  <Button variant="primary">{phone.price}</Button>
                  </Link>
                </Card.Body>
              </Card>
              </Col>
      ))}
     
      </Row>
      </Container>
  );
};

export default Phones;