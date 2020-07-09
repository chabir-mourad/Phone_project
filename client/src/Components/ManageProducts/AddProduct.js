import React  , {useState}from 'react'
import {FormControl , Button , Form, Col} from 'react-bootstrap'
import PropTypes from 'prop-types';
import {addProduct} from '../../actions/products'
import { connect } from 'react-redux'
 const  AddProduct =({addProduct})=> {
    const [formData, setFormData] = useState({
         name :"" ,
         image:"" ,
         stockage:"" ,
         ram:"" ,
          processeur:"" ,
          prix: "" 
   })

   const {name , image , stockage , ram , processeur , prix} = formData
  
   const onChange = e=> setFormData({...formData ,[e.target.name] : e.target.value })

   const onSubmit = async e => {
        e.preventDefault();


    addProduct({name , image , stockage , ram , processeur , prix})

   }



    return (
        
        
<Form onSubmit={e=>{onSubmit(e)}}>
  <Form.Row>
  <Col>
  <FormControl aria-label="Default" aria-describedby="inputGroup-sizing-default"   name="name" value={name}  onChange={e=> onChange(e)}/>
  </Col>
    <Col>
    <FormControl
aria-label="Default"
aria-describedby="inputGroup-sizing-default" value={image} name='image' onChange={e=> onChange(e)}
/>
    </Col>
    <Col>
    <FormControl
aria-label="Default"
aria-describedby="inputGroup-sizing-default" value={stockage} name='stockage' onChange={e=> onChange(e)}
/>
    </Col>
    <Col>
    <FormControl
aria-label="Default"
aria-describedby="inputGroup-sizing-default" value={ram} name="ram" onChange={e=> onChange(e)}
/>
    </Col>
    <Col>
    <FormControl
aria-label="Default"
aria-describedby="inputGroup-sizing-default" value={processeur} name="processeur" onChange={e=> onChange(e)}
/>
    </Col>
    <Col>
    <FormControl
aria-label="Default"
aria-describedby="inputGroup-sizing-default" value={prix} name='prix' onChange={e=> onChange(e)}
/>
    </Col>
    <Col>
    <Button variant="success" type="submit">Ajouter Produit</Button>

    </Col>
  </Form.Row>
</Form>
       
        

       
   
    )
}


AddProduct.prototype = {
    addProduct : PropTypes.func.isRequired
}


export default connect(null , {addProduct}) (AddProduct)