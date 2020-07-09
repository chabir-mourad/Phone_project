import {GET_PRODUCTS , GET_PRODUCTS_SUCCESS , PRODUCTS_NOT_FOUND , GET_PRODUCTS_BY_ID , GET_PRODUCTS_SUCCESS_BY_ID , GET_PRODUCTS_FAIL_BY_ID, ADD_PRODUCT, ADD_ERROR, DELETE_PRODUCT , DELETE_PRODUCT_ERROR , ADD_REQUEST} from './types' 

import axios from 'axios'

export const getProducts = () => async dispatch => {
    dispatch({
      type: GET_PRODUCTS
    });
    try {
      const productArray = await axios.get(
        '/admin/phones'
      )
      dispatch({
        type: GET_PRODUCTS_SUCCESS,
        payload: productArray.data
      });
    } catch (error) {
      dispatch({
        type: PRODUCTS_NOT_FOUND,
        payload: error.response.data
      });
    }
  };


export const getProductsById = (id) => async dispatch => {
  dispatch({
    type : GET_PRODUCTS_BY_ID
    
  })
 try {
  const phone = await axios.get('/admin/phones/' + id)

  
  dispatch({
    type : GET_PRODUCTS_SUCCESS_BY_ID ,
    payload :  phone.data
  })

 } catch (err) {
   dispatch({
     type  : GET_PRODUCTS_FAIL_BY_ID,
     payload: { msg: err.response.statusText, status: err.response.status }
   })
 }
  };
  

// Ajouter Un Produit 



  export const addProduct =({name,price,image,storage,ram,processor})=> async dispatch=> {

    const config = {
        headers : {
            'Content-Type' : "application/json"
        }
    }
    
    const body = JSON.stringify({name,price,image,storage,ram,processor})
    
    
    
    try {
      dispatch({
        type : ADD_REQUEST    
    })

    
        const res = await axios.post('/admin/phones/add' , body , config)
    
        dispatch({
            type : ADD_PRODUCT,
            payload : res.data
        })
    
     dispatch(getProducts());
        
    } catch (err) {
      dispatch({
        type: ADD_ERROR ,
        payload : { msg: err.response.statusText, status: err.response.status }
      })
     
    
    }
    
    }





export const deleteProduct = (id)=> async dispatch => {



      try {
        
        await axios.delete(`/admin/phones/delete/${id}`)
      
        dispatch({
          type : DELETE_PRODUCT , 
          payload : id
        })
        dispatch(getProducts())
      
      } catch (err) {
        dispatch({
          type: DELETE_PRODUCT_ERROR ,
          payload: { msg: err.response.statusText, status: err.response.status }
        });
      }
      
      
      
      
      
        }



    