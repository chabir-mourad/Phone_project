
import {PRODUCTS_NOT_FOUND , GET_PRODUCTS_SUCCESS ,GET_PRODUCTS, GET_PRODUCTS_BY_ID, GET_PRODUCTS_SUCCESS_BY_ID ,GET_PRODUCTS_FAIL_BY_ID} from '../actions/types'





const initialState = {
    productList: [],
    product: {},
    isLoading: false,
    error: [],
phone : {}
   
  };
  

  const products = (state = initialState, { type, payload }) => {
    
    switch (type) {
      case GET_PRODUCTS:
        return {
          ...state,
          isLoading: true
        };
      case GET_PRODUCTS_SUCCESS:
        return {
          ...state,
          isLoading: false,
          productList: payload
        };
      case PRODUCTS_NOT_FOUND:
        return {
          ...state,
          isLoading: false,
          error: payload
        }; 
        case GET_PRODUCTS_BY_ID:
          return {
            ...state,
            isLoading: true
          };
          case GET_PRODUCTS_SUCCESS_BY_ID:
            return {
              ...state,
              isLoading: false,
              phone : payload
            };
          case GET_PRODUCTS_FAIL_BY_ID:
            return {
              ...state,
              isLoading: false,
              error: payload
            }; 


default : return state
    }
}

export default products