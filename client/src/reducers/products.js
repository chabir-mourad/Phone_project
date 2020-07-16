
import {PRODUCTS_NOT_FOUND , GET_PRODUCTS_SUCCESS ,GET_PRODUCTS, GET_PRODUCTS_BY_ID, GET_PRODUCTS_SUCCESS_BY_ID ,GET_PRODUCTS_FAIL_BY_ID, DELETE_PRODUCT_ERROR, DELETE_PRODUCT,  ADD_PRODUCT , ADD_ERROR , ADD_REQUEST, UPDATE_PRODUCT, UPDATE_PRODUCT_ERROR, SEARCH_PRODUCT, SEARCH_PRODUCT_FAIL} from '../actions/types'





const initialState = {
    productList: [],
    product: {},
    isLoading: false,
    error : null ,
    phone : {}, 
   inputSearch : ''
   
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
            case DELETE_PRODUCT:
              return {
                ...state,
                isLoading: false,
                phone : payload
              };
            case DELETE_PRODUCT_ERROR:
              return {
                ...state,
                isLoading: false,
                error: payload
              };
           case ADD_REQUEST : 
           return {
            ...state , 
            isLoading : true
           }
            case  ADD_PRODUCT  :
              return {
              ...state ,
              isLoading : false ,
              ...payload

            }
            case ADD_ERROR : 
            return {
              ...state ,
              isLoading : false ,
              error : payload
            }
            case UPDATE_PRODUCT : 
            return {
                    ...state ,
                   isLoading : false ,
                   productList:state.productList.map(phone=>
                   phone.id === payload.id ? payload :phone)
            }


        
            case UPDATE_PRODUCT_ERROR :
              return {
                ...state ,
                isLoading : false ,
                error : payload
              }
 
              case SEARCH_PRODUCT : 
              return {
                ...state ,
                isLoading : false ,
                productList :payload
              }
   case SEARCH_PRODUCT_FAIL : 
   return {
  ...state ,
  isLoading :false,

    error: payload
   }
  


default : return state
    }
}

export default products