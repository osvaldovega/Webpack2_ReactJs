import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './components/App';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

class CreateRoutes extends Component {
	render() {
		return (
			<Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Home} />
          <Route path="About" component={About} />
          <Route path="Contact" component={Contact} />
        </Route>
			</Router>);
	}
}

export default CreateRoutes;
