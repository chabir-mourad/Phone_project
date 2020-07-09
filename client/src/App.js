import React  , { useEffect}from 'react';
import setAuthToken  from './globalHeader/setAuthToken'

import './App.css';


import Register from './Components/Auth/Register/Register';
// import Login from './Components/Auth/Login/Login'
import Phones from './Components/Phones/Phones';
import { BrowserRouter  , Route , Switch } from 'react-router-dom';
import SelectedPhone from './Components/SelectedPhone/SelectedPhone'
// Redux config
import {Provider} from 'react-redux'
import store from '../src/store'
import Login from './Components/Auth/Login/Login';
import Payement from './Components/payement/Payement';
 import PrivateRoute from './Components/routing/PrivateRouter';
import { loadUser } from './actions/auth';
import Alert from './Components/Alert/Alert'
import Loginamin from './Components/AuthAdmin/Loginadmin'
import EditableTable from './Components/DashboaardP&U/Dashboard';
 


if (localStorage.token) {
    setAuthToken(localStorage.token)
}



function App() {

  
 

   

    useEffect(() => {
        store.dispatch(loadUser())

        return () => {
         
        }
    }, [])

  
		return (
 <Provider store={store}>
     


<BrowserRouter>
<Alert/>
<Switch>
<Route exact path ="/" component={Phones} />
<Route path="/product/:id" component={SelectedPhone}/>

<Route exact path="/register" render={(props) => <Register {...props} /> }/>
<Route exact path="/login" render={(props) => <Login {...props} /> }/>
<PrivateRoute exact path="/payement" component ={Payement}/>
<Route path='/admin' component={Loginamin}/>

<Route  path="/dashboard" component={EditableTable}/>

{/* <Route path="/add" component={addProduct} /> */}
</Switch>


 


</BrowserRouter>






















    </Provider>
    );
    }
	

    export default App