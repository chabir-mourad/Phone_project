import {LOGIN_FAIL_ADMIN , LOGIN_SUCCESS_ADMIN, ADMIN_LOADED} from '../actions/types'





const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticatedAdmin: null,
    loading: true,
    admin : null
  }





  export default function (state = initialState, {payload , type} ) {

    switch (type) {
        case ADMIN_LOADED:
            return {
                ...state ,
                ...payload ,
                isAuthenticatedAdmin: true,
                loading: false ,
               
            }
            
            case LOGIN_SUCCESS_ADMIN : 
            localStorage.setItem('token' , payload.token)
            return {
                
                ...state ,
                ...payload ,
                isAuthenticatedAdmin: true,
                loading: false ,
            
            }
     case LOGIN_FAIL_ADMIN : 
      localStorage.removeItem('token')
      return {
        ...state,
        token : null,
        isAuthenticatedAdmin: false,
        loading: false
        }
    
        default:
            return state;
    }


  }

