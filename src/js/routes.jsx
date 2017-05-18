import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './components/App';
import Home from './components/Home';
import Rover from './components/Rover/Rover';
import About from './components/About/About';

class CreateRoutes extends Component {
	render() {
		return (
			<Router history={browserHistory}>
        <Route path="/" component={App}>
					<IndexRoute component={Home} />
					<Route path='/Rover' component={Rover} />
					<Route path="/About" component={About} />
        </Route>
			</Router>);
	}
}

export default CreateRoutes;
