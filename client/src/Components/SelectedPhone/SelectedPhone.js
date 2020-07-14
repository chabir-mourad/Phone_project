import React, { useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {Card , Button} from 'react-bootstrap'


import { getProductsById } from '../../actions/products';







const SelectedPhone = (props) => {
  
const products = useSelector((state) => state.products);
const phone = useSelector(state=>state.products.phone)

 const id =props.match.params.id
const {isLoading } = products



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
  
        <Card border="light" className="item-card" style={{ width: "18rem" }}>
       
                <Card.Img variant="top" className="card-img" src={phone.image} />
                <Card.Body>
                  <Card.Title className="card-titre"> {phone.name}</Card.Title>
                  <Card.Text className="card-desc"><span>Stockage :{phone.storage}</span> <span>Ram :{phone.ram}</span> <span>Processeur :{phone.processor}</span></Card.Text>
                 
                  <Button variant="primary">{phone.price}</Button>
                
                </Card.Body>
              </Card>
              
  )
}

export default SelectedPhone;