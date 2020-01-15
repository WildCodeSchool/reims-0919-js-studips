import React from 'react';
import MainThread from './component/MainThread';
import './App.css';
import ConnectForm from './component/ConnectForm';
import LoginForm from './component/LoginForm.js';
import Welcome from './component/Welcome';
import {Switch, Route} from 'react-router-dom';
import Parameter from './component/Parameter';
import Profil from './component/Profil'


function App() {
	return (
		<div className='App'>
			<Switch>
				<Route exact path ='/' component={Welcome} />
				<Route path = '/connect' component={ConnectForm} />
				<Route path='/login' component={LoginForm} />
				<Route path ='/mainthread' component={MainThread} />
				<Route path ='/parameter' component={Parameter} />
				<Route path ='/profil' component ={Profil}/>
      		</Switch>
		</div>
	);
}

export default App;
