import React from 'react';
import MainThread from './component/MainThread';
import './App.css';
import LoginForm from './component/LoginForm.js'
import Welcome from './component/Welcome'
import {Switch, Route} from 'react-router-dom'


function App() {
	return (
		<div className='App'>
			<Switch>
				<Route exact path ='/' component={Welcome} />
				<Route path='/login' component={LoginForm} />
				<Route path ='/mainthread' component={MainThread} />
      		</Switch>
		</div>
	);
}

export default App;
