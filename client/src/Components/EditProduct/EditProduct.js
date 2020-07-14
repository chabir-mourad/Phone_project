import React , {useState} from 'react'
import {Modal , Button , Form} from 'react-bootstrap'

import { editProduct } from '../../actions/products';
 import { connect } from "react-redux";
 
function EditProduct({editProduct} ) {
    const [show, setShow ] = useState(false);
   
   

    const [formData, setFormData] = useState({
        name :"" ,
        image:"" ,
        storage:"" ,
        ram:"" ,
        processor:"" ,
        price: "" ,
      
  })
  
  


  const {name , image , storage , ram , processor , price} = formData
  const onChange = e=> setFormData({...formData ,[e.target.name] : e.target.value })

  const onSubmit =  e => {
    e.preventDefault();


 editProduct( formData)

}
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
   
        <Button variant="primary" onClick={handleShow}>
          Edit
        </Button>
 
  
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Edit Product</Modal.Title>
          </Modal.Header>
          <Form onSubmit={onSubmit}>
          <Modal.Body>
         
          <Form.Group>
    <Form.Label>name</Form.Label>
    <Form.Control name="name" type="text" placeholder="Edit Name" onChange={e=> onChange(e)} value={name} />
   
  </Form.Group>
  <Form.Group>
    <Form.Label>image</Form.Label>
    <Form.Control name="image" type="text" placeholder="Edit Image Adress"  onChange={e=> onChange(e)}  value={image}/>
    
  </Form.Group>
  <Form.Group >
    <Form.Label>Ram</Form.Label>
    <Form.Control name="ram" type="text" placeholder="Edit Ram"  onChange={e=> onChange(e)} value={ram}/>
    
  </Form.Group>
  <Form.Group >
    <Form.Label>processor</Form.Label>
    <Form.Control type="text" name="processor" placeholder="Edit Proceessor"  onChange={e=> onChange(e)} value={processor}/>
    
  
  </Form.Group>


  <Form.Group>
    <Form.Label>Storage</Form.Label>
    <Form.Control type="text" name="storage" placeholder="Edit storage" onChange={e=> onChange(e)} value={storage} />
    
  
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>price</Form.Label>
    <Form.Control type="text" name="price" placeholder="Edit Price"  onChange={e=> onChange(e)} value={price}/>
  
  </Form.Group>
  




          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleClose}>
              Close
            </Button>
            <Button variant="warning" type="submit"  onClick={handleClose}>Save Changes</Button>
          
          </Modal.Footer>
          </Form>
        </Modal>
      </>
    );
  }



  
export default  connect(null , {editProduct})( EditProduct)