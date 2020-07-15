import {GET_PRODUCTS , GET_PRODUCTS_SUCCESS , PRODUCTS_NOT_FOUND , GET_PRODUCTS_BY_ID , GET_PRODUCTS_SUCCESS_BY_ID , GET_PRODUCTS_FAIL_BY_ID, ADD_PRODUCT, ADD_ERROR, DELETE_PRODUCT , DELETE_PRODUCT_ERROR , ADD_REQUEST, UPDATE_PRODUCT, UPDATE_PRODUCT_ERROR, SEARCH_PRODUCT, SEARCH_PRODUCT_FAIL , SEARCH_REQUEST} from './types' 
import {setAlert} from './alert'
import axios from 'axios'

export const getProducts = () => async dispatch => {
    dispatch({
      type: GET_PRODUCTS
    })
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
  let phone = await axios.get(`/admin/phones/${id}`)

  
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

    dispatch({
      type : ADD_REQUEST    
  })
    
    try {
      const config = {
        headers : {
            'Content-Type' : "application/json"
        }
    }
    
    const body = JSON.stringify({name,price,image,storage,ram,processor})
    
      const res = await axios.post('/admin/phones/add' , body , config)

    
       
    
        dispatch({
            type : ADD_PRODUCT,
            payload : res.data
        })
    
     dispatch(getProducts());
        
    } catch (err) {
      const errors = err.response.data.errors

      if (errors) {
          errors.forEach(error => { dispatch(setAlert(error.msg))
              
          });
      }
         dispatch({
             type : ADD_ERROR,
            
         })    
     
    
    }
    
    }


// delete Product


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



// Edit Product
        export const editProduct = (id , updatedProduct)=> async dispatch => {

          try {
            
         const res =  await axios.put(`/admin/phones/update/${id}` , updatedProduct)
          
            dispatch({
              type : UPDATE_PRODUCT , 
              payload : res.data
            })
            dispatch(getProducts())
          
          } catch (err) {
            dispatch({
              type: UPDATE_PRODUCT_ERROR ,
              payload: { msg: err.response.statusText, status: err.response.status }
            });
          }
          
          
          
          
          
            }
      


 // Filter Products



 export const searchProduct = (payload)=> async dispatch => {

  try {
  
        
 const res =  await axios.get(`/admin/phone?name=${payload}`)
dispatch({
      type : SEARCH_PRODUCT , 
       payload
    })
    
  
  } catch (err) {
    dispatch({
      type: SEARCH_PRODUCT_FAIL ,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
  
  
  
  
  
    }
