

import axios from 'axios'
import setAdminToken from '../globalHeader/setAdminToken'
import {setAlert} from './alert'


//LOAD User 

import { ADMIN_LOADED ,    LOGIN_SUCCESS_ADMIN,
    LOGIN_FAIL_ADMIN , AUTH_ADMIN_ERROR} from "./types"


export const loadAdmin =() => async dispatch => {
    if (localStorage.token) {
        setAdminToken(localStorage.token)
    }


    try {

        const res =await axios.get('createAdmin/auth')
        dispatch({
            type : ADMIN_LOADED,
            payload :  res.data
        })
        
    } catch (err) {
        dispatch({
            type : AUTH_ADMIN_ERROR
        })
    }
}


export const loginAdmin =(email,password)=> async dispatch=> {

    const config = {
        headers : {
            'Content-Type' : "application/json"
        }
    }
    
    
    const body = { email, password };
    
    
    
    try {
        const res = await axios.post('/createAdmin/adminInterface' , body , config)
    
        dispatch({
            type : LOGIN_SUCCESS_ADMIN,
            payload : res.data
            
        })
      
        dispatch(loadAdmin())
    
    } catch (err) {
     const errors = err.response.data.errors
    
     if (errors) {
        errors.forEach(error => { dispatch(setAlert(error.msg))
            
             
         });
     }
        dispatch({
            type : LOGIN_FAIL_ADMIN,
           
        })    
    
    
    }
    
    }