import axios from 'axios'
import {
    REGISTER_SUCCESS ,
    REGISTER_FAIL,
     AUTH_ERROR,
    USER_LOADED, 
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    LOGOUT
} from './types'

import {setAlert} from './alert' 
import setAuthToken from '../globalHeader/setAuthToken'




//LOAD User 


export const loadUser =() => async dispatch => {
    if (localStorage.token) {
        setAuthToken(localStorage.token)
    }


    try {

        const res =await axios.get('/login/auth')
        dispatch({
            type : USER_LOADED,
            payload :  res.data
        })
        
    } catch (err) {
        dispatch({
            type : AUTH_ERROR
        })
    }
}

// REGISTER User


export const register =({name,email,password,adress,phoneNumber,zipCode})=> async dispatch=> {

const config = {
    headers : {
        'Content-Type' : "application/json"
    }
}

const body = JSON.stringify({name,email,password,adress,phoneNumber,zipCode})



try {
    

    const res = await axios.post('/users/register' , body , config)

    dispatch({
        type : REGISTER_SUCCESS,
        payload : res.data
    })


    dispatch(loadUser())
} catch (err) {
 const errors = err.response.data.errors

 if (errors) {
     errors.forEach(error => { dispatch(setAlert(error.msg))
         
     });
 }
    dispatch({
        type : REGISTER_FAIL,
       
    })    


}

}







// LoGIN User


export const login =(email,password)=> async dispatch=> {

    const config = {
        headers : {
            'Content-Type' : "application/json"
        }
    }
    
    
    const body = { email, password };
    
    
    
    try {
        const res = await axios.post('/login/auth' , body , config)
    
        dispatch({
            type : LOGIN_SUCCESS,
            payload : res.data
            
        })
      
        dispatch(loadUser())
    
    } catch (err) {
     const errors = err.response.data.errors
    
     if (errors) {
        errors.forEach(error => { dispatch(setAlert(error.msg))
            
             
         });
     }
        dispatch({
            type : LOGIN_FAIL,
           
        })    
    
    
    }
    
    }



//Logout  the User
export const logout = () =>  dispatch => {
    dispatch({ type: LOGOUT });
};