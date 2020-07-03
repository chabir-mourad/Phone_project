import React  , {Fragment}from 'react';

import './App.css';

import Slider from './Components/Slider/Slider';
import Main from './Components/Main/Main';
import Phones from './Components/Phones/Phones';

import Footer from './Components/Footer/Footer';
// import Register from './Components/Auth/Register/Register';
// import Login from './Components/Auth/Login/Login'
import { BrowserRouter  , Route , Switch } from 'react-router-dom';
import SelectedPhone from './Components/SelectedPhone/SelectedPhone'
// Redux config
import {Provider} from 'react-redux'
import store from '../src/store'
import Navbarmenu from './Components/Navbarmenu/Navbarmenu';








function App  () {

 


  
		return (
      <Provider store={store}>
     
<Fragment>

<BrowserRouter>
<Switch>
<Route exact path ="/" render="">
<Navbarmenu />
<Slider />
<Main/>

<Phones /> 

<Footer/>



</Route>


<Route
          // exact
          path='/:id'
          render={(props) => <SelectedPhone {...props} />}
        />

 
</Switch>

</BrowserRouter>




















</Fragment>


    </Provider>
		);
	}


export default App;
