import { GET_USERS, GET_USERS_SUCCESS, USERS_NOT_FOUND, DELETE_USER, DELETE_ERROR, DELETE_USER_REQUEST  } from "../actions/types";




const initialState = {
    usersList: [],
    user: {},
    isLoading: false,
    error: [],
    isDeleted : false
     

   
  };
  

  const users = (state = initialState, { type, payload }) => {
    
    switch (type) {
      case GET_USERS:
        return {
          ...state,
          isLoading: true
        
        };
      case GET_USERS_SUCCESS:
        return {
          ...state,
          isLoading: false,
          usersList: payload 
          
        };
      case USERS_NOT_FOUND:
        return {
          ...state,
          isLoading: false,
          error: payload
        }; 
        case DELETE_USER_REQUEST:
          return {
            ...state,
            isLoading: true ,
            isDeleted : false
          
          };
        case DELETE_USER : 
        return {
          ...state ,
          isLoading : false ,
          userList : [state.usersList.filter(user=> user.id !== payload)] ,
          isDeleted : true

        }
      case DELETE_ERROR : 
      return {
        ...state ,
        isLoading: false,
        error : payload  ,
        isDeleted :false
      }

default : return state
    }
}

export default users