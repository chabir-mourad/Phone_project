import React  , { Component}from 'react';

import './App.css';


import Register from './Components/Auth/Register/Register';
// import Login from './Components/Auth/Login/Login'
import Phones from './Components/Phones/Phones';
import { BrowserRouter  , Route , Switch } from 'react-router-dom';
import SelectedPhone from './Components/SelectedPhone/SelectedPhone'
// Redux config
import {Provider} from 'react-redux'
import store from '../src/store'









export default class App extends Component {

  

 render(){    


  
		return (
 <Provider store={store}>
     


<BrowserRouter>
<Switch>
<Route exact path ="/" component={Phones} />


<Route exact path="/register" render={(props) => <Register {...props} /> }/>


<Route path="/product/:id" render={(props) => <SelectedPhone {...props} /> }/>

 
</Switch>

</BrowserRouter>






















    </Provider>
    );
    }
	}

