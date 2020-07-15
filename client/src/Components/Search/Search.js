import React , {useState} from 'react'
import {Form , FormControl ,InputGroup} from 'react-bootstrap'
import { connect } from 'react-redux'
import {searchProduct} from '../../actions/products'

 function Search({searchProduct}) {



    return (
        <Form>
           <InputGroup className="mb-3">
  
  <FormControl type="text" className="form-control" placeholder="Serach A Product"  onChange={(e)=>searchProduct(e.target.value)} autoFocus/>
  <InputGroup.Prepend>
    <InputGroup.Text><i className="fas fa-search" /></InputGroup.Text>
  </InputGroup.Prepend>
</InputGroup>

        </Form>
    )
}


export default connect(null , {searchProduct})(Search)