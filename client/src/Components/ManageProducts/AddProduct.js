import React , {useState} from 'react'
import {Modal , Button ,FormControl , Form} from 'react-bootstrap'

import PropTypes from 'prop-types';
import {addProduct} from '../../actions/products'
import { connect } from 'react-redux'
import './addProduct.css'
function AddProduct({addProduct}) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [formData, setFormData] = useState({
        name :"" ,
        image:"" ,
        storage:"" ,
        ram:"" ,
        processor:"" ,
        price: "" 
  })

  const {name , image , storage , ram , processor , price} = formData
 
  const onChange = e=> setFormData({...formData ,[e.target.name] : e.target.value })

  const onSubmit =  e => {
       e.preventDefault();


    addProduct({name , image , storage , ram , processor , price})
   

  }
  
    return (
      <>
        <Button variant="success" onClick={handleShow}>
        <i className="fas fa-plus fa-2x" aria-hidden="true"></i>
        </Button>
  
        <Modal show={show} onHide={handleClose}>
        <Form onSubmit={onSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>Add Product</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          
          <Form.Group controlId="formBasicEmail">
    <Form.Label>Nom du  Product</Form.Label>
  <FormControl aria-label="Default" aria-describedby="inputGroup-sizing-default"   name="name" value={name}  onChange={onChange}/>
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Image du Product</Form.Label>
    <FormControl
aria-label="Default"
aria-describedby="inputGroup-sizing-default" name='image' value={image}  onChange={e=> onChange(e)}
/>
</Form.Group>
 <Form.Group controlId="formBasicEmail">
    <Form.Label>Stockage du Produit</Form.Label>
    <FormControl
aria-label="Default"
aria-describedby="inputGroup-sizing-default" name='storage' value={storage}  onChange={e=> onChange(e)}
/>
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Ram du Produit</Form.Label>
    <FormControl aria-label="Default" aria-describedby="inputGroup-sizing-default" value={ram} name="ram" onChange={e=> onChange(e)}
/>
    </Form.Group>
    <Form.Group controlId="formBasicEmail">
    <Form.Label>Processeur du Produit</Form.Label>
   
    <FormControl
aria-label="Default"
aria-describedby="inputGroup-sizing-default" value={processor} name="processor" onChange={e=> onChange(e)}
/>
   </Form.Group>
   <Form.Group controlId="formBasicEmail">
    <Form.Label>Prix du Produit</Form.Label>
    <FormControl
aria-label="Default"
aria-describedby="inputGroup-sizing-default" value={price} name="price" onChange={e=> onChange(e)}
/>
  </Form.Group>
   

 

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="success" type="submit" onClick={handleClose}>
              Save Changes
            </Button>
           
          </Modal.Footer>
          </Form>
        </Modal>
      </>
    );
  }
  
  AddProduct.prototype = {
    addProduct : PropTypes.func.isRequired
}
  export default connect(null , {addProduct}) (AddProduct)