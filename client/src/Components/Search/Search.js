import React , {useState,useEffect} from 'react'
import {Form , FormControl ,InputGroup} from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import {SEARCH_PRODUCT ,SEARCH_PRODUCT_FAIL} from '../../actions/types'
import "./Search.css"
import axios from 'axios';

function Search() {

const [input, setinput] = useState('');
const dispatch = useDispatch()
useEffect(() => {
const fetch =async()=>{
  try {
    const res = await axios.get(`/admin/phones?name=${input}`)
    
    
dispatch({
  type : SEARCH_PRODUCT , 
   payload : res.data
})
  } catch (err) {
    dispatch({
      type: SEARCH_PRODUCT_FAIL ,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
}
fetch()

}, [input])
    return (
        <Form>
           <InputGroup className="mb-3">
  
  <FormControl type="text" className="form-control" placeholder="Serach A Product"  onChange={(e)=>setinput(e.target.value)} autoFocus/>
  <InputGroup.Prepend>
    <InputGroup.Text><i className="fas fa-search" /></InputGroup.Text>
  </InputGroup.Prepend>
</InputGroup>

        </Form>
    )
}


export default Search