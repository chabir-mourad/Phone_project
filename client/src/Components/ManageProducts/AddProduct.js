import React  , {useState}from 'react'
import {FormControl , Button , Form, Col} from 'react-bootstrap'
import PropTypes from 'prop-types';
import {addProduct} from '../../actions/products'
import { connect } from 'react-redux'
// import {setAlert} from '../../actions/alert'
 const  AddProduct =({addProduct})=> {
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
        
        
<Form onSubmit={onSubmit}>
  <Form.Row>
  <Col>
  <FormControl aria-label="Default" aria-describedby="inputGroup-sizing-default"   name="name" value={name}  onChange={onChange}/>
  </Col>
    <Col>
    <FormControl
aria-label="Default"
aria-describedby="inputGroup-sizing-default" name='image' value={image}  onChange={e=> onChange(e)}
/>
    </Col>
    <Col>
    <FormControl
aria-label="Default"
aria-describedby="inputGroup-sizing-default" name='storage' value={storage}  onChange={e=> onChange(e)}
/>
    </Col>
    <Col>
    <FormControl aria-label="Default" aria-describedby="inputGroup-sizing-default" value={ram} name="ram" onChange={e=> onChange(e)}
/>
    </Col>
    <Col>
    <FormControl
aria-label="Default"
aria-describedby="inputGroup-sizing-default" value={processor} name="processor" onChange={e=> onChange(e)}
/>
    </Col>
    <Col>
    <FormControl
aria-label="Default"
aria-describedby="inputGroup-sizing-default" value={price} name='price
' onChange={e=> onChange(e)}
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