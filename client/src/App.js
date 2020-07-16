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
import Loginadmin from './Components/AuthAdmin/Loginadmin'
import EditableTable from './Components/DashboaardP&U/Dashboard';
import ApropSmart from './Components/AproposSmart/ApropsSmart';
import Contacts from './Components/Contacts/Contacts';
import Politiques from './Components/Politique/Politiques';
import Paiements from './Components/Paiments/Paiements';
import Annulation from './Components/Annulation/Annulation';
import FAQ from './Components/FAQ/FAQ'
import Achat from './Components/Achat/Achat';
 

 


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
<Route path='/admin' component={Loginadmin}/>

<Route  path="/dashboard" component={EditableTable}/>
<Route path='/users/footer/aprops' component={ApropSmart} />
<Route  path='/users/footer/contacts' component={Contacts} />
<Route path="/users/footer/confidentialites" component={Politiques} />
<Route exact path="/users/footer/paiements" component={Paiements}/>
<Route path="/users/footer/faq" component={FAQ}/>
<Route path="/users/footer/annulation" component={Annulation}/>
<Route path="/users/footer/achat" component={Achat}/>

</Switch>

{/* <Copyright/> */}
 


</BrowserRouter>






















    </Provider>
    );
    }
	

    export default App