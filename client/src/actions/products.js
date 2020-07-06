import {GET_PRODUCTS , GET_PRODUCTS_SUCCESS , PRODUCTS_NOT_FOUND , GET_PRODUCTS_BY_ID , GET_PRODUCTS_SUCCESS_BY_ID , GET_PRODUCTS_FAIL_BY_ID} from './types' 

import axios from 'axios'

export const getProducts = () => async dispatch => {
    dispatch({
      type: GET_PRODUCTS
    });
    try {
      const productArray = await axios.get(
        '/admin/phones'
      );
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
 try {
  dispatch({
    type : GET_PRODUCTS_BY_ID,
    payload : id 
  })
  const {data} = await axios.get('/admin/phones/' + id)
  dispatch({
    type : GET_PRODUCTS_SUCCESS_BY_ID ,
    payload : data
  })
 } catch (error) {
   dispatch({
     type  : GET_PRODUCTS_FAIL_BY_ID,
     payload : error.message
   })
 }
  };
  