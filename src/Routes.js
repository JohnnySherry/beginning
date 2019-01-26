import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from './Login';
import App from './App';

class Routes extends Component {

	render () {
		return(
         <Router>
            <Switch>
               <Route path='/' exact component = { Login } />
               <Route path='/app' component = { App } />
            </Switch>
         </Router>
		)
	}	
}

export default Routes;