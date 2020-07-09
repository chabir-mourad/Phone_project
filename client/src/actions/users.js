



import axios from 'axios'
import { GET_USERS, GET_USERS_SUCCESS, USERS_NOT_FOUND, DELETE_USER, DELETE_ERROR  , DELETE_USER_REQUEST} from './types';


export const getUsers = () => async dispatch => {
    dispatch({
      type: GET_USERS
    });
    try {
      const usersArray = await axios.get(
        '/users/users'
      );
      dispatch({
        type: GET_USERS_SUCCESS,
        payload: usersArray.data
      });
    } catch (error) {
      dispatch({
        type: USERS_NOT_FOUND,
        payload: error.response.data
      });
    }
  };


  export const deleteUser = (id)=> async dispatch => {



try {
  dispatch({
    type : DELETE_USER_REQUEST 
  })
  
  await axios.delete(`/users/users/${id}`)

  dispatch({
    type : DELETE_USER , 
    payload : id
  })
  dispatch(getUsers())


 

} catch (err) {
  dispatch({
    type: DELETE_ERROR ,
    payload: { msg: err.response.statusText, status: err.response.status }
  });
}





  }